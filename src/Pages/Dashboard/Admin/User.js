import React from "react";

const User = ({ user, handleDelete, handelUserVerify }) => {

    const { name, email, photoURL, role, verify, _id, } = user;

    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 border-2 border-black">


                            <img src={photoURL} alt=''


                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;  // prevents looping
                                    currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{role}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>

                {/* {
                    role === "Admin" ?

                        <button
                            className="bg-blue-700  text-white py-1 px-2 rounded-lg"
                            disabled
                        >
                            Admin
                        </button>

                        :

                        role === "Seller" ?

                            <button
                                onClick={() => handelUserVerify(_id)}
                                className="bg-blue-700  text-white py-1 px-2 rounded-lg"
                            >
                                {verify === "true" ? "verified" : "Verify"}
                            </button>

                            :

                            <p> ---- </p>

                } */}


                {
                    role === "Admin" ?

                        <button
                            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"
                            disabled
                        >
                            Admin
                        </button>

                        :

                        role === "Buyer" ?

                            <button

                                className="text-white bg-blue-600 hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"
                            >
                                Buyer
                            </button>

                            :

                            role === "Seller" && verify === "true" ?

                                <button

                                    className="text-black bg-success hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"
                                >
                                    Verified
                                </button>

                                :

                                <button
                                    onClick={() => handelUserVerify(_id)}
                                    className="text-white bg-info hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"
                                >
                                    Verify
                                </button>

                }



            </td>


            <th>

                {
                    role === "Admin" ?

                        <button
                            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"
                            disabled
                        >
                            Admin
                        </button>

                        :

                        <button
                            onClick={() => handleDelete(_id)}
                            className="text-white bg-red-600 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"
                        >
                            Delete
                        </button>

                }

            </th>

        </tr>

    );

};

export default User;



