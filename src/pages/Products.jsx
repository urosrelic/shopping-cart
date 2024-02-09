import { useEffect, useState } from 'react';
import { ProductItem } from '../components/ProductItem';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';
export const Products = () => {
  const [filter, setFilter] = useState(null);

  const { categories, categoriesError, categoriesLoading } = useCategories();
  const { products, productsError, productsLoading } = useProducts(filter);

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
            <ProductItem key={product.id} productData={product} />
          ))}
        {productsLoading && <p>Loading products...</p>}
        {productsError && <p>Error: {productsError.message}</p>}
      </div>
    </div>
  );
};
