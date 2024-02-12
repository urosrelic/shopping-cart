/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export const ProductItem = ({ productData, addToCart, cart }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    // Check if the product is in the cart when the cart or productData changes
    const isItemInCart = cart.some((item) => item.id === productData.id);
    setInCart(isItemInCart);
  }, [cart, productData]);

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
      <div
        id='add-to-cart-btn'
        onClick={() => handleAddToCart()}
        className={inCart ? 'in-cart' : 'not-in-cart'}
      >
        {inCart ? 'Already in cart' : 'Add to Cart'}
      </div>
    </div>
  );
};
