import Hero from '@/components/Hero';
import StatsSection from '@/components/sections/StatsSection';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Services />
      <About />
      <Testimonials />
      <Process />
      <CTA />
    </>
  );
}
