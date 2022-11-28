import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// const stripePromise = loadStripe(
//     "pk_test_51M8tWYGJ8MeUHlPfZ7jHRmtkjSIASzTZkIUM4jTPBDlplH7iNbXGjX64RKcORphytOKNSVRGpfqpqhcAlZuH7fap007jUXoKnU"
// );

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



const Payment = () => {
    const orders = useLoaderData();
    console.log(orders);

    const { productName, resalePrice, productImage } = orders

    return (
        <div className="w-96 md:w-1/2 my-12 mx-auto shadow-lg bg-sky-100 py-5 px-5 md:px-8 rounded-md">
            <h3 className="my-8 text-md text-center text-info">Please pay <b>${resalePrice}</b> to complete your order for <b>{productName}</b> </h3>

            <Elements stripe={stripePromise}>
                <CheckOutForm orders={orders} />
            </Elements>
        </div>
    );
};


export default Payment;


