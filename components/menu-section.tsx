"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const menuItems = [
  {
    name: "Chicken Dum Biryani",
    description:
      "Tender chicken pieces layered with fragrant basmati rice, saffron, and authentic Hyderabadi spices, slow-cooked to perfection.",
    image: "/images/chicken-biryani.jpg",
    isSpecial: false,
  },
  {
    name: "Mutton Dum Biryani",
    description:
      "Succulent mutton on the bone, marinated overnight and slow-cooked in a sealed handi with aromatic rice and traditional masalas.",
    image: "/images/mutton-biryani.jpg",
    isSpecial: false,
  },
  {
    name: "Family Packs & Party Orders",
    description:
      "Generously portioned family platters and bulk catering packs. Perfect for gatherings, celebrations, and sharing the Hyderabadi experience.",
    image: "/images/family-pack.jpg",
    isSpecial: false,
  },
  {
    name: "Haleem",
    description:
      "The legendary Hyderabadi Haleem, slow-cooked for hours with wheat, lentils, and premium meat. A Ramadan special delicacy.",
    image: "/images/haleem.jpg",
    isSpecial: true,
    badge: "Coming This Ramadan",
  },
]

export function MenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="menu" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
              The Menu
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <h2 className="font-sans text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance block">What We Serve</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Every dish tells the story of Hyderabad. Prepared with love, served with pride.
          </p>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`group relative overflow-hidden rounded-sm transition-all duration-500 ${
                item.isSpecial
                  ? "animate-glow-pulse border border-primary/40 bg-card"
                  : "border border-border/50 bg-card hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {item.isSpecial && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5">
                  <Star className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
                  <span className="font-body text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    {item.badge}
                  </span>
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="font-sans text-2xl font-bold text-foreground md:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
