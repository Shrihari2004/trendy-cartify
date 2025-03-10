
import { Button } from "@/components/ui/button";
import { SaleCountdown } from "@/components/SaleCountdown";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Summer Collection",
      subtitle: "Discover the season's hottest styles",
      cta: "Shop Now",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Be the first to wear our latest designs",
      cta: "Explore",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Exclusive Discounts",
      subtitle: "Up to 50% off on selected items",
      cta: "Shop Sale",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop",
    },
  ];

  // Sale end date - 1 day from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 1);

  useEffect(() => {
    setHasLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" aria-hidden="true" />
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
      ))}
      
      <div className="container relative z-10 min-h-[70vh] flex flex-col justify-center items-center text-white text-center px-4">
        <div className={`space-y-6 max-w-3xl transition-all duration-700 ${hasLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gradient">
            {slides[currentIndex].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            {slides[currentIndex].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="glass-dark hover:bg-white/10 border-white/20 text-white rounded-full py-6 px-8"
            >
              {slides[currentIndex].cta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass hover:bg-white/10 border-white/20 text-white rounded-full py-6 px-8"
            >
              Collections
            </Button>
          </div>
        </div>
        
        <div className={`absolute bottom-12 glass-dark rounded-full px-6 py-2 transition-all duration-1000 ${hasLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <SaleCountdown endDate={endDate} />
        </div>
        
        <div className="absolute bottom-6 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
