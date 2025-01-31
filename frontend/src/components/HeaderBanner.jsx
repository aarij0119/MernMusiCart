import React from 'react'
import Header from '/images/Headerimage.png';
import { IoIosSearch } from "react-icons/io";

const HeaderBanner = () => {
    return (
        <div>
            <div class="flex items-center justify-between bg-gradient-to-r from-[#7286b4] to-[#e794ce] pl-12 rounded-lg mt-8">
                <div class="text-left">
                    <h1 class="text-5xl font-bold text-purple-900 mb-2">Grab upto 50% off on</h1>
                    <h2 class="text-5xl font-bold text-purple-900">Selected headphones</h2>
                </div>
                <div class="w-1/3">
                    <img src={Header} alt="Person wearing headphones" class="rounded-lg"/>
                </div>
            </div>
            <div className='mt-3 border  rounded-3xl flex  items-center pl-2'>
                <span><IoIosSearch size={24} /></span>
                <input type='text' placeholder='Search Product' className='w-full p-2 outline-none rounded-r-full' />
            </div>
        </div>
    )
}

export default HeaderBanner