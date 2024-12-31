import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsSection from '@/components/sections/StatsSection';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsSection />
      <Services />
      {/* Other page content will go here */}
      </main>
  );
}