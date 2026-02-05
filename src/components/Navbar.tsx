"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#artists", label: "Artists" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#aftercare", label: "Aftercare" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#booking", label: "Book Now" },
  { href: "#studio", label: "Visit Us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-black/95 backdrop-blur-md border-b border-ink-medium/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl lg:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
              <span className="text-crimson">Ink</span>
              <span className="text-white">Craft</span>
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-ash border-l border-ink-light pl-2 ml-1">
              Studio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                  link.label === "Book Now"
                    ? "text-crimson hover:text-crimson-light font-semibold"
                    : "text-smoke hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+17185551234"
              className="hidden sm:flex items-center gap-2 text-sm text-smoke hover:text-crimson transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(718) 555-1234</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-smoke hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-ink-dark/98 backdrop-blur-md border-t border-ink-medium/50">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm uppercase tracking-wider transition-colors duration-300 ${
                  link.label === "Book Now"
                    ? "text-crimson hover:text-crimson-light font-semibold"
                    : "text-smoke hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+17185551234"
              className="flex items-center gap-2 text-sm text-smoke hover:text-crimson transition-colors pt-2 border-t border-ink-medium/50"
            >
              <Phone className="w-4 h-4" />
              <span>(718) 555-1234</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
