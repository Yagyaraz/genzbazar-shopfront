
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingBag, Plus, Minus, X } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface CartPopoverProps {
  className?: string;
}

const CartPopover: React.FC<CartPopoverProps> = ({ className }) => {
  const [cartDialogOpen, setCartDialogOpen] = useState(false);
  const { 
    cartItems, 
    getCartCount, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    getCartTotal 
  } = useCart();
  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  return (
    <>
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
                      <TableCell className="text-center">Qty</TableCell>
                      <TableCell className="text-right">Price</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <X size={14} />
                            </button>
                            {item.name}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button 
                              onClick={() => decreaseQuantity(item.id)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus size={12} />
                            </button>
                            <span>{item.quantity}</span>
                            <button 
                              onClick={() => increaseQuantity(item.id)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          NRP:{(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="p-4 border-t border-gray-100">
                <div className="flex justify-between font-medium mb-4">
                  <span>Total:</span>
                  <span>NRP:{cartTotal.toFixed(2)}</span>
                </div>
                <Button 
                  className="w-full" 
                  variant="default" 
                  onClick={() => setCartDialogOpen(true)}
                >
                  View Cart
                </Button>
              </div>
            </>
          )}
        </PopoverContent>
      </Popover>

      <Dialog open={cartDialogOpen} onOpenChange={setCartDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Shopping Cart</DialogTitle>
          </DialogHeader>
          
          {cartItems.length === 0 ? (
            <div className="py-6 text-center text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              <div className="max-h-[50vh] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell className="text-center">Quantity</TableCell>
                      <TableCell className="text-right">Subtotal</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <X size={16} />
                            </button>
                            <div>
                              <p>{item.name}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>NRP:{item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button 
                              onClick={() => decreaseQuantity(item.id)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => increaseQuantity(item.id)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          NRP:{(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>NRP:{cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter className="gap-2 sm:gap-0">
            <Button 
              variant="outline"
              onClick={() => setCartDialogOpen(false)}
            >
              Continue Shopping
            </Button>
            <Button 
              disabled={cartItems.length === 0}
            >
              Checkout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CartPopover;
