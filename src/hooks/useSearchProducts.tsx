
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
    const keywords = lowercasedQuery.split(' ').filter(keyword => keyword.length > 0);
    
    const filteredProducts = productsData.filter(product => {
      // Check if product name contains any of the keywords
      const nameMatch = keywords.some(keyword => 
        product.name.toLowerCase().includes(keyword)
      );
      
      // Check if any product feature contains any of the keywords
      const featureMatch = product.features.some(feature => 
        keywords.some(keyword => feature.toLowerCase().includes(keyword))
      );
      
      return nameMatch || featureMatch;
    });

    setSearchResults(filteredProducts);
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    searchProducts
  };
}
