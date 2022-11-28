import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import ReportModal from "./ReportModal";
import SingleProduct from "./SingleProduct";

const AllProduct = () => {

    const { data: products, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("https://ast-12-sellcell-server.vercel.app/products");
            const data = await res.json();
            return data;
        },
    });

    const [modalData, setModalData] = useState(null);

    const [reportModalData, setReportModalData] = useState(null);

    if (isLoading) {
        return <Loading></Loading>
    }


    // console.log(product.length);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

            {
                products.map((product) =>
                    <SingleProduct
                        key={product._id}
                        product={product}
                        setModalData={setModalData}
                        setReportModalData={setReportModalData}
                    ></SingleProduct>
                )
            }

            <div>

                {
                    modalData &&

                    <BookingModal
                        modalData={modalData}
                        setModalData={setModalData}
                    ></BookingModal>
                }

            </div>

            <div>
                {
                    reportModalData &&
                    <ReportModal
                        reportModalData={reportModalData}
                        setReportModalData={setReportModalData}
                    ></ReportModal>
                }

            </div>

        </div>

    );

};

export default AllProduct;



