import React, { useState } from "react";
import products from "./data/products.json";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
  const [query, setQuery] = useState("");

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <Header
        setQuery={setQuery}
        isGrid={isGrid}
        setIsGrid={setIsGrid}
        cartCount={cartItems.length}
      />
      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
        isGrid={isGrid}
      />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
      <Checkout items={cartItems} />
    </div>
  );
}

export default App;
