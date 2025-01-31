import React, { useState } from 'react';
import Logo from '/images/Logo.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [password,setshowpassword] = useState(false);
    const[formdata,setfromdata] = useState({
        email:'',
        password:'',
    })
    const PasswordHandler = () =>{
        setshowpassword((prev) => !prev)
       
    }
    const Changehandler = (e) =>{
        const {name,value}  = e.target;
        setfromdata({
            ...formdata,[name]:value
        })
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(formdata)
    }
    return (
        <div className="bg-white  min-h-screen">
            <div className="w-full max-w-md absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2">
                <div className="mb-4 flex items-center justify-center gap-2">
                    <img src={Logo} alt="Musicart Logo" className="w-[3rem]" />
                    <h1 className="text-3xl font-bold text-[#2E0052]">Musicart</h1>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign in</h2>
                    <form onSubmit={SubmitHandler}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Enter your email
                            </label>
                            <input name='email' onChange={Changehandler} value={formdata.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className='flex items-center justify-between border shadow rounded'>
                            <input name='password' onChange={Changehandler} value={formdata.password} className="p-2.5 appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type={password ? 'text' : 'password'  } placeholder="Password" />
                            <button type='button' onClick={PasswordHandler} className='px-2.5'>{password ? < FaEye /> : <FaEyeSlash /> }</button> 
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#2E0052] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                                Continue
                            </button>
                        </div>
                        <p className="text-xs text-gray-600 mt-4 text-center">
                            By continuing, you agree to Musicart privacy notice and conditions of use.
                        </p>
                    </form>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">New to Musicart?</p>
                    <Link to={'/'} className="inline-block align-baseline font-bold text-sm text-[#2E0052]" href="#">
                        Create your Musicart account
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
