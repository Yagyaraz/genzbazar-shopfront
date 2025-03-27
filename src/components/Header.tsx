
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import CartPopover from "./CartPopover";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="">
            <img src="/logo-bg-removed-cropped.png"  className="h-16 " />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#products"
            className="text-sm font-medium text-light-blue-800 hover:text-light-blue-600 transition-colors"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-light-blue-800 hover:text-light-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-light-blue-800 hover:text-light-blue-600 transition-colors"
          >
            Contact
          </a>
          <CartPopover />
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-light-blue-800" />
          ) : (
            <Menu className="h-6 w-6 text-light-blue-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <a
            href="#products"
            className="text-lg font-medium py-2 text-light-blue-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#about"
            className="text-lg font-medium py-2 text-light-blue-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg font-medium py-2 text-light-blue-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <CartPopover className="w-full justify-center" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
