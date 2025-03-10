
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <SheetClose asChild>
                  <Link 
                    to={item.href} 
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
