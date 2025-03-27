
import { useState, useCallback } from 'react';
import { productsData } from '@/data/products';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
}

export function useSearchProducts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const searchProducts = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const filteredProducts = productsData.filter(product => 
      product.name.toLowerCase().includes(lowercasedQuery) ||
      product.features.some(feature => 
        feature.toLowerCase().includes(lowercasedQuery)
      )
    );

    setSearchResults(filteredProducts);
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    searchProducts
  };
}
