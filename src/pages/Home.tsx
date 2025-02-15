import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import FeaturesSection from "@/components/sections/Features";
import SolutionsSection from "@/components/sections/Solutions";
import TechnologySection from "@/components/sections/Technology";
import TestimonialsSection from "@/components/sections/Testimonials";
import PricingSection from "@/components/sections/Pricing";
import ContactUs from "@/components/sections/Contact";
import HeroSection from "../components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import HowItWorksSection from "@/components/sections/HowItWorks";
import CitiesSection from "@/components/sections/Cities";
import ContactSection from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/Cta";
import AboutUs from "@/components/sections/About";
import ProductsServices from "@/components/sections/Services";
import IndustriesWeServe from "@/components/sections/Industries";
import Resources from "@/components/sections/Resources";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs/>
      <ProductsServices/>
      <Features/>
      <IndustriesWeServe/>
      <Resources/>
      <Testimonials/>
      <CTA/>
      <ServicesSection/> 
      <ContactUs/>
      <Footer/>
    </main>
  );
}