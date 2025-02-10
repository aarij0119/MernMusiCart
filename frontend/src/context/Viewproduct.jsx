import React, { createContext, useEffect, useState, useContext } from 'react';
import { userContext } from './UserProvider';

const CartContext = createContext();

const ViewProduct = ({ children }) => {
    const { cartData, setCartData } = useContext(userContext);
    const [Cart, setCart] = useState(cartData);

    useEffect(() => {
        setCart(cartData);
    }, [cartData]);

    return (
        <CartContext.Provider value={{ Cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext };
export default ViewProduct;
