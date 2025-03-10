
import { useState } from "react";
import { Heart, ShoppingBag, X } from "lucide-react";
import { Product, useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  const sizes = ["38", "40", "42", "44", "46"];
  const colors = [
    { name: "Blue Striped", image: product.image },
    { name: "Black Check", image: product.image },
    { name: "White Striped", image: product.image },
    { name: "Beige", image: product.image },
    { name: "Grey Striped", image: product.image },
    { name: "Light Blue", image: product.image },
    { name: "Green Striped", image: product.image },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    addItem({...product, size: selectedSize});
    toast.success(`${product.name} added to cart`);
    onClose();
  };

  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to wishlist`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                {product.category === "Shirts" 
                  ? "Slim Fit Striped Short Sleeves Cotton Casual Shirt" 
                  : product.name}
              </h3>
              <p className="text-muted-foreground mt-1">{product.category}</p>
              
              <div className="flex items-center mt-2">
                <Badge variant="outline" className="font-semibold">4.2 ★</Badge>
                <span className="ml-2 text-sm text-muted-foreground">3.2k Ratings</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">₹{product.price.toFixed(0)}</span>
                <span className="text-muted-foreground line-through">₹{(product.price * 2.85).toFixed(0)}</span>
                <span className="text-green-600 font-semibold">(65% OFF)</span>
              </div>
              <p className="text-sm text-green-600 mt-1">Inclusive of all taxes</p>
            </div>
            
            <div className="border-t border-border pt-4">
              <h4 className="font-semibold mb-3">SELECT COLOR</h4>
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <div 
                    key={index} 
                    className="w-10 h-10 rounded-full overflow-hidden border border-input hover:border-primary cursor-pointer"
                  >
                    <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-border pt-4">
              <h4 className="font-semibold mb-3">SELECT SIZE</h4>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`h-10 w-10 rounded-full flex items-center justify-center border ${
                      selectedSize === size 
                        ? "border-primary bg-primary/10" 
                        : "border-input hover:border-primary"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 border-t border-border pt-4">
              <Button className="flex-1" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-4 w-4" />
                ADD TO BAG
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleAddToWishlist}>
                <Heart className="mr-2 h-4 w-4" />
                WISHLIST
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
