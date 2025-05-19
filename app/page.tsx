import Header from "@/components/Header"
import Vinyl from "@/components/Vinyl"
import HeroSection from "@/components/HeroSection"
import MottoSection from "@/components/MottoSection"
import ServicesSection from "@/components/ServicesSection"
import PortfolioSection from "@/components/PortfolioSection"
import AboutSection from "@/components/AboutSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <>
      <Header />
      <Vinyl />
      <main
        className="flex flex-col mt-14"
      >
        <HeroSection />
        <MottoSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
