
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import toast from 'react-hot-toast';

import React, { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

import { AuthContext } from "../../Contexts/AuthProvider";

import Lottie from 'lottie-react'
import log from '../../assets/login.json'

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";


const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [loginError, setLoginError] = useState('');

    const { signIn, providerLogin, resetPassword } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const [userEmail, setUserEmail] = useState("");

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                saveUser(user?.displayName, user?.email, user?.photoURL);

                // toast.success(`Login Successful, 'Email' = ${user.email}`);

                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);

                toast.error(`Error = ${error.message}`);
            })
    }

    const handleLogin = data => {

        console.log(data);

        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                toast.success(`Login Successful, 'Email' = ${user.email}`);

                reset();

                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error('Error = ', error);

                const errorCode = error.code;
                const errorMessage = error.message;

                console.error(
                    '\t',
                    'errorCode = ', errorCode,
                    '\n',
                    '\n',
                    '\t',
                    'errorMessage = ', errorMessage);

                toast.error(`Login Error..!! = ${error}`);
                setLoginError(error.message);
            });
    }

    const saveUser = (name, email, photoURL, role = "Buyer", verify = "false") => {
        const user = { name, email, photoURL, role, verify };
        fetch('http://localhost:5000/user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save-user = google', data);
                if (data.acknowledged) {

                    toast.success(`Google Login Successful, 'Email' = ${user.email}`);

                    navigate(from, { replace: true });
                }

            })
    }

    const passwordHandler = () => {
        resetPassword(userEmail)
            .then(() => {

                setLoginError("");

                toast.success("Password Reset for Email sent, Please check your Email.");

                reset();
                setUserEmail('');

            })
            .catch((error) => {
                console.error('Error = ', error);

                const errorCode = error.code;
                const errorMessage = error.message;

                console.error(' errorCode = ', errorCode,
                    '\n',
                    ' errorMessage = ', errorMessage);

                setLoginError(`Forgot Pass Error = ${errorCode}`);

                toast.error(`Forgot Pass Error = ${errorCode}`);
            });
    };
    const handelEmail = (e) => {
        // console.log(e.target.value)
        setUserEmail(e.target.value);
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center py-20'>

            <Lottie animationData={log} loop={true} className='w-[80%] mx-auto' />


            <div className="w-11/12 mx-auto md:w-full max-w-md p-8 space-y-3 rounded-xl bg-primary text-black cus-svg-login">

                <h1 className="text-2xl font-bold text-center">Login</h1>

                <form

                    onSubmit={handleSubmit(handleLogin)}

                    className="space-y-6 ">

                    {/* Email */}
                    <div className="space-y-1">

                        <label htmlFor="email" className="block text-black text-start font-semibold text-xl">Email</label>

                        <input

                            {...register("email", {
                                required: "Email Address is required"
                            })}

                            onChange={handelEmail}

                            type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md outline-info bg-blue-100  text-black font-medium text-lg placeholder:text-info placeholder:font-medium placeholder:italic" />

                        {
                            errors.email &&
                            <p role="alert" className='text-error'>
                                {errors.email?.message}
                            </p>
                        }

                    </div>


                    {/* Password */}
                    <div className="space-y-1 relative">

                        <label htmlFor="password" className="block text-black text-start font-semibold text-xl">Password</label>

                        <input

                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password Must be 6 char or longer with Uppercase, Number and Special Characters"
                                }
                            })}

                            type={showPass ? 'text' : "password"}

                            name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md outline-info bg-blue-100  text-black font-medium text-lg placeholder:text-info placeholder:font-medium placeholder:italic" />

                        <div className="absolute right-2 top-[2.37rem] cursor-pointer bg-black rounded-full p-1 text-white hover:bg-primary hover:text-black"

                            onClick={() => setShowPass(!showPass)}
                        >
                            {
                                showPass ?
                                    <AiFillEye className='h-6 w-6 ' />
                                    :
                                    <AiFillEyeInvisible className='h-6 w-6 ' />
                            }
                        </div>

                        {
                            errors.password &&
                            <p role="alert" className='text-red-600'>
                                {errors.password?.message}
                            </p>
                        }

                        {/*  */}
                        <div className="flex justify-between font-medium italic py-5">

                            <div className="flex items-center">

                                <input type="checkbox" name="remember" id="remember" className=" rounded-md focus:ring-info focus:border-info focus:ring-2 accent-info h-5 w-5 " />

                                <label htmlFor="remember" className="pl-2 text-black hover:text-white hover:underline cursor-pointer duration-1000">Remember me</label>

                            </div>

                            <p onClick={passwordHandler} className='hover:text-white text-black hover:underline cursor-pointer duration-1000'>Forgot Password?</p>

                        </div>

                    </div>


                    <button className="block w-full p-3 text-center text-white bg-info rounded-lg font-medium hover:text-black hover:bg-blue-500 duration-1000">Login</button>


                </form>

                {/* <p className='text-red-600 font-semibold text-xl'>{error}</p> */}

                <div>
                    {
                        loginError &&
                        <p className='text-red-600 font-semibold text-xl'>
                            {loginError}
                        </p>
                    }
                </div>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16  bg-info"></div>
                    <p className="px-3 text-black">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16  bg-info"></div>
                </div>

                <div className="flex justify-center space-x-4">


                    <button

                        onClick={handleGoogleSignIn}

                        title="Log in with Google" className="p-3 bg-info hover:bg-blue-100 hover:text-black rounded-full text-white
                        
                         focus:ring-2 focus:ring-offset-1 focus:ring-info hover:scale-125 duration-1000
                        ">

                        <FaGoogle className='text-3xl' />
                    </button>


                </div>

                <p className="italic text-center sm:px-6  text-black">Don't have an account?
                    <Link to='/signup' title='Register / Sign Up' className="underline text-black not-italic font-medium px-3 hover:text-white duration-1000">Sign up</Link>
                </p>


            </div>

        </div>

    );
};

export default Login;


