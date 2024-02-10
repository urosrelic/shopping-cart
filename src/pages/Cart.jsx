import { CartItem } from '../components/CartItem';

/* eslint-disable react/prop-types */
export const Cart = ({ cart }) => {
  return (
    <div className='cart-container'>
      <div className='shopping-list'>
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className='checkout'></div>
    </div>
  );
};
