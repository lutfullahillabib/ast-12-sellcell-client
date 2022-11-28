import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/mobile.png';

import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {

    return (
        <section>

            <footer className="px-4 divide-y bg-primary drop-shadow-xl shadow-xl">

                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">

                    <div className="lg:w-1/3 ">

                        <Link to="/" className="flex justify-center space-x-3 lg:justify-start hover:text-white duration-1000">

                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-500">

                                <img src={logo} className='w-12 h-12 ' alt="logo" />

                            </div>

                            <span className="self-center text-2xl font-bold">SellCell</span>

                        </Link>

                    </div>

                    <div className="grid grid-cols-2 text-lg gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 font-semibold">

                        <div className="space-y-3">

                            <h3 className="tracking-wide uppercase underline">Product</h3>

                            <ul className="space-y-1 ">
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000' >Features</Link>
                                </li>
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000'  >Integrations</Link>
                                </li>
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000'  >Pricing</Link>
                                </li>
                                <li>
                                    <Link to='/blog' className=' hover:text-white duration-1000'  >Blog</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="space-y-3">

                            <h3 className="tracking-wide uppercase underline">Company</h3>

                            <ul className="space-y-1">
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000'  >Privacy</Link>
                                </li>
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000'  >Terms of Service</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="space-y-3">

                            <h3 className="uppercase underline">Developers</h3>

                            <ul className="space-y-1">
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000'  >Public API</Link>
                                </li>
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000'  >Documentation</Link>
                                </li>
                                <li>
                                    <Link to='/' className=' hover:text-white duration-1000'  >Guides</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="space-y-3">

                            <div className="uppercase underline text-center ">Social media</div>

                            {/* text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 */}

                            <div className="flex justify-around space-x-3 ">

                                <Link to='/' title="Facebook" className="flex items-center p-1">

                                    <AiFillFacebook className='h-8 w-8 hover:scale-150 text-blue-900 duration-1000'
                                    ></AiFillFacebook>

                                </Link>

                                <Link to='/' title="Twitter" className="flex items-center p-1">

                                    <AiOutlineTwitter
                                        className='h-8 w-8 hover:scale-150 text-blue-900 
                                        hover:text-blue-600
                                        duration-1000'
                                    ></AiOutlineTwitter>

                                </Link>

                                <Link to='/' title="Instagram" className="flex items-center p-1">

                                    <AiFillInstagram
                                        className='h-8 w-8 hover:scale-150 
                                        text-info
                                       duration-1000'
                                    ></AiFillInstagram>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="py-6 text-center text-white font-semibold text-lg">Copyright &copy; {new Date().getFullYear()} SellCell. All rights reserved by SellCell.</div>

            </footer>

        </section>
    );
};

export default Footer;


