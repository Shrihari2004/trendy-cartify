
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

// Sample product data
const products: Product[] = [
  {
    id: "1-new",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop",
    category: "Men's Clothing"
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop",
    category: "Men's Clothing"
  },
  {
    id: "3-sale",
    name: "Casual Summer Dress",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500&auto=format&fit=crop",
    category: "Women's Clothing"
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=500&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: "5-new",
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: "6",
    name: "Smartwatch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: "7-sale",
    name: "Running Shoes",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
    category: "Footwear"
  },
  {
    id: "8",
    name: "Designer Sunglasses",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop",
    category: "Accessories"
  }
];

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
    ? products 
    : products.filter(product => 
        product.category.toLowerCase().includes(activeFilter) ||
        (activeFilter === "men" && product.category.includes("Men")) ||
        (activeFilter === "women" && product.category.includes("Women"))
      );

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
