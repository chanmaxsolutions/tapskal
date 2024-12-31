import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsSection from '@/components/sections/StatsSection';
import Services from '@/components/Services';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsSection />
      <Services />
      <About/>
      {/* Other page content will go here */}
      </main>
  );
}