import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsSection from '@/components/sections/StatsSection';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsSection />
      {/* Other page content will go here */}
      </main>
  );
}