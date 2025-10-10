/**
 * Philosophy Section Component
 * Display brand philosophy pillars
 */

import { PHILOSOPHY } from '../constants/brand';
import type { PhilosophyItem } from '../types';

interface PhilosophyCardProps {
  philosophy: PhilosophyItem;
}

function PhilosophyCard({ philosophy }: PhilosophyCardProps) {
  return (
    <div
      className="philosophy-block cursor-pointer bg-[#0a0f1e]/60 backdrop-blur-sm border-l-4 border-[#00c896] hover:bg-[#1a2740]/80 transition-all duration-300"
    >
      <div className="philosophy-number bg-[#00c896] text-[#0a0f1e]">
        {philosophy.number}
      </div>
      <h3 className="brand-headline text-2xl text-[#e2e8f0] mb-3">
        {philosophy.title}
      </h3>
      <p className="brand-body text-[#94a3b8] leading-relaxed">
        {philosophy.description}
      </p>
    </div>
  );
}

export function PhilosophySection() {
  return (
    <section className="section-dawn py-24 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="brand-headline text-4xl md:text-5xl text-[#e2e8f0] mb-4">
            Philosophy
          </h2>
          <p className="brand-body text-lg text-[#cbd5e1]">
            LazySaturday를 지탱하는 4가지 철학적 기둥
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PHILOSOPHY.map((phil) => (
            <PhilosophyCard
              key={phil.number}
              philosophy={phil}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
