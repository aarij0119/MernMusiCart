import React, { useContext, useEffect } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { CartContext } from '../context/Viewproduct';
import { userContext } from '../context/UserProvider';

const Cart = ({ items, forGrid, twoGrid }) => {
    const { userId, cartData, setCartData } = useContext(userContext);
    console.log(userId);

    const { setCart } = useContext(CartContext);

    const addtoCart = (item) => {
        const updatedCart = [...cartData, item];

        // Save the updated cart data to localStorage
        localStorage.setItem(`cartData_${userId}`, JSON.stringify(updatedCart));

        setCartData(updatedCart);
        setCart(updatedCart);
    };

    const imageUrl = `data:image/jpeg;base64,${items.image}`;
    return (
        <section className="cart">
            <div className={`bg-blue-300 p-2.5 flex ${forGrid ? 'flex-col' : twoGrid ? 'flex-row gap-3' : ''}`}>
                <div className="w-[250px] h-[13rem] bg-red-600 relative mb-1.5">
                    <img src={imageUrl} alt={items.Itemname} className="w-full h-full object-cover bg-white" />
                    <MdOutlineAddShoppingCart onClick={() => addtoCart(items)} size={32} className="absolute -right-2 -bottom-2 bg-[#e6e6f3] p-1.5 rounded-full shadow-lg text-[#1D7000]"/>
                </div>
                <div>
                    <h2 className={`${forGrid ? 'text-base' : twoGrid ? 'text-[1.8rem] mb-1' : ''}`}>{items.Itemname}</h2>
                    <h2 className={`${forGrid ? 'text-base' : twoGrid ? 'text-[1.2rem] mb-2' : ''}`}>Price - ₹{items.ItemsPrice}</h2>
                    <h4 className={`${forGrid ? 'text-base' : twoGrid ? 'text-[1.2rem]' : ''}`}>{items.color} | {items.ItemDescription}</h4>
                </div>
            </div>
        </section>
    );
};

export default Cart;
