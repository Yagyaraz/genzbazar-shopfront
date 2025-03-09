
import React, { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">GenZBazar</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#products"
            className="text-sm font-medium hover:text-black/70 transition-colors"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-black/70 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-black/70 transition-colors"
          >
            Contact
          </a>
          <button
            className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-black/90"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Cart (0)</span>
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
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
            className="text-lg font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#about"
            className="text-lg font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <button className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg text-base font-medium">
            <ShoppingBag className="h-5 w-5" />
            <span>Cart (0)</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
