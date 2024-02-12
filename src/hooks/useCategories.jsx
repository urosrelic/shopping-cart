import { useState } from 'react';
import { useEffect } from 'react';
const API_URL = 'https://fakestoreapi.com/products/categories';

export const useCategories = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

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
      .finally(() => setCategoriesLoading(false));
  }, []);

  return { categories, error, categoriesLoading };
};
