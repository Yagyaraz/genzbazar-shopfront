
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CartPopoverProps {
  className?: string;
}

const CartPopover: React.FC<CartPopoverProps> = ({ className }) => {
  const { cartItems, getCartCount, removeFromCart } = useCart();
  const cartCount = getCartCount();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "flex items-center gap-1 bg-light-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-light-blue-600 relative",
            className
          )}
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Cart ({cartCount})</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-medium">Your Cart ({cartCount} items)</h3>
        </div>
        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="max-h-60 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell className="text-right">Qty</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="p-4 border-t border-gray-100">
              <Button className="w-full" variant="default">
                View Cart
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CartPopover;
