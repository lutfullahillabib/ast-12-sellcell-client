import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import Lottie from 'lottie-react'
import { GoogleAuthProvider } from 'firebase/auth';

import toast from 'react-hot-toast';

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import reg from '../../assets/register.json'
import { AuthContext } from '../../Contexts/AuthProvider';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);

    const [signUpError, setSignUpError] = useState('');

    const [accepted, setAccepted] = useState(false);

    const { createUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const handleSignUp = data => {

        console.log(data);

        setSignUpError('');

        // console.log(name, photoURL, email, password, confirmPassword);


        if (data.password !== data.confirm) {
            setSignUpError("Password Doesn't match");
            toast.error(`Error = Your Password didn't match.`);
            alert("Password Doesn't match");
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoURL
                }
                updateUser(userInfo)
                    .then(() => {

                        saveUser(data.name, data.email, data.photoURL, data.selectRole);

                        // console.log('Update User Profile Successful');

                        // reset();

                        // toast.success(`Registration Successful, 'Email' = ${data.email}`);

                        // toast(`Update User Profile Successful, 'Name' = ${data.name} .. Please, Reload..`);

                        // navigate('/');
                    })
                    .catch(err => console.error('UpdateProfile Error = ', err));

                // toast.success('User Created Successfully..!!');

            })
            .catch(error => {
                console.error('Error = ', error);

                const errorCode = error.code;
                const errorMessage = error.message;

                console.error(' errorCode = ', errorCode,
                    '\n',
                    ' errorMessage = ', errorMessage);

                toast.error(`Sign Up Error..!! = ${error}`);
                setSignUpError(error.message);
            });
    }


    const saveUser = (name, email, photoURL, role, verify = "false") => {
        const user = { name, email, photoURL, role, verify };
        fetch('https://ast-12-sellcell-server.vercel.app
            / user', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
        },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    .then(data => {
        console.log('save-user', data);


        console.log('Update User Profile Successful');

        reset();

        toast.success(`Registration Successful, 'Email' = ${data.email}`);

        toast(`Update User Profile Successful, 'Name' = ${data.name} .. Please, Reload..`);

        navigate('/');
    })
    }

const handleAccepted = event => {
    setAccepted(event.target.checked)
}


