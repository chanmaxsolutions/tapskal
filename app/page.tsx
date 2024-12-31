import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsSection from '@/components/sections/StatsSection';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsSection />
      <Services />
      <About/>
      <Testimonials/>
      <Process/>
      <CTA/>
      {/* Other page content will go here */}
      </main>
  );
}