import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);

    // console.log(user?.email);

    const [isSeller] = useSeller(user?.email);

    const [isAdmin] = useAdmin(user?.email);

    // console.log(isSeller);

    return (

        <div>

            <div className='bg-primary'>
                <Navbar></Navbar>
            </div>

            <div className="drawer drawer-mobile h-[calc(100vh-68px)]">

                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                // checked={drawer}
                />

                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>


                <div className="drawer-side  border-r-4 border-black">

                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content ">

                        <li>
                            <NavLink to="/dashboard/myOrders">My Orders</NavLink>
                        </li>

                        {
                            isAdmin &&

                            <>
                                <li>
                                    <NavLink to="/dashboard/allUser">All Users</NavLink>
                                </li>

                                <li>
                                    <Link to="/dashboard/seller">All Sellers</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/buyer">All Buyers</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/allReports">All Reports</Link>
                                </li>
                            </>

                        }


                        {
                            isSeller && (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/addProduct">Add Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myProduct">My Products</NavLink>
                                    </li>
                                </>
                            )
                        }


                    </ul>

                </div>

            </div>

        </div>

    );

};


export default DashBoardLayout;


