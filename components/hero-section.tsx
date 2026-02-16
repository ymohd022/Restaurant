import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-biryani.jpg"
          alt="Authentic Hyderabadi Dum Biryani"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/hydb.png"
            alt="Proper Hyderabadis Logo"
            width={220}
            height={220}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Est. Hyderabad
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
        </div>

        <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance block">Authentic Hyderabadi</span>
          <span className="text-balance block mt-2">
            <span className="text-primary">Dum Biryani</span> in Australia
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-foreground/70 md:text-xl">
          Cooked by Proper Hyderabadis. Taste the royal tradition, passed down through generations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:0411660507"
            className="group flex items-center gap-3 rounded-sm bg-primary px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,160,60,0.3)]"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Call Now
          </a>
          <a
            href="https://wa.me/61411660507"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-sm border border-primary/40 bg-primary/10 px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/60"
          >
            <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/60" />
            <span className="font-body text-xs uppercase tracking-wider">Halal Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/60" />
            <span className="font-body text-xs uppercase tracking-wider">Freshly Prepared</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary/60" />
            <span className="font-body text-xs uppercase tracking-wider">Melbourne, VIC</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
