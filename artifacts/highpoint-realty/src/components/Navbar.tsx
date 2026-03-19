import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import logo from "@assets/HPLogos3_(1)_1773882324655.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/current-auctions", label: "Current Auctions" },
  { href: "/past-auctions", label: "Past Auctions" },
  { href: "/property-management", label: "Property Management" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-[#1B2D4F] shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="High Point Realty & Auction"
              className="h-10 md:h-12 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
                  location === link.href
                    ? "text-[#C9A84C]"
                    : "text-white/80 hover:text-[#C9A84C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Phone + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:8592002084"
              className="hidden sm:flex items-center gap-2 bg-[#C9A84C] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#b8933e] transition-colors"
            >
              <Phone size={14} />
              <span className="hidden md:inline">859-200-2084</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-[#C9A84C] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B2D4F] border-t border-white/10">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium uppercase tracking-widest rounded-lg transition-colors ${
                  location === link.href
                    ? "text-[#C9A84C] bg-white/5"
                    : "text-white/80 hover:text-[#C9A84C] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:8592002084"
                className="flex items-center justify-center gap-2 bg-[#C9A84C] text-white font-semibold py-3 rounded-lg hover:bg-[#b8933e] transition-colors"
              >
                <Phone size={16} />
                Call Ken: 859-200-2084
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
