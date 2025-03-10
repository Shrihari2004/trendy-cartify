
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <PromoSection />
      </main>
      <Footer />
      <div className="fixed inset-0 pointer-events-none bg-noise" aria-hidden="true"></div>
    </div>
  );
};

export default Index;
