
import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1590658268037-7e63493b24a1?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Active noise cancellation",
      "30-hour battery life",
      "Water resistant",
      "Touch controls",
      "Voice assistant compatible"
    ]
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "5 ATM water resistance",
      "GPS tracking",
      "7-day battery life"
    ]
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
    features: [
      "360° sound",
      "12-hour battery life",
      "IPX7 waterproof",
      "Bluetooth 5.0",
      "Built-in microphone"
    ]
  },
  {
    id: 4,
    name: "Minimalist Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Water-resistant material",
      "15-inch laptop compartment",
      "Hidden anti-theft pocket",
      "USB charging port",
      "Ergonomic design"
    ]
  },
  {
    id: 5,
    name: "Smart Water Bottle",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Temperature display",
      "Hydration tracking",
      "LED reminder",
      "BPA-free materials",
      "24-hour temperature retention"
    ]
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Fast charging capability",
      "Multiple device support",
      "Anti-slip surface",
      "LED indicator",
      "Slim and portable design"
    ]
  }
];

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
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
