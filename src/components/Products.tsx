
import React from "react";
import ProductCard from "./ProductCard";
import { productsData } from "@/data/products";

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our curated collection of premium products designed for the modern generation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div id={`product-${product.id}`} key={product.id} className="transition-all duration-300">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                features={product.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
