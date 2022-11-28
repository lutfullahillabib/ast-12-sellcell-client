import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import MySingleProduct from "./MySingleProduct";


const MyProduct = () => {

    const { user } = useContext(AuthContext);

    const url = `https://ast-12-sellcell-server.vercel.app
/dashboard/myProduct?email=${user?.email}`;

    const {

        data: myProduct = [], isLoading, refetch } = useQuery({
            queryKey: ["myProduct", user?.email],
            queryFn: async () => {
                const res = await fetch(url);
                const data = await res.json();
                return data;
            },
        });




    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 w-full">

            {
                myProduct.map((product) => (
                    <MySingleProduct
                        key={product._id}
                        product={product}
                        refetch={refetch}
                    ></MySingleProduct>
                ))
            }

        </div>

    );
};

export default MyProduct;


