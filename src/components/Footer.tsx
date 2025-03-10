
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function Footer() {
  const animation = useScrollAnimation({
    threshold: 0.1,
    animation: "animate-fadeIn",
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to our newsletter!");
  };

  return (
    <footer
      ref={animation.ref}
      className={cn(
        "border-t bg-card/30 backdrop-blur-md",
        animation.className
      )}
    >
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBasket className="h-6 w-6" />
              <span className="font-bold text-xl">TrendyCart</span>
            </Link>
            <p className="text-muted-foreground">
              Your one-stop destination for all your fashion and lifestyle needs. Shop the latest trends and discover the best deals.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10"
                onClick={() => window.open("https://facebook.com", "_blank")}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10"
                onClick={() => window.open("https://instagram.com", "_blank")}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-primary/10"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="space-y-2">
              {["Women", "Men", "Kids", "Beauty", "Home & Living"].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-primary/40 group-hover:text-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Help & Support</h3>
            <ul className="space-y-2">
              {["Contact Us", "FAQs", "Shipping & Returns", "Track Order", "Size Guide"].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-foreground flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 text-primary/40 group-hover:text-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="max-w-[220px] bg-background/50"
                required
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Payment Methods</h4>
              <div className="flex space-x-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
                  alt="Visa"
                  className="h-8 w-12 object-contain"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
                  alt="MasterCard"
                  className="h-8 w-12 object-contain"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                  alt="PayPal"
                  className="h-8 w-12 object-contain"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968144.png"
                  alt="Apple Pay"
                  className="h-8 w-12 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TrendyCart. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="#privacy-policy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="#terms-of-service"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              to="#sitemap"
              className="text-muted-foreground hover:text-foreground"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
