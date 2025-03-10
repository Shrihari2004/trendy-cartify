
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/context/CartContext";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const animation = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "50px",
    animation: index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight",
  });

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to wishlist`);
  };

  const handleQuickView = () => {
    toast.info(`Quick view: ${product.name}`);
  };

  return (
    <div
      ref={animation.ref}
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg",
        animation.className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full glass-card hover:bg-white/20"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4" />
              <span className="sr-only">Quick view</span>
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full glass-card hover:bg-white/20"
              onClick={handleAddToWishlist}
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full glass-card hover:bg-white/20"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>

        {product.id.includes("new") && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {product.id.includes("sale") && (
          <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      
      <div className="p-4 bg-card/40 backdrop-blur-sm">
        <h3 className="text-sm font-medium truncate group-hover:text-primary transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        <div className="mt-2 font-medium">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
}
