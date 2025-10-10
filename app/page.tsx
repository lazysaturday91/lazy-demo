/**
 * Home Page
 * LazySaturday landing page
 * Refactored for maintainability and scalability
 */

'use client';

import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ManifestoSection } from './components/ManifestoSection';
import { StatsSection } from './components/StatsSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <main className="relative z-10" role="main">
        <HeroSection />
        <PhilosophySection />
        <ManifestoSection />
        <StatsSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
