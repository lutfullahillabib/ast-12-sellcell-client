import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CheckOutForm = ({ orders }) => {
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const { resalePrice, email, username, _id, productId } = orders;

    console.log(productId);
    console.log(orders);
    console.log(username);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setClientSecret(data.clientSecret)
            });
    }, [resalePrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError("");
        }
        setSuccess("");
        setProcessing(true);
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: email,
                    },
                },
            });
        if (confirmError) {
            setCardError(confirmError.message);
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
            };

            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    // authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess("Congrats! Your payment Completed");
                        setTransactionId(paymentIntent.id);
                    }
                });
        }
        setProcessing(false);
        console.log(paymentIntent);
    };

    const handleSold = (id) => {
        fetch(`http://localhost:5000/soldProduct/sold/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("paid successful.");
                }
            });
    };

    return (
        // <>
        //     <form onSubmit={handleSubmit}>
        //         <CardElement
        //             options={{
        //                 style: {
        //                     base: {
        //                         fontSize: "16px",
        //                         color: "#424770",
        //                         "::placeholder": {
        //                             color: "#aab7c4",
        //                         },
        //                     },
        //                     invalid: {
        //                         color: "#9e2146",
        //                     },
        //                 },
        //             }}
        //         />

        //         <button
        //             className="btn btn-sm mt-4 btn-primary"
        //             type="submit"
        //             // disabled={!stripe || !clientSecret || processing}

        //             disabled={!stripe || !clientSecret || processing}

        //         >
        //             Pay
        //         </button>
        //     </form>
        //     <p className="text-red-500">{cardError}</p>
        //     {success && (
        //         <div>
        //             <p className="text-green-500">{success}</p>
        //             <p>
        //                 Your TransactionId:{" "}
        //                 <span className="font-bold">{transactionId}</span>
        //             </p>
        //         </div>
        //     )}
        // </>

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />

                <button
                    className="btn btn-sm mt-8 btn-primary text-white "
                    type="submit"

                    onClick={() => handleSold(productId)}

                    // disabled={!stripe ||   processing}


                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            <p className="text-red-500 mt-3">{cardError}</p>
            {success && (
                <div className="mt-5 text-center space-y-1">
                    <p className="text-blue-700">{success}</p>
                    <p>
                        Your TransactionId:{" "}
                        <span className="font-semibold">{transactionId}</span>
                    </p>
                </div>
            )}
        </>

    );
};

export default CheckOutForm;



