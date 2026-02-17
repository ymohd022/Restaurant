"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Get in Touch
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <h2 className="font-sans text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance block">Order Your</span>
            <span className="text-primary text-balance block mt-1">Royal Feast</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Ready to taste authentic Hyderabadi Dum Biryani? Reach out and let us serve you.
          </p>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="group flex flex-col items-center gap-4 rounded-sm border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(201,160,60,0.1)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-foreground">Call Us</h3>
              <div className="mt-1 flex flex-col items-center">
                <a href="tel:0411660507" className="font-body text-sm text-primary">
                  0411 660 507
                </a>
                <a href="tel:0432917935" className="font-body text-sm text-primary mt-1">
                  0432 917 935
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/+610411660507"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-sm border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(201,160,60,0.1)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-foreground">WhatsApp</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">
                Quick replies & orders
              </p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps?q=-37.696309,144.931513"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location in Google Maps"
            className="group flex flex-col items-center gap-4 rounded-sm border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-foreground">Location</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">54 View St</p>
              <p className="font-body text-sm text-muted-foreground">Glenroy VIC 3046</p>
            </div>
          </a>

          <div className="group flex flex-col items-center gap-4 rounded-sm border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-foreground">Hours</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">We’re Open Every Day</p>
              <p className="font-body text-sm text-muted-foreground">11:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
