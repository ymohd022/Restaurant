"use client"

import { useEffect, useRef, useState } from "react"
import { Flame, Users, Leaf, PartyPopper } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Authentic Hyderabadi Taste",
    description:
      "Recipes passed down through generations from the old city of Hyderabad. No fusion, no shortcuts - pure Nizami flavour.",
  },
  {
    icon: Users,
    title: "Cooked by Natives",
    description:
      "Our chefs are born and raised in Hyderabad. They carry the tradition in their blood and the masala in their hands.",
  },
  {
    icon: Leaf,
    title: "Freshly Prepared Daily",
    description:
      "Every order is freshly cooked to order using premium ingredients. No reheating, no frozen meals - only fresh, aromatic biryani.",
  },
  {
    icon: PartyPopper,
    title: "Catering & Bulk Orders",
    description:
      "From intimate family dinners to grand celebrations, we cater for events of all sizes across Melbourne.",
  },
]

export function WhyChooseUsSection() {
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
    <section id="why-us" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Our Promise
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <h2 className="font-sans text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance block">Why Choose</span>
            <span className="text-primary text-balance block mt-1">Proper Hyderabadis</span>
          </h2>
        </div>

        <div
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col items-center rounded-sm border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(201,160,60,0.1)]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-sans text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
