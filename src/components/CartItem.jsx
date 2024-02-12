import { useState, useEffect } from 'react';

/* eslint-disable react/prop-types */
export const CartItem = ({ item, removeFromCart }) => {
  const minVal = 1;
  const maxVal = 5;

  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    // Update the price whenever the quantity changes
    setPrice(quantity * item.price);
  }, [quantity, item.price]);

  const handleIncrement = () => {
    if (quantity < maxVal) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > minVal) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <li key={item.id}>
      <div className='cart-item'>
        <div className='cart-item-image'>
          <img src={item.image} />
        </div>
        <div className='cart-item-title'>
          <span>{item.title}</span>
        </div>
        <div className='cart-item-quantity'>
          <div className='quantity-input'>
            <button id='decrement-btn' onClick={handleDecrement}>
              &lt;
            </button>
            <span id='product-quantity'>{quantity}</span>
            <button id='increment-btn' onClick={handleIncrement}>
              &gt;
            </button>
          </div>
        </div>
        <div className='cart-item-price'>${price}</div>
        <div className='remove-from-cart-button' onClick={removeFromCart}>
          Remove
        </div>
      </div>
    </li>
  );
};
