
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";

interface CategoryFilter {
  id: string;
  name: string;
}

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const titleAnimation = useScrollAnimation({
    threshold: 0.1,
    animation: "animate-fadeIn",
  });

  const categories: CategoryFilter[] = [
    { id: "all", name: "All Products" },
    { id: "men", name: "Men" },
    { id: "women", name: "Women" },
    { id: "electronics", name: "Electronics" },
    { id: "accessories", name: "Accessories" }
  ];

  const filteredProducts = activeFilter === "all" 
    ? products.slice(0, 8) // Show only 8 products on the homepage
    : products.filter(product => {
        const category = product.category.toLowerCase();
        
        switch(activeFilter) {
          case "men":
            return category.includes("men");
          case "women":
            return category.includes("women");
          case "electronics":
            return category.includes("electronics");
          case "accessories":
            return category.includes("accessories");
          default:
            return true;
        }
      }).slice(0, 8); // Limit to 8 products

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={cn("space-y-2 text-center mb-8", titleAnimation.className)}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Discover our carefully curated collection of the latest trends and timeless essentials.
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="rounded-full px-4 py-2 h-auto text-sm"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="rounded-full px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
