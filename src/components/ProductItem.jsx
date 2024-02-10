/* eslint-disable react/prop-types */
import { useState } from 'react';
export const ProductItem = ({ productData, addToCart }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(productData);
    setInCart(true);
  };

  return (
    <div className='product-container'>
      <div className='product-info'>
        <span id='product-title'>{productData.title}</span>
        <div className='product-image'>
          <img src={productData.image} />
        </div>
        <div className='product-price'>${productData.price}</div>
      </div>
      {}
      <div id='add-to-cart-btn' onClick={() => handleAddToCart()}>
        {inCart ? 'Already in cart' : 'Add to Cart'}
      </div>
    </div>
  );
};
