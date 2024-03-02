import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { addToFavorites } from "../../Utils/Utils";
import "./ProductCard.scss";

export default function ProductCard({ product, onAddToCart }) {
  const { articule, image, name, color, price } = product;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isProductFavorite = favorites.some((item) => item.articule === articule);
    setIsFavorite(isProductFavorite);
  }, [articule]);

  const handleToggleFavorite = () => {
    addToFavorites(product);
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <h2 className="product-name">{name}</h2>
        <div>
          <p className="product-color">Колір: {color}</p>
          <p className="product-price">Ціна: {price}</p>
        </div>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Button onClick={() => onAddToCart(product)} className="modal-button">
            Додати у кошик
          </Button>
          <span onClick={handleToggleFavorite} style={{ cursor: "pointer" }}>
            {isFavorite ? "★" : "☆"}
          </span>
        </div>
      </div>
    </>
  );
}