return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center py-20'>

        <div className="w-11/12 mx-auto md:w-full max-w-md p-8 space-y-3 rounded-xl bg-primary shadow-2xl  text-black cus-svg-register">

            <h1 className="text-2xl font-bold text-center">Register</h1>


            <p className="italic text-center sm:px-6  text-black py-3">Already have an account?
                <Link to='/login' title='Login / Sign in' className="underline text-black not-italic font-medium px-3 hover:text-white duration-1000">Login</Link>
            </p>

            <div className="flex items-center space-x-1">
                <div className="flex-1 h-px sm:w-16  bg-black"></div>
                <div className="flex-1 h-px sm:w-16  bg-black"></div>
                <div className="flex-1 h-px sm:w-16  bg-black"></div>
            </div>

            <form

                onSubmit={handleSubmit(handleSignUp)}

                className="space-y-6 ">

                {/* Name */}
                <div className="space-y-1">

                    <label htmlFor="name" className="block text-black text-start font-semibold text-xl">Name</label>

                    <input

                        {...register("name", {
                            required: "Name is required"
                        })}

                        type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md outline-info bg-blue-100  text-black font-medium text-lg placeholder:text-info placeholder:font-medium placeholder:italic " />

                    {
                        errors.name &&
                        <p role="alert" className='text-error'>
                            {errors.name?.message}
                        </p>
                    }

                </div>

                {/* photoURL */}
                <div className="space-y-1">

                    <label htmlFor="photoURL" className="block text-black text-start font-semibold text-xl">Photo-URL</label>

                    <input

                        {...register("photoURL", {
                            required: "Photo-URL is required"
                        })}

                        type="text" name="photoURL" id="photoURL" placeholder="Photo-URL" className="w-full px-4 py-3 rounded-md outline-info bg-blue-100  text-black font-medium text-lg placeholder:text-info placeholder:font-medium placeholder:italic" />

                    {
                        errors.photoURL &&
                        <p role="alert" className='text-error'>
                            {errors.photoURL?.message}
                        </p>
                    }

                </div>



                {/* Select-Role */}
                <div className="space-y-1">

                    <label htmlFor="selectRole" className="block text-black text-start font-semibold text-xl">
                        Select Your Role
                    </label>

                    <select

                        {...register("selectRole", {
                            required: "Please Select Your Role",
                        })}

                        className="w-full px-4 py-2 shadow-xl rounded-md border-info  
                            
                            outline-info  bg-blue-100  text-info  placeholder:italic font-semibold text-lg italic
                            "

                    // required

                    >

                        <option
                            value={""}
                            disabled hidden selected
                            className="outline-info "
                        >
                            Select Your Role
                        </option>


                        <option value="Buyer"
                            className="text-orange-600  font-bold text-xl"
                        >
                            Buyer
                        </option>

                        <option value="Seller"
                            className="text-red-600  font-bold text-xl"
                        >
                            Seller
                        </option>

                    </select>

                    {
                        errors.selectRole &&
                        <p className="text-red-600" role="alert">
                            {errors.selectRole?.message}
                        </p>
                    }


                </div>



                {/* Email */}
                <div className="space-y-1">

                    <label htmlFor="email" className="block text-black text-start font-semibold text-xl">Email</label>

                    <input

                        {...register("email", {
                            required: "Email Address is required"
                        })}

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
                                message: 'Password Must be 6 char or longer...'
                            },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message: 'Password must have Uppercase, Number and Special Characters'
                            }
                        })}

                        type={showPass1 ? 'text' : "password"}

                        name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md outline-info bg-blue-100  text-black font-medium text-lg placeholder:text-info placeholder:font-medium placeholder:italic" />

                    <div className="absolute right-2 top-[2.37rem] cursor-pointer bg-black rounded-full p-1 text-white hover:bg-primary hover:text-black"

                        onClick={() => setShowPass1(!showPass1)}
                    >
                        {
                            showPass1 ?
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

                </div>

                {/* Confirm Password */}
                <div className="space-y-1 relative">

                    <label htmlFor="confirm" className="block text-black text-start font-semibold text-xl">Confirm Password</label>

                    <input

                        {...register("confirm", {
                            required: "Confirm Password is required",


                            validate: (val) => {
                                if (watch('password') !== val) {
                                    return "Passwords Doesn't Match";
                                }
                            },


                        })}

                        type={showPass2 ? 'text' : "password"}

                        name="confirm" id="confirm" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md outline-info bg-blue-100  text-black font-medium text-lg placeholder:text-info placeholder:font-medium placeholder:italic" />


                    <div className="absolute right-2 top-[2.37rem] cursor-pointer bg-black rounded-full p-1 text-white hover:bg-primary hover:text-black"

                        onClick={() => setShowPass2(!showPass2)}
                    >
                        {
                            showPass2 ?
                                <AiFillEye className='h-6 w-6 ' />
                                :
                                <AiFillEyeInvisible className='h-6 w-6 ' />
                        }
                    </div>


                    {
                        errors.confirm &&
                        <p role="alert" className='text-red-600'>
                            {errors.confirm?.message}
                        </p>
                    }


                </div>


                <div className="flex items-center font-medium italic py-2">
                    <input type="checkbox" name="remember" id="remember" className=" rounded-md focus:ring-info focus:border-info focus:ring-2 accent-info h-5 w-5"

                        onClick={handleAccepted}

                    />

                    <label htmlFor="remember" className="pl-2 text-black hover:text-white hover:underline cursor-pointer duration-1000">
                        Accept <Link className='underline text-info hover:text-black duration-1000'>Terms & Conditions</Link> .
                    </label>
                </div>

                {
                    signUpError &&
                    <p className='text-red-600 font-semibold text-xl'>
                        {signUpError}
                    </p>
                }

                <button

                    disabled={!accepted}

                    className="disabled:bg-neutral hover:disabled:bg-red-700 hover:disabled:text-white block w-full p-3 text-center text-white bg-info rounded-lg font-medium hover:text-black hover:bg-blue-500 duration-1000">
                    Sign Up
                </button>

            </form>

            {/* <p className='text-red-600 font-semibold text-xl'>{signUpError}</p> */}

        </div>

        <Lottie animationData={reg} loop={true} className='w-[80%] mx-auto' />


    </section>
);
};

export default SignUp;



