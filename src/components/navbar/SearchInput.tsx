
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  isExpanded: boolean;
  onToggle: (expanded: boolean) => void;
}

export function SearchInput({ isExpanded, onToggle }: SearchInputProps) {
  return (
    <div className={`flex items-center ${isExpanded ? "flex-1" : "w-auto"}`}>
      {isExpanded ? (
        <div className="flex w-full items-center">
          <Input
            type="search"
            placeholder="Search for products, brands and more..."
            className="h-9 md:w-[200px] lg:w-[300px] bg-muted/50"
            autoFocus
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggle(false)}
            className="ml-2"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggle(true)}
          className="text-muted-foreground hover:text-foreground"
        >
          <Search className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
