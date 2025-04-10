import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/About";
import ProductsServices from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import IndustriesWeServe from "@/components/sections/Industries";
import Resources from "@/components/sections/Resources";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/Cta";
import ServicesSection from "@/components/sections/Services";
import ContactUs from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      {/* Smooth Scroll Container */}
      <div className="scroll-smooth">
        <Hero />
        <AboutUs />
        <ProductsServices />
        <IndustriesWeServe />
        <Resources />
        <Testimonials />
        <CTA />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}