/* eslint-disable react/prop-types */
export const ProductItem = ({ productData, addToCart }) => {
  return (
    <div className='product-container'>
      <span id='product-title'>{productData.title}</span>
      <div className='product-image'>
        <img src={productData.image} />
      </div>
      <div id='add-to-cart-btn' onClick={() => addToCart(productData)}>
        Add to cart
      </div>
    </div>
  );
};
