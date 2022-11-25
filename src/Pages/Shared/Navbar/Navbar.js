import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

import logo from '../../../assets/mobile.png';
import { FaUserAlt } from 'react-icons/fa';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <React.Fragment>

        <li><NavLink to='/' className='rounded-lg font-semibold text-lg flex justify-center items-center'>Home</NavLink></li>

        <li><NavLink to='/blog' className='rounded-lg font-semibold text-lg flex justify-center items-center'>Blog</NavLink></li>

        {
            user?.uid ?
                <>
                    <li>
                        <NavLink to='/dashboard' className='rounded-lg font-semibold text-lg flex justify-center items-center'>
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <p className='rounded-lg font-bold bg-accent  border-accent border-2 duration-1000 text-white hover:text-red-600 hover:bg-white flex justify-center items-center' title='User Name'>
                            {user?.displayName ? user?.displayName : <span >'Reload'</span>}
                        </p>
                    </li>

                    <li>
                        <button
                            onClick={handleLogOut}
                            className='rounded-lg font-semibold text-xl bg-error text-white flex justify-center items-center'>
                            Sign Out
                        </button>
                    </li>
                </>
                :
                <>
                    <li>
                        <NavLink
                            to='/login'
                            className='rounded-lg font-semibold text-xl flex justify-center items-center'>
                            Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/signup'
                            className='rounded-lg font-semibold text-xl flex justify-center items-center'>
                            Sign Up
                        </NavLink>
                    </li>
                </>
        }

        <Link to="/" className='flex justify-center items-center'>
            {user?.photoURL ?

                <img src={user?.photoURL} alt='Profile'
                    title={user?.displayName}
                    className='h-12 w-12 rounded-full border-2 border-white'

                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;  // prevents looping
                        currentTarget.src = "https://img.icons8.com/clouds/100/000000/no-image.png";
                    }}
                />

                // <img
                //     src={user?.photoURL}
                //     alt='Profile'
                //     title={user?.displayName}
                //     className='h-12 w-12 rounded-full border-2 border-black'
                // >
                // </img>

                :

                <FaUserAlt
                    title='Profile'
                    className='rounded-full bg-info text-white p-2 h-12 w-12'
                ></FaUserAlt>
            }
        </Link>


    </React.Fragment>

    return (
        <section className='w-11/12 mx-auto '>
            <div className="navbar  flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow border-4 border-white rounded-box w-52 gap-3 bg-primary">

                            {menuItems}

                        </ul>
                    </div>


                    <Link to="/" className="btn btn-ghost normal-case text-lg md:text-xl hover:text-white duration-1000">
                        <img src={logo} className='md:w-12 md:h-12 h-8 w-8' alt="logo" />

                        <span className='px-2'>SellCell</span>
                    </Link>

                    {/* <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link> */}

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-3">

                        {menuItems}

                    </ul>
                </div>

                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </section>
    );
};

export default Navbar;

