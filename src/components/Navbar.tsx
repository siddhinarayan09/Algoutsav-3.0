import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Tracks", href: "#tracks" },
    { name: "Prizes", href: "#prizes" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* FLICKER ANIMATION */}
      <style>{`
        @keyframes flicker {
          0% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.75; }
          94% { opacity: 1; }
          95% { opacity: 0.6; }
          96% { opacity: 1; }
          97% { opacity: 0.85; }
          100% { opacity: 1; }
        }
        .flicker {
          animation: flicker 4s infinite linear;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/40 backdrop-blur-lg border-b border-red-600/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LEFT — LOGO */}
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center"
            >
              <img
                src="https://res.cloudinary.com/dwh7xuupf/image/upload/v1764781238/aps_logo-removebg-preview_e10glw.png"
                alt="Algoutsav Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </button>

            {/* CENTER — NAV LINKS */}
            <div className="hidden lg:flex flex-1 justify-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-200 hover:text-red-500 flicker transition-all 
                  duration-300 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* RIGHT — ALGOUTSAV LOGO */}
            <div className="hidden lg:flex items-center">
              <button onClick={() => scrollToSection("#home")}>
                <img
                  src="https://res.cloudinary.com/dwh7xuupf/image/upload/v1764781618/aulogo-removebg-preview_sovesk.png"
                  alt="Algoutsav Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-200 hover:text-red-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-lg border-t border-red-600/20">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-gray-200 hover:text-red-500 
                  flicker transition-all duration-300 text-lg font-medium py-2"
                >
                  {link.name}
                </button>
              ))}

              <button onClick={() => scrollToSection("#home")}>
                <img
                  src="https://res.cloudinary.com/dwh7xuupf/image/upload/v1764781618/aulogo-removebg-preview_sovesk.png"
                  alt="Algoutsav Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
