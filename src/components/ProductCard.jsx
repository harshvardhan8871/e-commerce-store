import React from "react";

const ProductCard = ({ product, addToCart, isGrid }) => (
  <div className={`product-card ${isGrid ? "grid" : "list"}`}>
    <img src={product.image} alt={product.name} />
    <div className={isGrid ? "" : "product-info"}>
      <h3>{product.name}</h3>
      <p>₹{product.price.toFixed(2)}</p>
      <button 
        onClick={() => addToCart(product)}
        className="add-to-cart-btn"
      >
        🛒 Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
