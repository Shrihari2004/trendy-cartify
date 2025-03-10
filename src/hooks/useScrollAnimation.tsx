
import { useEffect, useRef, useState } from "react";

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animation?: string;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  animation = "animate-fadeIn"
}: AnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold]);

  return { ref, isVisible, className: isVisible ? animation : "opacity-0" };
}
