import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import Logo from '/images/Logo.png'
import { CartContext } from '../context/Viewproduct';

const Header = () => {
    //Context
    const {Cart} = useContext(CartContext);
    
    const [visible,setvisible] = useState(false);
    const visibleHandler = () => {
        setvisible((prev) => !prev)
    }
    
    return (
        <div>
            <header className='flex justify-between items-center'>
                <div className='flex items-center gap-2.5'>
                    <img className='w-[3rem]' src={Logo}/>
                    <h1 className='text-[1.8rem] text-[#2E0052] font-bold'>Musicart</h1>
                    <Link className='text-[1.2rem] mt-1.5' to='/home'>Home</Link>
                    <Link className='text-[1.2rem] mt-1.5' to=''>Invoice</Link>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link to={'/viewCart'}>
                        <div className='flex items-center bg-[#1D7000] text-white p-2 px-4 rounded-4xl gap-1'>
                        <IoCartOutline />  View Cart {Cart.length}
                        </div>
                    </Link>
                    <div className='relative'>
                    <div className='border-[#2E0052] p-2 rounded-full border-2 hover:cursor-pointer' onClick={visibleHandler}>
                        <h3 className='font-bold'>MA</h3>
                    </div>
                    {
                        visible ? <div className='absolute mt-2 right-1 bg-[#c0c0c7] shadow-lg p-3 rounded-2xl'>
                        <h1 className='whitespace-nowrap mb-1'>Mohammad Aarij</h1>
                        <h2 className='border-t-1 text-center'>Logout</h2>
                    </div> :null
                    }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header