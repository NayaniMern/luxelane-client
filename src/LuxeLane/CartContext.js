import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Cart context
const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  // Load cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart (check by name & size)
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const index = prevCart.findIndex(
        (i) => i.name === item.name && i.size === item.size
      );

      if (index !== -1) {
        // Item exists, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[index].quantity += item.quantity || 1;
        return updatedCart;
      } else {
        // New item
        return [...prevCart, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  // Increase quantity by name & size
  const increaseQuantity = (name, size) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.name === name && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity by name & size
  const decreaseQuantity = (name, size) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item by name & size
  const removeFromCart = (name, size) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => !(item.name === name && item.size === size))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => useContext(CartContext);
