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

    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className='products-page'>
      <div className='filter-container'>
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
        {categoriesLoading && <p>Loading categories...</p>}
        {categoriesError && <p>Error: {categoriesError.message}</p>}
      </div>
      <div className='products-container'>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              productData={product}
              addToCart={addToCart}
            />
          ))}
        {productsLoading && <p>Loading products...</p>}
        {productsError && <p>Error: {productsError.message}</p>}
      </div>
    </div>
  );
};
