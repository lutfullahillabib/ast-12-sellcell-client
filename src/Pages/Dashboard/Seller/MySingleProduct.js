import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

const MySingleProduct = ({ product, refetch }) => {


    const handleDelete = (id) => {

        const proceed = window.confirm("Are you sure, you want to cancel this order ?");

        if (proceed) {
            fetch(`https://ast-12-sellcell-server.vercel.app/products/${id}`, {
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



    // const handelAdvertise = (product) => {
    //     console.log(product)

    //     const advertiseProduct = {
    //         productName: product.productName,
    //         userEmail: product.userEmail,
    //         productId: product._id,
    //         productImage: product.productImage,
    //         condition: product.condition,
    //         originalPrice: product.originalPrice,
    //         resalePrice: product.resalePrice,
    //         Time: product.Time
    //     }


    //     console.log(advertiseProduct);


    //     fetch('https://ast-12-sellcell-server.vercel.app/advertise', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(advertiseProduct)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log('save-user', data)
    //             toast.success('advertise added successfully')


    //         })
    // }


    const handelAdvertise = (product) => {

        // console.log(product)

        fetch(`https://ast-12-sellcell-server.vercel.app/myAdvertise/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Advertise SuccessFully')
                    refetch();
                }

                else if (data.matchedCount > 0) {
                    toast.error('Already Advertised')
                    refetch();
                }
            })
    }



    const {

        _id,

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

        advertise

    } = product;



    return (

        <div>
            <div className="w-11/12 mx-auto text-black rounded-lg bg-primary shadow-md border-info border-2 my-3  p-5"  >

                <div className='flex justify-center  rounded-lg overflow-hidden'>
                    <div className='p-2 transition-transform duration-500 transform ease-in-out hover:scale-110 w-full'>
                        <img className=" rounded-lg h-44 w-full" src={productImage} alt="" />
                    </div>
                </div>

                <div className="px-5">

                    <div className='text-black space-y-1 '>
                        {
                            advertise === 'true' &&
                            <marquee className='text-black mt-2' behavior="alternate" scrollamount="13"><i>Currently Advertising...</i> </marquee>
                        }
                        <h3 className='text-md'> <b>{productName}</b> </h3>
                        <h3 className='text-md'>Original Price: <b className='line-through text-red-600'> ${originalPrice}</b> </h3>
                        <h3 className='text-md'>Selling Price: <b className="text-info">${resalePrice}</b> </h3>
                        <p >Post On: <b className='text-xs'>{new Date(Time).toLocaleString()}</b> </p>
                        <p>Sold Status: <strong>Unsold</strong> </p>


                        <div className=' flex justify-between pt-4'>

                            <p onClick={() => handelAdvertise(product)} className='flex gap-2 items-center text-info bg-white p-2 rounded-xl hover:bg-black duration-1000 hover:text-white cursor-pointer'> Advertise: <AiOutlineVideoCameraAdd className='text-2xl' /></p>

                            <button onClick={() => handleDelete(product)} className="text-white bg-red-600 hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"> Delete </button>



                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default MySingleProduct;


