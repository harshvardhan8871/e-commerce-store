import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart, isGrid }) => (
  <div className="product-list-container">
    {products.length > 0 && (
      <div className="search-results">
        <h3>Found {products.length} product{products.length !== 1 ? 's' : ''}</h3>
      </div>
    )}
    <div className={isGrid ? "grid-view" : "list-view"}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          isGrid={isGrid}
        />
      ))}
    </div>
    {products.length === 0 && (
      <div className="empty-cart">
        <h3>🔍 No products found</h3>
        <p>Try adjusting your search terms</p>
      </div>
    )}
  </div>
);

export default ProductList;
