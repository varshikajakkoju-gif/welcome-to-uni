import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, GraduationCap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Facilities", path: "/facilities" },
    { name: "Dining", path: "/dining" },
    { name: "Library", path: "/library" },
    { name: "Services", path: "/services" },
    { name: "Schedules", path: "/schedules" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Campus AI</h1>
              <p className="text-xs text-muted-foreground -mt-1">Your Smart Campus Guide</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Chat Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="hero" size="sm" className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Ask AI</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full flex items-center justify-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask AI</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;