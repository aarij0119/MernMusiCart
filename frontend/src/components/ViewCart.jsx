import React, { useContext, useEffect } from 'react'
import Header from './Header'
import { CartContext } from '../context/Viewproduct'

const ViewCart = () => {

    const { Cart } = useContext(CartContext);
    
    return (
        <>

            <div className='p-3'>
                <Header/>
                <div className='flex flex-wrap gap-4 border-t-1 mt-4 pt-4'>
                    {
                        Cart.map((items,idx)=>{
                            return <div key={idx} className='w-[47%] flex gap-6 shadow-lg rounded p-6'>
                            <div className='w-[20rem] h-[20rem] border-3 flex items-center justify-center  rounded border-[#2E0052]'>
                                <img src={items.image} className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold'>{items.name}</h1>
                                <h2 className='text-lg font-semibold'>Price - ₹{items.price}</h2>
                                <h2 className='text-lg font-semibold'>Colour : {items.color}</h2>
                                <h3 className='text-md font-semibold'>{items.headphoneType}</h3>
                                <button type='button' className='bg-[#FFB800] mt-4 p-2 text-lg rounded-full'>Buy Now</button>
                            </div>
                        </div>
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default ViewCart