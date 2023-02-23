import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const BookingModal = ({ modalData, setModalData }) => {

    // console.log(modalData);
    const { productName, resalePrice, productImage, _id } = modalData;

    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {

        event.preventDefault();
        const form = event.target;

        const username = form.username.value;
        const email = form.email.value;

        const productName = form.productName.value;

        const buyerPhone = form.buyerPhone.value;

        const meetLocation = form.meetLocation.value;

        const buying = {

            productName,
            productImage,
            resalePrice,

            username,
            email,

            buyerPhone,

            meetLocation,

            productId: _id

        };


        fetch("https://ast-12-sellcell-server.vercel.app/bookProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(buying),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success(`${productName} Booked..!! Pay for confirm your Order..`);
                    form.reset();
                    setModalData(null);
                }

                else {
                    toast.error(data.message);
                }
            });
    };



    return (


        <div>

            <input type="checkbox" id="BookingModal" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box text-gray-700 relative">

                    <label
                        htmlFor="BookingModal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>

                    <h3 className="text-lg font-bold">{productName}</h3>

                    {/* form */}
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 mt-10"
                    >
                        <div>

                            <label className="label" htmlFor="username">
                                <span className="label-text">User Name</span>
                            </label>

                            <input
                                name="username"
                                type="text"
                                defaultValue={user?.displayName}
                                disabled
                                className="input w-full input-bordered"
                            />

                        </div>

                        <div className="mt-2">

                            <label className="label" htmlFor="email">
                                <span className="label-text">User Email</span>
                            </label>

                            <input
                                name="email"
                                type="email"
                                defaultValue={user?.email}
                                disabled
                                className="input w-full input-bordered"
                            />

                        </div>


                        <div className="mt-2">

                            <label className="label" htmlFor="productName">
                                <span className="label-text">Product Name</span>
                            </label>

                            <input
                                name="productName"
                                type="text"
                                defaultValue={productName}
                                disabled
                                className="input w-full input-bordered"
                            />

                        </div>


                        <div className="mt-2">

                            <label className="label" htmlFor="price">
                                <span className="label-text">Product Price</span>
                            </label>

                            <input
                                name="price"
                                type="number"
                                defaultValue={resalePrice}
                                disabled
                                className="input w-full input-bordered"
                            />

                        </div>

                        <div className="mt-2">

                            <label className="label" htmlFor="meetLocation">
                                <span className="label-text">Where you want to meet?</span>
                            </label>

                            <input
                                name="meetLocation"
                                type="text"
                                placeholder="Meeting Location"
                                className="input w-full input-bordered"
                                required
                            />

                        </div>


                        <div>

                            <label className="label" htmlFor="buyerPhone">
                                <span className="label-text">Your Phone Number</span>
                            </label>

                            <input
                                name="buyerPhone"
                                type="text"
                                placeholder="Phone Number"
                                className="input w-full input-bordered"
                                required
                            />

                        </div>

                        <br />

                        <input
                            className="text-white bg-info hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold block w-full "
                            type="submit"
                            value="Submit"
                        />

                    </form>

                </div>

            </div>

        </div>

    );

};

export default BookingModal;


