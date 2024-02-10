import { useState } from 'react';

/* eslint-disable react/prop-types */
export const CartItem = ({ item }) => {
  const minVal = 1;
  const maxVal = 5;

  const [quantity, setQuantity] = useState(item.quantity);

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
          <p>Name:</p>
          <span>{item.title}</span>
        </div>
        <div className='cart-item-quantity'>
          <p>Quantity</p>
          <div className='quantity-input'>
            <button onClick={handleDecrement}>-</button>
            {quantity}
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className='cart-item-price'>
          <p>Total</p> ${item.price}
        </div>
        <div className='remove-from-cart-button'>Remove</div>
      </div>
    </li>
  );
};
