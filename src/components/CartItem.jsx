export const CartItem = ({ item }) => {
  return (
    <li key={item.id}>
      <div className='cart-item'>
        <div className='cart-item-image'>
          <img src={item.image} />
        </div>
        <div className='cart-item-info'>
          <div className='cart-item-title'>{item.title}</div>
          <div className='cart-item-quantity'>Quantity: {item.quantity}</div>
        </div>
      </div>
    </li>
  );
};
