import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-card">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <Image
            src="/images/hb.png"
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

          <div className="h-px w-full max-w-sm ornament-border" />

          <p className="font-body text-xs text-muted-foreground">
            {"© "}{new Date().getFullYear()} Proper Hyderabadis. All rights reserved. ABN Pending.
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
