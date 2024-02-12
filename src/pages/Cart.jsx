import { useEffect } from 'react';
import { CartItem } from '../components/CartItem';

/* eslint-disable react/prop-types */
export const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className='cart-container'>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={() => removeFromCart(item.id)}
            />
          ))}
        </ul>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </div>
  );
};
