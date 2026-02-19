import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-card">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <Image
            src="/images/hydb.png"
            alt="Proper Hyderabadis Logo"
            width={120}
            height={120}
          />

          <p className="font-sans text-lg font-semibold text-foreground/80 italic">
            Proper Hyderabadis {"- "}Bringing the taste of Hyderabad to Australia.
          </p>

          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((star) => (
                <svg
                  key={star}
                  className="h-4 w-4 text-primary/60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {["Home", "Our Legacy", "Menu", "Why Us", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/properhyderabadis"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="Follow us on Instagram"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="font-body text-sm">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/properhyderabadis"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="Follow us on Facebook"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-body text-sm">Facebook</span>
            </a>
          </div>

          <div className="h-px w-full max-w-sm ornament-border" />

          <p className="font-body text-xs text-muted-foreground">
            {"© "}{new Date().getFullYear()} Proper Hyderabadis. All rights reserved. ABN: 44144736109
          </p>
                <p className="text-muted-foreground text-xs text-center sm:text-left">
                Designed & Developed by{' '}
                <a 
                  href="https://alphaspearsol.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Alpha Spear Solutions
                </a>
              </p>
        </div>
      </div>
    </footer>
  )
}
