import React from "react";

const Subscribe = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    };


    return (


        <section className="flex flex-col my-10 mx-auto overflow-hidden bg-success rounded-lg shadow-xl md:flex-row md:h-48 ">


            <div className="md:flex md:items-center md:justify-center md:w-1/2 bg-info">

                <div className="px-6 py-6 md:px-8 md:py-0 text-white">

                    <h2 className="mb-2 text-xl font-bold  text-center">
                        Subscribe and Get notified about upcoming Products
                    </h2>

                    <hr />
                    <hr />
                    <hr />

                    <p className="mt-2 text-center text-lg ">
                        Welcome, to Second Hand Mobile Buying and Selling eShop.
                    </p>

                </div>

            </div>

            <div className="md:flex px-9 bg-primary items-center justify-center py-6 md:py-0 md:w-1/2 ">

                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col p-1.5 overflow-hidden border-2 rounded-lg border-black lg:flex-row focus-within:ring focus-within:border-white focus-within:ring-info gap-2 ">

                        <input
                            className="px-6 py-2 w-full rounded-md outline-info bg-blue-100  text-black font-medium text-lg placeholder:text-info placeholder:font-medium placeholder:italic
                            "
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            aria-label="Enter Your Email"
                            required
                        />

                        <button className="px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-1000 transform bg-info focus:outline-none hover:bg-black rounded-md">
                            subscribe
                        </button>

                    </div>

                </form>

            </div>

        </section>


    );

};



export default Subscribe;


