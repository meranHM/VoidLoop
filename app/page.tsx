import Header from "@/components/Header"
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
      <main
        className="relative flex flex-col mt-14 overflow-x-hidden"
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
