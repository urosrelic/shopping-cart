/* eslint-disable react/prop-types */
export const CartItem = ({ item }) => {
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
          {item.quantity}
        </div>
        <div className='cart-item-price'>
          <p>Total</p> ${item.price}
        </div>
        <div className='remove-from-cart-button'>Remove</div>
      </div>
    </li>
  );
};
