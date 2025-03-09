
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ShoppingCart, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  image,
  features,
}) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    
    // Reset the added state after showing confirmation
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group animate-scale-in transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-2xl font-bold mb-4">${price.toFixed(2)}</p>
        
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="w-full flex items-center justify-between text-sm font-medium text-gray-700 mb-4 py-2 border-b border-gray-100 transition-colors hover:text-black"
        >
          <span>Features</span>
          {showFeatures ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        <div
          className={cn(
            "product-feature space-y-2 text-sm text-gray-600 mb-6",
            showFeatures && "active"
          )}
        >
          <ul className="list-disc pl-5">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={addedToCart}
          className={cn(
            "w-full py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all",
            addedToCart
              ? "bg-green-500 text-white"
              : "bg-black text-white hover:bg-black/90"
          )}
        >
          {addedToCart ? (
            <>
              <Check size={16} />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart size={16} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
