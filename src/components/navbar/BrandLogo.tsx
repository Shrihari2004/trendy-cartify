
import { Link } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";

export function BrandLogo() {
  return (
    <div className="mr-4 flex">
      <Link to="/" className="flex items-center space-x-2">
        <ShoppingBasket className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">TrendyCart</span>
      </Link>
    </div>
  );
}
