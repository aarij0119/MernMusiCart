import React from 'react';
import Logo from '/images/Logo.png'
import Footer from './Footer';
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';


const Register = () => {
    const [password, showpassword] = useState(false);
    const [formdata, setformdata] = useState({
        username: '',
        mobile: '',
        email: '',
        password: '',
    });

    const [fomrerror, seterror] = useState({
        username: '',
        mobile: '',
        email: '',
        password: '',
    });

    const ChangeHandler = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata, [name]: value
        })
    }

    const Showpasswordhandler = () => {
        showpassword((prev) => !prev)
    };
    const validator = () => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
            ;
        if (!formdata.username) {
            errors.username = "Name is required";
        } else if (Number(formdata.username)) {
            errors.username = "Name Can't be a Number";
        } else if (formdata.username.length < 3) {
            errors.username = "It should have maximux 3 characters";
        } else if (formdata.mobile.length === 0) {
            errors.mobile = "Mobile is required";
        } else if (!Number(formdata.mobile)) {
            errors.mobile = "Not a valid Number";
        } else if (formdata.mobile.length !== 10) {
            errors.mobile = "Mobile should have 10 digits";
        } else if (!regex.test(formdata.email)) {
            errors.email = "Not a valid email"
        } else if (formdata.password.length === 0) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(formdata.password)) {
            errors.password = "It should have 8 character and number and special character";
        }
        return errors;
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        const errors = validator();
        if (Object.keys(errors).length === 0) {
            console.log("Submit")

            console.log(formdata)
            setformdata({
                username: '',
                mobile: '',
                email: '',
                password: '',
            });
            seterror({
                username: '',
                mobile: '',
                email: '',
                password: ''
            })
        } else {
            seterror(errors);

        }

    }
    return (
        <div className="bg-white">
            <div className="w-full max-w-md absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 mb-4">
                <div className="text-center mb-3">
                    <div className=' flex items-center justify-center gap-2'>
                        <img src={Logo} alt="Musicart Logo" className='w-[3rem]' />
                        <h3 className='text-xl font-bold text-[#2E0052]'>Musicart</h3>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-200">
                    <h2 className="text-2xl mb-6 text-center font-medium">Create Account</h2>
                    <form onSubmit={SubmitHandler}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <span className='mb-2 inline-block text-red-800 font-bold'>{fomrerror.username}</span>
                            <input onChange={ChangeHandler} value={formdata.username} name='username' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                                Mobile Number
                            </label>
                            <span className='mb-2 inline-block text-red-800 font-bold'>{fomrerror.mobile}</span>
                            <input onChange={ChangeHandler} value={formdata.mobile} name='mobile' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Mobile Number" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email ID
                            </label>
                            <span className='mb-2 inline-block text-red-800 font-bold'>{fomrerror.email}</span>
                            <input name='email' onChange={ChangeHandler} value={formdata.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email ID" />
                        </div>
                        <div className="mb-2">
                            <label className="mb-1 text-gray-700 text-sm inline-block font-bold" htmlFor="password">
                                Password
                            </label>
                            <span className='mb-2 block text-red-800 font-bold'>{fomrerror.password}</span>
                            <div className='shadow appearance-none border rounded w-full flex items-center justify-between px-1'>
                                <input onChange={ChangeHandler} value={formdata.password} name='password' className="p-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type={password ? 'text' : 'password'} placeholder="Password" />
                                <button type='button' className='px-2' onClick={Showpasswordhandler}>
                                    {password ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-4 text-center">
                            By creating an account, you agree to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                        </p>
                        <div>
                            <button className="bg-[#2E0052] w-full cursor-pointer hover:bg-[#2f0052e4]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                    <p className="text-gray-600">Already have an account?</p>
                    <Link to={'/login'} className="inline-block align-baseline font-bold text-sm text-purple-700 hover:text-purple-800">
                        Log in
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
