import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `https://ast-12-sellcell-server.vercel.app/orders?email=${user?.email}`;

    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    });

    const handleDelete = (id) => {

        const proceed = window.confirm("Are you sure? You want to Remove This Order ?");

        if (proceed) {
            fetch(`https://ast-12-sellcell-server.vercel.app/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.deletedCount > 0) {

                        toast.success("Successfully Deleted..!!");

                        refetch();

                    }
                });
        }
    };

    console.log(myOrders);

    if (isLoading) {
        return <Loading></Loading>
    }


    return (


        <div>
            {
                myOrders.length > 0 ? (
                    <>
                        <h1 className="text-4xl">MY ORDERS</h1>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Serial</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Payment</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myOrders.map((order, i) => (
                                                <tr className="hover">
                                                    <th>{i + 1}</th>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img
                                                                        src={order.productImage}
                                                                        alt="Avatar Tailwind CSS Component"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{order.productName}</td>
                                                    <td>{order.resalePrice}</td>



                                                    <td>
                                                        {order.resalePrice && !order.paid && (
                                                            <Link to={`/dashboard/payment/${order._id}`}>
                                                                <button className="text-white bg-info hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold">
                                                                    Pay Now
                                                                </button>
                                                            </Link>


                                                        )}
                                                        {order.resalePrice && order.paid && (
                                                            <button className="text-black bg-success hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold">
                                                                Paid
                                                            </button>
                                                        )}


                                                    </td>


                                                    <td>
                                                        <button onClick={() => handleDelete(order._id)} className="text-white bg-red-600 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold">
                                                            Remove Order
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl">
                            You have no Order..{" "}
                            <Link
                                to="/allProducts"
                                className="text-[#ffbd59] hover:underline cursor-pointer"
                            >
                                Order Now!
                            </Link>
                        </h1>
                    </>
                )}
        </div>


    );
};

export default MyOrders;

