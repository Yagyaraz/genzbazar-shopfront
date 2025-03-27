
import React, { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import CartPopover from "./CartPopover";
import { 
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useSearchProducts } from "@/hooks/useSearchProducts";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const { searchProducts, searchResults, searchQuery, setSearchQuery } = useSearchProducts();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      // Reset search when opening
      setSearchQuery('');
      searchProducts('');
    }
  };

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
          <button 
            onClick={handleSearchToggle}
            className="text-sm font-medium text-light-blue-800 hover:text-light-blue-600 transition-colors flex items-center gap-1"
          >
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
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

        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={handleSearchToggle}
            className="text-light-blue-800"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-light-blue-800" />
            ) : (
              <Menu className="h-6 w-6 text-light-blue-800" />
            )}
          </button>
        </div>
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

      {/* Search Dialog */}
      <CommandDialog 
        open={searchOpen} 
        onOpenChange={setSearchOpen}
        className="top-[15%] translate-y-0"
      >
        <CommandInput 
          placeholder="Search products (e.g. earbuds, wireless, watch)..." 
          value={searchQuery}
          onValueChange={(value) => {
            setSearchQuery(value);
            searchProducts(value);
          }}
          className="border-none focus:ring-0 text-base py-6"
        />
        <CommandList className="max-h-[60vh]">
          <CommandEmpty>No results found. Try a different search term.</CommandEmpty>
          {searchResults.length > 0 && (
            <CommandGroup heading="Products">
              {searchResults.map((product) => (
                <CommandItem
                  key={product.id}
                  className="py-3 px-4 cursor-pointer"
                  onSelect={() => {
                    setSearchOpen(false);
                    const element = document.getElementById(`product-${product.id}`);
                    if (element) {
                      const productsSection = document.getElementById('products');
                      if (productsSection) {
                        window.scrollTo({
                          top: productsSection.offsetTop - 80,
                          behavior: 'smooth'
                        });
                        
                        // Highlight the product
                        element.classList.add('ring-4', 'ring-light-blue-400', 'ring-opacity-50');
                        setTimeout(() => {
                          element.classList.remove('ring-4', 'ring-light-blue-400', 'ring-opacity-50');
                        }, 2000);
                      }
                    }
                  }}
                >
                  <div className="flex items-center w-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500 truncate">{product.features.join(', ').substring(0, 60)}...</p>
                    </div>
                    <span className="ml-auto font-semibold whitespace-nowrap">
                      NPR {product.price.toFixed(2)}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;
