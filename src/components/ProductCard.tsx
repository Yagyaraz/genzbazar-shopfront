
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ShoppingCart, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

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
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    // Add item to cart
    addToCart({ id, name, price, image });
    
    // Show success state
    setAddedToCart(true);
    
    // Show toast notification
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
      duration: 2000,
    });
    
    // Reset the added state after showing confirmation
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group animate-scale-in transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden aspect-square max-h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold mb-1 line-clamp-1">{name}</h3>
        <p className="text-lg font-bold mb-2">NRP:{price.toFixed(2)}</p>
        
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="w-full flex items-center justify-between text-xs font-medium text-gray-700 mb-2 py-1 border-b border-gray-100 transition-colors hover:text-black"
        >
          <span>Features</span>
          {showFeatures ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        
        <div
          className={cn(
            "product-feature space-y-1 text-xs text-gray-600 mb-3",
            showFeatures && "active"
          )}
        >
          <ul className="list-disc pl-4">
            {features.map((feature, index) => (
              <li key={index} className="line-clamp-1">{feature}</li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={addedToCart}
          className={cn(
            "w-full py-2 rounded-md font-medium text-xs flex items-center justify-center gap-1 transition-all",
            addedToCart
              ? "bg-green-500 text-white"
              : "bg-black text-white hover:bg-black/90"
          )}
        >
          {addedToCart ? (
            <>
              <Check size={14} />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
