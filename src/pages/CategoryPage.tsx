
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Product } from "@/context/CartContext";
import { products as allProducts } from "@/data/products";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Filter products based on the category
    const filtered = categoryId 
      ? allProducts.filter(product => {
          const category = product.category.toLowerCase();
          const searchTerm = categoryId.toLowerCase();
          
          switch(searchTerm) {
            case 'women':
              return category.includes('women') || category.includes('dress') || category.includes('skirt');
            case 'men':
              return category.includes('men') || category.includes('shirt') || category.includes('jeans');
            case 'kids':
              return category.includes('kid') || category.includes('child') || category.includes('toy');
            case 'home':
              return category.includes('home') || category.includes('living') || category.includes('furniture');
            case 'beauty':
              return category.includes('beauty') || category.includes('makeup') || category.includes('cosmetic');
            default:
              return true;
          }
        })
      : allProducts;
      
    setProducts(filtered);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [categoryId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {categoryId ? categoryId.toUpperCase() : 'All Products'}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-muted-foreground">No products found in this category</h2>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
