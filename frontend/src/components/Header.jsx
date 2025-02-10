import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import Logo from '/images/Logo.png';
import { CartContext } from '../context/Viewproduct';
import { userContext } from '../context/UserProvider';
import axios from 'axios';

const Header = () => {
    const navigate = useNavigate();
    // Context
    const { Cart } = useContext(CartContext);
    const { UserLogo, Username, clearUserData } = useContext(userContext);

    const [visible, setvisible] = useState(false);
    const visibleHandler = () => {
        setvisible((prev) => !prev);
    };

    const logout = async () => {
        try {
            const response = await axios.get('http://localhost:3000/login/logout', { withCredentials: true });
            console.log(response.data);
            
            // Clear user data from context
            clearUserData();

            // Perform any additional actions after logout, e.g., redirect to login page
            navigate('/login');
        } catch (err) {
            console.error("Logout error: ", err.response?.data?.message || err.message);
        }
    };

    return (
        <div>
            <header className='flex justify-between items-center'>
                <div className='flex items-center gap-2.5'>
                    <img className='w-[3rem]' src={Logo} alt="Logo" />
                    <h1 className='text-[1.8rem] text-[#2E0052] font-bold'>Musicart</h1>
                    <Link className='text-[1.2rem] mt-1.5' to='/home'>Home</Link>
                    <Link className='text-[1.2rem] mt-1.5' to=''>Invoice</Link>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link to={'/viewCart'}>
                        <div className='flex items-center bg-[#1D7000] text-white p-2 px-4 rounded-4xl gap-1'>
                            <IoCartOutline /> View Cart {Cart.length}
                        </div>
                    </Link>
                    <div className='relative'>
                        <div className='border-[#2E0052] rounded-full border-2 hover:cursor-pointer' onClick={visibleHandler}>
                            <h3 className='font-bold uppercase w-[2.5rem] h-[2.5rem] text-lg flex items-center justify-center'>
                                {UserLogo.firstword}{UserLogo.lastname}
                            </h3>
                        </div>
                        {visible && (
                            <div className='absolute mt-2 right-1 bg-[#c0c0c7] w-[10rem] shadow-lg p-3 rounded-2xl flex flex-col'>
                                <h1 className='whitespace-nowrap mb-1 text-center font-bold'>
                                    Name: {Username ? Username : 'Name'}
                                </h1>
                                <button
                                    className='bg-red-500 p-1.5 text-white rounded-md hover:cursor-pointer hover:bg-red-700'
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
