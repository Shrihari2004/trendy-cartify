
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Product } from "@/context/CartContext";
import { products as allProducts } from "@/data/products";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Filter products based on the search query
    if (!query) {
      setProducts(allProducts);
      return;
    }
    
    const searchTerms = query.toLowerCase().split(" ");
    
    const filtered = allProducts.filter(product => {
      const name = product.name.toLowerCase();
      const category = product.category.toLowerCase();
      
      // Check if any search term is included in the product name or category
      return searchTerms.some(term => 
        name.includes(term) || category.includes(term)
      );
    });
    
    setProducts(filtered);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Search Results</h1>
        <p className="text-center text-muted-foreground mb-8">
          {products.length} results for "{query}"
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-muted-foreground">No products found matching your search</h2>
            <p className="mt-2 text-muted-foreground">Try different keywords or browse our categories</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
