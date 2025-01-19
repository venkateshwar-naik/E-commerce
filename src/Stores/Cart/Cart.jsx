import React, { createContext, useContext, useState, useEffect } from "react";

const Cartcontxt = createContext();

export const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <Cartcontxt.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Cartcontxt.Provider>
  );
};

export const useCart = () => {
  return useContext(Cartcontxt);
};
