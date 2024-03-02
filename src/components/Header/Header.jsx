import React, { useEffect, useState } from "react";

export default function Header() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setCartItems(cart);
    setFavoriteItems(favorites);
  }, []);

  return (
    <div className="header">
      <div className="header-item">
        <img src="/public/shopping-cart_icon-icons.com_72552.svg" alt=""  /> 
        {cartItems.length}
      </div>
      <div className="header-item">
        <img src="/public/iconmonstr-favorite-13.svg" alt=""  />
        {favoriteItems.length}
      </div>
    </div>
  );
}