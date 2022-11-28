import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import User from "./User";

const Buyer = () => {

    const buyerUrl = "https://ast-12-sellcell-server.vercel.app/allUsers/Buyer";

    const {
        data: buyer,
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["buyer"],
        queryFn: async () => {
            const res = await fetch(buyerUrl);
            const data = await res.json();
            return data;
        },
    });

    const handleDelete = (id) => {

        const proceed = window.confirm("Are you sure, you want to cancel this order ?");

        if (proceed) {
            fetch(`https://ast-12-sellcell-server.vercel.app/user/${id}`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        buyer.map((user) =>
                            <User

                                key={user._id}
                                user={user}
                                handleDelete={handleDelete}

                            ></User>
                        )}

                </tbody>
            </table>
        </div>

    );
};

export default Buyer;


