"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Legacy", href: "#legacy" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/hydb.png"
            alt="Proper Hyderabadis Logo"
            width={60}
            height={60}
            className={`transition-all duration-500 ${isScrolled ? "w-10 h-10" : "w-14 h-14"}`}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm font-semibold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0432917935"
            className="flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-primary/20 animate-fade-in-up">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-lg font-semibold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:0411660507"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
