import React from "react";

import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";

const SingleProduct = ({ product, setModalData, setReportModalData }) => {


    const {

        userName,
        userImage,
        productName,
        category_name,
        productImage,
        originalPrice,
        resalePrice,
        purchase,
        usedTime,
        shopLocation,
        condition,
        sellerPhone,
        Time,

        verify,

    } = product;


    return (
        <>

            <div>
                <div className="my-10">
                    <div className=" rounded-lg bg-primary shadow-md py-5 border-info  border-2 "  >

                        <div className='flex justify-center relative rounded-lg overflow-hidden'>
                            <div className='p-4 transition-transform duration-500 transform ease-in-out hover:scale-110 w-full'>

                                <img src={productImage} alt=''
                                    className=" rounded-lg  h-56 w-full"

                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;  // prevents looping
                                        currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                    }}
                                />

                            </div>
                        </div>

                        <div className="px-5">

                            <div className='flex justify-between'>
                                <h5 className="text-md tracking-tight text-black">{productName}</h5>
                                <i className='text-sm  text-black'>{category_name}</i>

                            </div>


                            <div className='space-y-1 mt-3 text-black '>
                                <div className="flex items-center  justify-between">
                                    <span className='text-sm'>Original Price: <b className="line-through text-red-600">${originalPrice}</b>
                                    </span>
                                    <span className='text-sm'>ReSelling Price <b className="text-info">${resalePrice}</b></span>
                                </div>


                                <div className='flex justify-between'>
                                    <p className='text-sm'>
                                        Used: <b>{usedTime}</b>
                                    </p>
                                    <p className='text-sm'>
                                        Condition: <b>{condition}</b>
                                    </p>
                                </div>
                                <div className='text-sm  flex justify-between'>
                                    <p> Seller Name: <b className="text-info">{userName}</b> </p>
                                    <p className='flex gap-1 mt-1'>Verified:
                                        {
                                            verify === "true" ? <AiFillCheckCircle className='text-blue-800 text-xl' /> :
                                                <AiFillCheckCircle className='text-red-500 text-xl' />
                                        }
                                    </p>

                                </div>
                            </div>
                            <hr className='border-gray-600 my-3' />
                            <div className='flex justify-between'>



                                <img src={userImage} alt=''
                                    className=" w-9 h-9 rounded-full border-2 border-white"

                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;  // prevents looping
                                        currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                    }}
                                />

                                <label onClick={() => setReportModalData(product)} htmlFor="ReportModal" className='block bg-white px-2 py-2 rounded-xl hover:bg-black cursor-pointer duration-1000'>
                                    <p className='text-red-500 text-sm flex gap-1 cursor-pointer '>Report <span className='text-xl'><AiFillWarning /></span> </p>
                                </label>

                            </div>
                            <div className='text-sm space-y-1 text-black mt-1'>
                                <p className=''>
                                    Seller Number: <b>{sellerPhone}</b>
                                </p>
                                <p>
                                    Location: <b>{shopLocation}</b>
                                </p>
                                <p> Purchase Year: <b>{purchase}</b></p>
                                <p>Post on: {new Date(Time).toLocaleString()}</p>

                            </div>




                        </div>

                        <div className='mt-5 flex justify-center'>


                            <label onClick={() => setModalData(product)} htmlFor="BookingModal" className="text-white bg-info hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold">Book Now</label>


                        </div>
                    </div>
                </div>
            </div>
        </>


    );

};


export default SingleProduct;



