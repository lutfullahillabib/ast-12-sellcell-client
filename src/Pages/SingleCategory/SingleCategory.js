import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import ReportModal from "./ReportModal";
import SingleProduct from "./SingleProduct";

import noData from '../../assets/noData.json';
import Lottie from 'lottie-react';


const SingleCategory = () => {

    const products = useLoaderData();

    const [modalData, setModalData] = useState(null);

    const [reportModalData, setReportModalData] = useState(null);

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    return (

        <>

            {
                products?.length > 0 ?

                    <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-4 gap-6 mt-10">



                        {
                            products.map((product) =>
                                <SingleProduct
                                    product={product}
                                    key={product._id}
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

                    :
                    <>


                        <div className="flex justify-center my-10 mx-auto">
                            <div className="mx-auto  h-1/2">
                                <Lottie
                                    className="mx-auto"
                                    animationData={noData}
                                    loop={true}
                                />
                            </div>
                        </div>
                    </>
            }

        </>



    );

};


export default SingleCategory;


