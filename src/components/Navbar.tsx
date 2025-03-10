
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthModal } from "@/components/AuthModal";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  User,
  Search,
  Heart,
  X,
  Menu,
  ShoppingBasket,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { state } = useCart();

  const navItems = [
    { name: "WOMEN", href: "#women" },
    { name: "MEN", href: "#men" },
    { name: "KIDS", href: "#kids" },
    { name: "HOME & LIVING", href: "#home" },
    { name: "BEAUTY", href: "#beauty" }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 backdrop-blur-lg bg-background/70 transition-all duration-300">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBasket className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">TrendyCart</span>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <SheetClose asChild>
                        <Link 
                          to={item.href} 
                          className="block py-2 text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex items-center space-x-6 mx-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className={`ml-auto flex items-center space-x-4 transition-all duration-300 ${isSearchExpanded ? "flex-1" : ""}`}>
            <div className={`flex items-center ${isSearchExpanded ? "flex-1" : "w-auto"}`}>
              {isSearchExpanded ? (
                <div className="flex w-full items-center">
                  <Input
                    type="search"
                    placeholder="Search for products, brands and more..."
                    className="h-9 md:w-[200px] lg:w-[300px] bg-muted/50"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchExpanded(false)}
                    className="ml-2"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchExpanded(true)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
            
            <ThemeToggle className="hidden md:flex" />
            
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsAuthModalOpen(true)}
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground relative"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            
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
          </div>
        </div>
      </header>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
