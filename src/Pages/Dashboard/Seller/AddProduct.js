import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const ImageHostKey = process.env.REACT_APP_imgbb_key;

    const date = Date.now();

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    // console.log(user);
    // const [isLoading, setIsLoading] = useState()

    const handleAddProduct = (data) => {

        // console.log(data);

        const image = data.url[0];

        const formData = new FormData();

        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;

        // https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY

        // https://api.imgbb.com/1/upload?key=YOUR_CLIENT_API_KEY


        // console.log(url);

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                // console.log(imgData);

                if (imgData.success) {

                    const product = {

                        userName: user.displayName,
                        userEmail: user.email,
                        userImage: user.photoURL,

                        productName: data.productName,
                        category_name: data.category_name,
                        productImage: imgData.data.url,

                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,

                        purchase: data.purchase,
                        usedTime: data.usedTime,
                        shopLocation: data.shopLocation,
                        condition: data.condition,
                        sellerPhone: data.sellerPhone,

                        Time: date,

                        // verify: false,

                        // description: data.description,
                    };


                    //   console.log(product);
                    fetch("https://ast-12-sellcell-server.vercel.app/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            toast.success(`Your Product is successfully Added..!`);
                            navigate("/dashboard/myProduct");
                        });
                }
            });
    };

    return (

        <section className="flex justify-center items-center py-10">
            <div className="w-full">
                <form
                    className="max-w-xl mx-auto"
                    onSubmit={handleSubmit(handleAddProduct)}
                >

                    {/* sellerName */}
                    <div className="space-y-1 text-sm">

                        <label htmlFor="sellerName" className="block dark:text-gray-400">
                            Seller Name
                        </label>

                        <input
                            type="text"

                            {...register("sellerName")}

                            name="sellerName"
                            id="sellerName"
                            defaultValue={user?.displayName}
                            readOnly
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                        />

                    </div>

                    {/* productName */}
                    <div className="space-y-1 text-sm mt-5">

                        <label htmlFor="productName" className="block dark:text-gray-400">
                            Product Name
                        </label>

                        <input
                            type="text"

                            {...register("productName", {
                                required: "Product Name is required",
                            })}

                            name="productName"
                            id="productName"
                            placeholder="Product Name"
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                        />

                        {
                            errors.productName &&
                            <p className="text-red-600" role="alert">
                                {errors.productName?.message}
                            </p>
                        }

                    </div>

                    {/* category_name */}
                    <div className="space-y-1 text-sm">

                        <label htmlFor="category_name" className="block dark:text-gray-400">
                            Select Category Name
                        </label>

                        <select

                            {...register("category_name", {
                                required: "Please Select your Category Name",
                            })}

                            id="category_name"
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                        // required
                        >

                            <option value={""} disabled hidden selected>
                                Please Select your Category Name
                            </option>

                            <option value="Samsung">Samsung</option>

                            <option value="Apple">Apple</option>

                            <option value="Xiaomi">Xiaomi</option>

                        </select>

                        {
                            errors.category_name &&
                            <p className="text-red-600" role="alert">
                                {errors.category_name?.message}
                            </p>
                        }

                    </div>


                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                        {/* originalPrice */}
                        <div className="space-y-1 text-sm">

                            <label
                                htmlFor="originalPrice"
                                className="block dark:text-gray-400"
                            >
                                Original Price
                            </label>

                            <input
                                type="number"

                                {...register("originalPrice", {
                                    required: "Original Price is required",
                                })}

                                name="originalPrice"
                                id="originalPrice"
                                placeholder="Original Price"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                            />

                            {errors.originalPrice &&
                                <p className="text-red-600" role="alert">
                                    {errors.originalPrice?.message}
                                </p>
                            }

                        </div>

                        {/* resalePrice */}
                        <div className="space-y-1 text-sm">

                            <label htmlFor="resalePrice" className="block dark:text-gray-400">
                                Resale Price
                            </label>

                            <input
                                type="number"
                                {...register("resalePrice", {
                                    required: "Resale Price is required",
                                })}
                                name="resalePrice"
                                id="resalePrice"
                                placeholder="Resale Price"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                            />

                            {errors.resalePrice &&
                                <p className="text-red-600" role="alert">
                                    {errors.resalePrice?.message}
                                </p>
                            }

                        </div>

                        {/* purchase */}
                        <div className="space-y-1 text-sm">

                            <label htmlFor="purchase" className="block dark:text-gray-400">
                                Year of Purchase
                            </label>

                            <input
                                type="month"

                                {...register("purchase", {
                                    required: "Purchase year is Required",
                                })}

                                name="purchase"
                                id="purchase"
                                placeholder="Year of Purchase"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                            />

                            {errors.purchase &&
                                <p className="text-red-600" role="alert">
                                    {errors.purchase?.message}
                                </p>
                            }

                        </div>

                        {/* usedTime */}
                        <div className="space-y-1 text-sm">

                            <label htmlFor="usedTime" className="block dark:text-gray-400">
                                Used Time
                            </label>

                            <input
                                type="text"
                                {...register("usedTime", {
                                    required: "Used Time is Required",
                                })}
                                name="usedTime"
                                id="usedTime"
                                placeholder="Used Time"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                            />

                            {errors.usedTime &&
                                <p className="text-red-600" role="alert">
                                    {errors.usedTime?.message}
                                </p>
                            }

                        </div>

                        {/* shopLocation */}
                        <div className="space-y-1 text-sm">

                            <label htmlFor="shopLocation" className="block dark:text-gray-400">
                                Shop Location
                            </label>

                            <input
                                type="text"

                                {...register("shopLocation", {
                                    required: "Shop Location is Required",
                                })}

                                name="shopLocation"
                                id="shopLocation"
                                placeholder="Shop Location"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                            />

                            {errors.shopLocation &&
                                <p className="text-red-600" role="alert">
                                    {errors.shopLocation?.message}
                                </p>
                            }

                        </div>

                        {/* sellerPhone */}
                        <div className="space-y-1 text-sm">

                            <label htmlFor="sellerPhone" className="block dark:text-gray-400">
                                Phone Number
                            </label>

                            <input
                                type="tel"

                                {...register("sellerPhone", {
                                    required: "Phone Number is Required",
                                })}

                                name="sellerPhone"
                                id="sellerPhone"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                            />

                            {
                                errors.sellerPhone &&
                                <p className="text-red-600" role="alert">
                                    {errors.sellerPhone?.message}
                                </p>
                            }

                        </div>

                    </div>

                    {/* condition */}
                    <div className="space-y-1 text-sm">

                        <label htmlFor="condition" className="block dark:text-gray-400">
                            Select Product Condition
                        </label>

                        <select

                            {...register("condition", {
                                required: "Please Select Product Condition",
                            })}

                            id="condition"
                            className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                        // required
                        >

                            <option value={""} disabled hidden selected>
                                Select Product Condition
                            </option>

                            <option value="Excellent">Excellent</option>

                            <option value="Good">Good</option>

                            <option value="Fair">Fair</option>

                        </select>

                        {
                            errors.condition &&
                            <p className="text-red-600" role="alert">
                                {errors.condition?.message}
                            </p>
                        }

                    </div>

                    {/* Image File */}
                    <label
                        htmlFor="dropzone-file"
                        className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border dark:border-gray-700  rounded-md cursor-pointer "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-300 dark:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                        </svg>

                        <h2 className="mx-3 text-gray-400">Product Photo</h2>

                        <input

                            {...register("url", {
                                required: "Image is required",
                            })}

                            id="dropzone-file"
                            type="file"
                            className="hidden"
                        />

                    </label>

                    {
                        errors.url &&
                        <p className="text-red-600" role="alert">
                            {errors.url?.message}
                        </p>
                    }

                    {/* description */}
                    {/* <div className="space-y-1 text-sm  mt-5">
                        <label htmlFor="description" className="block dark:text-gray-400">
                            Description
                        </label>
                        <textarea
                            type="tel"
                            {...register("description", {
                                required: "Description is required",
                            })}
                            name="description"
                            id="description"
                            rows={5}
                            placeholder="Description..."
                            className="w-full px-4 py-3 border rounded-md dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400 "
                        />
                        {errors.description && (
                            <p className="text-red-600" role="alert">
                                {errors.description?.message}
                            </p>
                        )}
                    </div> */}


                    <button className="text-white bg-info hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold justify-center my-5 w-full flex">
                        Submit
                    </button>


                </form>


            </div>


        </section>


    );
};

export default AddProduct;


