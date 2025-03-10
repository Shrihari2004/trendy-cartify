
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Check, Truck, Shield, Zap } from "lucide-react";

export function PromoSection() {
  const titleAnimation = useScrollAnimation({
    threshold: 0.1,
    animation: "animate-fadeIn",
  });

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payment",
      description: "100% secure payment methods",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Quality Guarantee",
      description: "30-day money-back guarantee",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Delivery within 3-5 business days",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={cn("text-center mb-12", titleAnimation.className)}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Shop With Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We offer the best shopping experience with quality products, fast delivery, and excellent customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const animation = useScrollAnimation({
              threshold: 0.1,
              rootMargin: "100px",
              animation: "animate-fadeIn",
            });
            
            return (
              <div
                key={index}
                ref={animation.ref}
                className={cn(
                  "flex flex-col items-center text-center p-6 glass bg-card/40 rounded-lg transition-all hover:shadow-lg",
                  animation.className
                )}
              >
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 py-8 px-6 md:px-10 bg-primary/5 backdrop-blur-sm rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Download Our App</h3>
              <p className="text-muted-foreground">
                Shop on the go with our mobile app. Get exclusive app-only deals and manage your orders with ease.
              </p>
              <div className="flex flex-wrap gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  alt="App Store"
                  className="h-10 w-32 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  alt="Google Play"
                  className="h-10 w-32 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 animate-float">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2586/2586488.png"
                  alt="Mobile App"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
