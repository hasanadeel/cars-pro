"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import CarProsLogo from "./logo"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/booking", label: "Book Service" },
    { href: "/contact", label: "Contact" },
    { href: "/reviews", label: "Reviews" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <CarProsLogo className="w-10 h-10" />
            <span className="font-display font-bold text-foreground hidden sm:inline text-xl">Car Pros</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/booking"
            className="hidden sm:inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-medium text-sm transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="block mx-4 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-medium text-sm text-center transition-colors"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
