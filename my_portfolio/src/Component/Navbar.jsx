import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
        ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary uppercase">
          Sylvester <span className="text-purple-500">portfolio</span>
        </a>

        {/* desktop version */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile version: right side group */}
        <div className="md:hidden flex items-center gap-2"> {/* gap-2 gives spacing */}
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-foreground rounded-md hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-md flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};