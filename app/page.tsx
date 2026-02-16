import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LegacySection } from "@/components/legacy-section"
import { MenuSection } from "@/components/menu-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ChefSection } from "@/components/chef-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="ornament-border border-b" />
        <LegacySection />
        <div className="ornament-border border-b" />
        <MenuSection />
        <div className="ornament-border border-b" />
        <WhyChooseUsSection />
        <div className="ornament-border border-b" />
        <ChefSection />
        <div className="ornament-border border-b" />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
