/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ProductItem } from '../components/ProductItem';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';
export const Products = ({ cart, setCart }) => {
  const [filter, setFilter] = useState(null);

  const { categories, categoriesError, categoriesLoading } = useCategories();
  const { products, productsError, productsLoading } = useProducts(filter);

  const addToCart = (product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (!existingCartItem) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className='products-page'>
      <div className='filter-container'>
        {categoriesLoading && <p>Loading categories...</p>}
        {categoriesError && <p>Error: {categoriesError.message}</p>}
        Choose category:
        <select
          onChange={(e) =>
            setFilter(e.target.value === 'All' ? null : e.target.value)
          }
        >
          <option value='All'>All</option>
          {categories &&
            categories.length > 0 &&
            categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>
      <div className='products-container'>
        {productsLoading && <h1>Loading products...</h1>}
        {productsError && <p>Error: {productsError.message}</p>}
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              productData={product}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
      </div>
    </div>
  );
};
