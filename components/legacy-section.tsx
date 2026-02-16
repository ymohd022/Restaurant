"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function LegacySection() {
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
    <section
      id="legacy"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Our Legacy
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <h2 className="font-sans text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance block">A Royal Heritage of</span>
            <span className="text-primary text-balance block mt-1">Flavour & Tradition</span>
          </h2>
        </div>

        <div
          className={`grid gap-12 md:grid-cols-2 md:items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/legacy-cooking.jpg"
                alt="Traditional Dum cooking process with sealed handi pot over charcoal"
                width={600}
                height={700}
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-primary/20 -z-10" />
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-body text-lg leading-relaxed text-foreground/80">
              Our story begins in the narrow lanes of the old city of Hyderabad, where the aroma of
              slow-cooked Dum Biryani has wafted through homes for generations. Every grain of rice,
              every piece of tender meat carries with it the legacy of Nizami kitchens.
            </p>

            <p className="font-body text-lg leading-relaxed text-foreground/80">
              We brought that same legacy to Australia. No shortcuts, no compromises. Our biryani is
              prepared using the traditional{" "}
              <span className="font-semibold text-primary">Dum Pukht</span> method{" "}
              {"- "}slow-cooked in sealed handis over gentle flame, allowing spices to infuse every
              layer naturally.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              {[
                { number: "3+", label: "Generations of Recipes" },
                { number: "100%", label: "Authentic Spices" },
                { number: "Dum", label: "Pukht Cooking Style" },
                { number: "Halal", label: "Certified Always" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
                  <div className="font-sans text-2xl font-bold text-primary md:text-3xl">
                    {stat.number}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="mt-4 border-l-2 border-primary/40 pl-6 italic">
              <p className="font-sans text-xl text-foreground/70 md:text-2xl">
                {'"'}The secret is not in the recipe alone, but in the patience of the cook and the
                fire beneath the handi.{'"'}
              </p>
              <footer className="mt-3 font-body text-sm text-muted-foreground">
                {"- "}A Hyderabadi Tradition
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
