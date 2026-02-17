"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

export function ChefSection() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
              The People Behind the Biryani
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          <h2 className="font-sans text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance block">Made by</span>
            <span className="text-primary text-balance block mt-1">Proper Hyderabadis</span>
          </h2>

          <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 md:text-left">
            <div className="relative flex-shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-primary/30 md:h-56 md:w-56">
                <Image
                  src="/images/hydb.png"
                  alt="Mohammed - Founder of Proper Hyderabadis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-full w-full rounded-full border border-primary/10 -z-10" />
            </div>

            <div className="flex flex-col gap-6 max-w-lg">
              <div>
                <h3 className="font-sans text-2xl font-bold text-foreground">Mohammed Sirajuddin</h3>
                <p className="font-body text-sm text-primary">Founder & Head Chef</p>
              </div>

              <Quote className="h-8 w-8 text-primary/30" />

              <p className="font-body text-lg leading-relaxed text-foreground/80">
                I grew up watching my elders cook biryani in the narrow gullies of Hyderabad. The
                sound of the handi being sealed, the aroma of saffron and ghee filling the house{" "}
                {"- "}that is my childhood. When I came to Australia, I made a promise: I would bring
                the same authentic taste to every home here.
              </p>

              <p className="font-body text-lg leading-relaxed text-foreground/80">
                This is not just food. This is our identity, our culture, and our love on a plate.
              </p>

              <div className="flex items-center gap-4 mt-2">
                <span className="h-px flex-1 bg-primary/20" />
                <span className="font-sans text-sm font-semibold text-primary italic">
                  From Hyderabad, with love.
                </span>
                <span className="h-px flex-1 bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
