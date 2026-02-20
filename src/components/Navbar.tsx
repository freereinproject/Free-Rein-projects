import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { label: "Commercial", path: "/services/commercial" },
  { label: "Residential", path: "/services/residential" },
  { label: "Partitioning, Walling & Doors", path: "/services/partitioning-walling-doors" },
  { label: "Ceilings & Roofing", path: "/services/ceilings-roofing" },
  { label: "Electrical & Plumbing", path: "/services/electrical-plumbing" },
  { label: "Kitchen & Built-In Cupboards", path: "/services/kitchen-cupboards" },
  { label: "Windows & Window Coverings", path: "/services/windows-coverings" },
  { label: "Outdoor Fixtures & Fittings", path: "/services/outdoor-fixtures" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "#services", hasDropdown: true },
  { label: "Projects", path: "/projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.08)]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="FreeRein Projects Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                /* Use a persistent hover bridge so the dropdown doesn't vanish */
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 text-foreground/80 font-medium hover:text-primary transition-colors text-sm rounded-lg hover:bg-secondary">
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Invisible bridge so mouse can travel from button to dropdown */}
                  <div className="absolute top-full left-0 w-full h-3" />

                  <div
                    className={`absolute top-[calc(100%+8px)] left-0 w-72 bg-white border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 z-50 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="p-2">
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-colors rounded-xl font-medium"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    location.pathname === link.path
                      ? "text-primary bg-secondary"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/27782846198"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground p-2 rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1 animate-fade-in">
            <Link to="/" className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary font-medium text-sm rounded-xl transition-colors">Home</Link>
            <Link to="/about" className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary font-medium text-sm rounded-xl transition-colors">About</Link>
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary font-medium text-sm rounded-xl transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="bg-secondary/60 rounded-xl mx-2 mb-2 overflow-hidden mt-1">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="flex items-center gap-3 px-5 py-2.5 text-sm text-foreground/80 hover:text-primary border-b border-border last:border-0"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/projects" className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary font-medium text-sm rounded-xl transition-colors">Projects</Link>
            <div className="px-4 pt-3 pb-2">
              <a
                href="https://wa.me/27782846198"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
