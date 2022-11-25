import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();

    return (
        <section>

            <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                }}
            >

                <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex items-center justify-center">

                    <div className=" bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 flex flex-col items-center justify-center text-white py-14 px-6 lg:px-14 w-11/12 lg:w-auto">

                        <h1 className="text-7xl font-serif">Error!</h1>

                        {/* <h1 className="text-4xl font-serif py-2">Page not found</h1> */}

                        {error && (
                            <div>
                                <p className='text-red-600 font-semibold md:text-3xl px-5 text-justify py-5 text-4xl font-serif '>{error.statusText || error.message}</p>

                                <p className="text-black font-semibold text-center text-4xl pb-5">{error.status}</p>
                            </div>
                        )}

                        <p className="text-center pb-7 text-2xl ">
                            No signal here! we cannot find the page you are looking for...!!!
                        </p>

                        <Link to="/">
                            <button
                                className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 py-3 px-4 
                         border text-white text-lg hover:bg-black hover:bg-opacity-100 hover:font-semibold hover:px-10 hover:ease-in-out hover:text-success duration-1000 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-black">
                                Back to Homepage
                            </button>
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Error;


