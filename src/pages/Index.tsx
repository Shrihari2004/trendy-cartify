
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromoSection } from "@/components/PromoSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <PromoSection />
      </main>
      <Footer />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.035] z-[-1]" aria-hidden="true"></div>
      
      {/* Animated gradient orbs */}
      <div className="fixed top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-float z-[-1]" aria-hidden="true"></div>
      <div className="fixed bottom-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-40 animate-float animation-delay-2000 z-[-1]" aria-hidden="true"></div>
      <div className="fixed top-2/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float animation-delay-4000 z-[-1]" aria-hidden="true"></div>
    </div>
  );
};

export default Index;
