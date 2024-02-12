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
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={() => removeFromCart(item.id)}
            />
          ))
        ) : (
          <h2>Empty cart</h2>
        )}
      </ul>
    </div>
  );
};
