import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = 'https://fakestoreapi.com/products';

export const useProducts = (filter) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('server error');
        }
        return res.json();
      })
      .then((data) => {
        const appliedFilterData = filter
          ? data.filter((item) => item.category.toLowerCase() === filter)
          : data;

        // remove electronics
        const filteredData = appliedFilterData.filter(
          (item) => item.category.toLowerCase() != 'electronics'
        );
        setProducts(filteredData);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [filter]);

  return { products, error, loading };
};
