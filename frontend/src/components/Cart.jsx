import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { CartContext } from '../context/Viewproduct';

const Cart = ({ items, forGrid, twoGrid }) => {
  
  const {setCart, } = useContext(CartContext);
  
  const addtoCart = (item) => {
    setCart((prev) => {
      const updatedCart = [...prev, item];
      return updatedCart;
    });
  };

  return (
    <section className="cart">
      <div className={`bg-blue-300 p-2.5 flex ${forGrid ? 'flex-col' : twoGrid ? 'flex-row gap-3' : ''}`}>
        <div className="w-[250px] h-[13rem] bg-red-600 relative mb-1.5">
          <img src={items.image} alt={items.name} className="w-full h-full object-cover bg-white" />
          <MdOutlineAddShoppingCart onClick={() => addtoCart(items)} size={32} className="absolute -right-2 -bottom-2 bg-[#e6e6f3] p-1.5 rounded-full shadow-lg text-[#1D7000]" />
        </div>
        <div>
          <h2 className={`${forGrid ? 'text-base' : twoGrid ? 'text-[1.8rem] mb-1' : ''}`}>{items.name}</h2>
          <h2 className={`${forGrid ? 'text-base' : twoGrid ? 'text-[1.2rem] mb-2' : ''}`}>Price - ₹{items.price}</h2>
          <h4 className={`${forGrid ? 'text-base' : twoGrid ? 'text-[1.2rem]' : ''}`}>{items.color} | {items.headphoneType}</h4>
        </div>
      </div>
    </section>
  );
};

export default Cart;
