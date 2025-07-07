import React from "react";

const Header = ({ setQuery, isGrid, setIsGrid, cartCount }) => (
  <header>
    <h1>My E-Commerce Store</h1>
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setQuery(e.target.value)}
    />
    <button onClick={() => setIsGrid(!isGrid)}>
      {isGrid ? "Switch to List" : "Switch to Grid"}
    </button>
    <span>🛒 {cartCount}</span>
  </header>
);

export default Header;
