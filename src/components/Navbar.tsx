
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { BrandLogo } from "@/components/navbar/BrandLogo";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { NavItems } from "@/components/navbar/NavItems";
import { NavActions } from "@/components/navbar/NavActions";

export function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navItems = [
    { name: "WOMEN", href: "#women" },
    { name: "MEN", href: "#men" },
    { name: "KIDS", href: "#kids" },
    { name: "HOME & LIVING", href: "#home" },
    { name: "BEAUTY", href: "#beauty" }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 backdrop-blur-lg bg-background/70 transition-all duration-300">
        <div className="container flex h-16 items-center">
          <BrandLogo />
          <MobileMenu navItems={navItems} />
          <NavItems items={navItems} />
          <NavActions onAuthOpen={() => setIsAuthModalOpen(true)} />
        </div>
      </header>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
