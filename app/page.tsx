/**
 * Home Page
 * LazySaturday landing page with AI automation vision
 */

'use client';

import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ManifestoSection } from './components/ManifestoSection';
import { StatsSection } from './components/StatsSection';
import { JourneySection } from './components/JourneySection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <main className="relative z-10" role="main">
        <HeroSection />
        <VisionSection />
        <PhilosophySection />
        <ManifestoSection />
        <StatsSection />
        <JourneySection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
