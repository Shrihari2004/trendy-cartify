
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

export function CartSheet() {
  const { state } = useCart();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground relative"
        >
          <ShoppingBag className="h-5 w-5" />
          {state.totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[1.25rem] h-5 flex items-center justify-center">
              {state.totalItems}
            </Badge>
          )}
          <span className="sr-only">Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col h-full">
          <SheetHeader>
            <SheetTitle>Shopping Cart ({state.totalItems})</SheetTitle>
          </SheetHeader>
          
          <div className="flex-1 overflow-auto py-6">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-12 w-12 mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium">Your cart is empty</h3>
                <p className="text-muted-foreground mt-1">
                  Add items to your cart to see them here.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {state.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-medium">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>Total</span>
              <span className="font-medium">${state.totalPrice.toFixed(2)}</span>
            </div>
            <SheetClose asChild>
              <Button className="w-full" disabled={state.items.length === 0}>
                Checkout
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
