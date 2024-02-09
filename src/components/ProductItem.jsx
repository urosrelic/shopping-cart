/* eslint-disable react/prop-types */
export const ProductItem = ({ productData }) => {
  return (
    <div className='product-container'>
      <span id='product-title'>{productData.title}</span>
      <div className='product-image'>
        <img src={productData.image} />
      </div>
      <div id='add-to-cart-btn'>Add to cart</div>
    </div>
  );
};
