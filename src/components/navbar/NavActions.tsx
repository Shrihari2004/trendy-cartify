
import { useState } from "react";
import { User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchInput } from "./SearchInput";
import { CartSheet } from "./CartSheet";

interface NavActionsProps {
  onAuthOpen: () => void;
}

export function NavActions({ onAuthOpen }: NavActionsProps) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <div className={`ml-auto flex items-center space-x-4 transition-all duration-300 ${isSearchExpanded ? "flex-1" : ""}`}>
      <SearchInput 
        isExpanded={isSearchExpanded} 
        onToggle={setIsSearchExpanded} 
      />
      
      <ThemeToggle className="hidden md:flex" />
      
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground"
        onClick={onAuthOpen}
      >
        <User className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground relative"
      >
        <Heart className="h-5 w-5" />
        <span className="sr-only">Wishlist</span>
      </Button>
      
      <CartSheet />
    </div>
  );
}
