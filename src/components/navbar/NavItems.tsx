
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
}

interface NavItemsProps {
  items: NavItem[];
}

export function NavItems({ items }: NavItemsProps) {
  return (
    <nav className="hidden md:flex items-center space-x-6 mx-6">
      {items.map((item) => (
        <Link
          key={item.name}
          to={`/category/${item.href.replace('#', '')}`}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
