"use client"
import HeroSection from "@/components/hero-section"
import WhatWeDo from "@/components/what-we-do"
import ServicesGrid from "@/components/services-grid"
import PortfolioShowcase from "@/components/portfolio-showcase"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import ProcessTimeline from "@/components/process-timeline"
import TechStack from "@/components/tech-stack"
import CallToAction from "@/components/call-to-action"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"
import DemoVideoSection from "@/components/demo-video-section"
import InteractiveShowcase from "@/components/interactive-showcase"
import ClientLogos from "@/components/client-logos"
import BusinessPartnersShowcase from "@/components/business-partners-showcase"
import PartnerCaseStudies from "@/components/partner-case-studies"
import ModernCarousel from "@/components/ModernCarousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden pt-20">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        {/* <DemoVideoSection /> */}
        <ClientLogos />
        <PartnerCaseStudies />
        <BusinessPartnersShowcase />
        <WhatWeDo />
        <InteractiveShowcase />
        <ServicesGrid />
        <PortfolioShowcase />
        <ProcessTimeline />
        <TechStack />
        <Pricing />
        <WhyChooseUs />
        <ModernCarousel />
        <Testimonials />
        <CallToAction />
        <ContactForm />
        <Footer />
      </div>

      <AIChatbot />
    </main>
  )
}
