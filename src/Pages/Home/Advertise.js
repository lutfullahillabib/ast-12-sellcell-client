import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Advertise = ({ advertises, loading }) => {

    // const { productName, productImage, condition, originalPrice, resalePrice } = advertises


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>

            <div className='my-5 shadow-lg bg-info rounded-2xl'>

                <marquee className='text-2xl font-semibold italic text-white p-5 ' scrollamount="13">

                    Buy or Sell Mobile by Your Choice,
                    With Best Price.!
                    {' '}
                    A huge Discount is going on. Don't miss the Opportunity...

                </marquee>

            </div>

            <h1 className="text-center font-bold text-5xl underline py-2">Advertise</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5'>


                {

                    advertises.map(advertise =>

                        <div
                            key={advertise._id}
                            className=" rounded-lg shadow-md bg-primary border-0  flex justify-between flex-col ">

                            {/* p-8 */}
                            <div className='m-8'>

                                <img src={advertise?.productImage} alt=''
                                    className=" rounded-lg  h-56 w-full"

                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;  // prevents looping
                                        currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                                    }}
                                />

                            </div>

                            <div className="px-5 pb-5 flex justify-between flex-col h-72">

                                <h5 className="text-xl font-semibold tracking-tight text-white text-center">{advertise?.productName}</h5>

                                <div className="flex flex-col gap-5 items-start justify-center mt-2.5 mb-5">
                                    <span className="bg-blue-100 text-info text-lg font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 flex items-center gap-1">Original Price:<b className='line-through text-red-600'> ${advertise?.originalPrice}</b> </span>

                                    <span className="bg-blue-100 text-info text-lg font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 flex items-center gap-1">Resale Price:<b> ${advertise?.resalePrice}</b> </span>
                                </div>

                                <p className="text-xl font-bold text-info">Post On: <b className='italic'>{new Date(advertise.Time).toLocaleString()}</b></p>

                                <div className="flex justify-end items-center mt-5">

                                    <Link to={`/allProducts`} className="text-white bg-info hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold">See Products</Link>
                                </div>

                            </div>
                        </div>


                    )
                }

            </div>

        </div>
    );
};

export default Advertise;


