import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import User from './User';

const Seller = () => {

    const sellerUrl = "http://localhost:5000/allUsers/Seller";

    const { data: seller, refetch, isLoading } = useQuery({
        queryKey: ["seller"],
        queryFn: async () => {
            const res = await fetch(sellerUrl);
            const data = await res.json();
            return data;
        },
    });


    const handleDelete = (id) => {

        const proceed = window.confirm("Are you sure, you want to cancel this order ?");

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
                    toast.success("Verified Successfully..!!");
                    refetch();
                }
            });
    };


    // console.log(seller);


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
                        seller.map((user) =>
                            <User
                                key={user._id}
                                user={user}
                                handleDelete={handleDelete}
                                handelUserVerify={handelUserVerify}
                            ></User>
                        )
                    }

                </tbody>
            </table>
        </div>

    );

};

export default Seller;


