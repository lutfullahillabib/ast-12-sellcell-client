import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const Category = () => {

    const { data: categories, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await fetch("https://ast-12-sellcell-server.vercel.app/category");
            const data = await res.json();
            console.log(data);
            return data;
        },
    });


    if (isLoading) {
        return <Loading></Loading>;
    }


    return (

        <section className="my-10">

            <h1 className="text-center font-bold text-5xl underline pb-10">Categories</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-3 gap-5">

                {
                    categories.map(category =>

                        <Link to={`/category/${category.category_name}`}

                            key={category._id}
                        >

                            <div
                                style={{
                                    backgroundImage: `url(${category.img})`,

                                }}

                                className=" bg-no-repeat bg-center rounded-2xl h-52  
                                    
                                    bg-cyan-50 shadow-xl
                                    ">

                                <div className='card-body h-full w-full bg-gradient-to-r from-black/60 to-transparent  border-4 border-cyan-300 rounded-2xl'>

                                    <h2 className=" text-white text-3xl font-semibold ">{category.category_name}</h2>

                                </div>

                            </div>

                        </Link>

                    )
                }

            </div>

            <h1 className="text-center font-bold text-5xl underline py-10">All Products</h1>

            <div >
                <Link to="/allProducts">

                    <div
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,

                        }}

                        className=" bg-no-repeat bg-center bg-cover rounded-2xl h-64  
                                    
                                    bg-white shadow-xl
                                    ">

                        <div className='card-body h-full w-full bg-gradient-to-r from-black/60 to-transparent  border-4 border-cyan-300 rounded-2xl'>

                            <h2 className=" text-white text-3xl font-semibold ">All Products</h2>

                        </div>

                    </div>

                </Link>
            </div>


        </section>


    );
};

export default Category;


