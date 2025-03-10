
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  isExpanded: boolean;
  onToggle: (expanded: boolean) => void;
}

export function SearchInput({ isExpanded, onToggle }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      onToggle(false);
    }
  };

  return (
    <div className={`flex items-center ${isExpanded ? "flex-1" : "w-auto"}`}>
      {isExpanded ? (
        <form onSubmit={handleSearch} className="flex w-full items-center">
          <Input
            type="search"
            placeholder="Search for products, brands and more..."
            className="h-9 md:w-[200px] lg:w-[300px] bg-muted/50"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="ml-1"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => {
              setSearchQuery("");
              onToggle(false);
            }}
            className="ml-1"
          >
            <X className="h-5 w-5" />
          </Button>
        </form>
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
