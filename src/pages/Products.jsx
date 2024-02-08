import { useState } from 'react';
import { ProductItem } from '../components/ProductItem';
import { useProducts } from '../hooks/useProducts';
export const Products = () => {
  const [filter, setFilter] = useState(null);
  const { products, error, loading } = useProducts(filter);

  return (
    <div className='products-container'>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductItem key={product.id} productData={product} />
        ))}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
