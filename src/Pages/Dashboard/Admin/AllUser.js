import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import User from "./User";

const AllUser = () => {

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user`);
            const data = await res.json();
            return data;
        },

    });


    const handleDelete = (id) => {

        const proceed = window.confirm("Are you sure, you want to cancel this User ?");

        if (proceed) {
            fetch(`http://localhost:5000/user/${id}`, {
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


    const handelUserVerify = (id) => {

        // console.log(id);

        fetch(`http://localhost:5000/user/verify/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Successfully Verified");
                    refetch();
                }
            });
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
                        users.map((user) =>
                            <User
                                key={user._id}
                                user={user}
                                handleDelete={handleDelete}
                                handelUserVerify={handelUserVerify}
                            ></User>
                        )}

                </tbody>

            </table>

        </div>


    );
};

export default AllUser;



