import React from "react";

const Cart = ({ items, removeFromCart }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <div className="empty-cart">
          <h3>🛒 Your cart is empty</h3>
          <p>Add some products to get started!</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart ({items.length} items)</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <div className="cart-total">
        Total: ₹{total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
