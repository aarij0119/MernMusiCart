import React, { createContext, useState } from 'react';

const CartContext = createContext();

const ViewProduct = ({ children }) => {
  
  const [Cart, setCart] = useState([]);
  console.log(Cart)
  return (
    <CartContext.Provider value={{ Cart, setCart, }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default ViewProduct;
