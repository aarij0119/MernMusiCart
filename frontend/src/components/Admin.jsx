import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();
    const [admindata, setadmindata] = useState({
        email: '',
        password: '',
    });
    const [error, seterror] = useState({
        nameerror: '',
        passworderror: '',
    });

    const HandleChange = (e) => {
        const { value, name } = e.target;
        setadmindata({
            ...admindata, [name]: value
        });
    }
    const validator = () => {
        let error = {};
        if (admindata.email === '' || null) {
            error.email = "Email can't be empty";
        } else if (admindata.password === '' || null) {
            error.password = "Password can't be empty";
        }
        return error
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const errors = validator();
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:3000/admin/adminlogin', admindata, {
                    withCredentials: true
                });
                console.log(response);
                navigate('/admindashboard');
                setadmindata({
                    email: '',
                    password: '',
                })
            } catch (error) {
                console.error('Error during the login request:', error);
            }
        } else {
            console.log(errors);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <div className="flex justify-center mb-6">
                    <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
                    </svg>
                </div>
                <h2 className="text-2xl text-center text-white mb-8">ADMIN PANEL</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                            type="Email"
                            id="Email"
                            name='email'
                            placeholder="Enter your Email"
                            value={admindata.email}
                            onChange={HandleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2" htmlFor="password">
                            PASSWORD
                        </label>
                        <input
                            className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                            type="text"
                            id="password"
                            name='password'
                            placeholder="Enter your password"
                            value={admindata.password}
                            onChange={HandleChange}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            type="submit"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;
