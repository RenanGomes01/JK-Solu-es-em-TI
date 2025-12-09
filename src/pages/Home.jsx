import React from 'react';
import Navbar from '@/components/institutional/Navbar';
import Footer from '@/components/institutional/Footer';
import HeroSection from '@/components/institutional/HeroSection';
import ServicesSection from '@/components/institutional/ServicesSection';
import WhyChooseUs from '@/components/institutional/WhyChooseUs';
import TestimonialsSection from '@/components/institutional/TestimonialsSection';
import CTASection from '@/components/institutional/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

