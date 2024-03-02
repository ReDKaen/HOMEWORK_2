import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import "./ProductRenderStyle.scss";

export default function ProductComponent({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("/public/product.json");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1 className="product-title">Список товарів</h1>
        <div className="products-wrapper">
          {products.map((product) => (
            <ProductCard
              key={product.articule}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}