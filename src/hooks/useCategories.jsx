import { useState } from 'react';
import { useEffect } from 'react';
const API_URL = 'https://fakestoreapi.com/products/categories';

export const useCategories = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('server error');
        }
        return res.json();
      })
      .then((data) => {
        const noElectronicsData = data.filter(
          (item) => item.toLowerCase() != 'electronics'
        );
        setCategories(noElectronicsData);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { categories, error, loading };
};
