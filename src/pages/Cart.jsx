/* eslint-disable react/prop-types */
export const Cart = ({ cart }) => {
  return (
    <div className='cart-container'>
      <div className='shopping-list'>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div className='cart-item'>
                <div className='cart-item-image'>
                  <img src={item.image} />
                </div>
                <div className='cart-item-info'>
                  <div className='cart-item-title'>{item.title}</div>
                  <div className='cart-item-quantity'>
                    Quantity: {item.quantity}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='checkout'></div>
    </div>
  );
};
