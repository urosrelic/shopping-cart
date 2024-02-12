import { CartItem } from '../components/CartItem';

/* eslint-disable react/prop-types */
export const Cart = ({ cart }) => {
  return (
    <div className='cart-container'>
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <h2>Empty cart</h2>
        )}
      </ul>
    </div>
  );
};
