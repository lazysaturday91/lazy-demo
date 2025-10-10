/**
 * Philosophy Section Component
 * Display brand philosophy pillars with modern glass effects
 */

import { PHILOSOPHY } from '../constants/brand';
import type { PhilosophyItem } from '../types';
import { MorphingShapes, GlowOrbs } from './AdvancedBackgrounds';

interface PhilosophyCardProps {
  philosophy: PhilosophyItem;
}

function PhilosophyCard({ philosophy }: PhilosophyCardProps) {
  return (
    <div className="philosophy-block group cursor-pointer">
      <div className="philosophy-number relative z-10">
        {philosophy.number}
      </div>
      <h3 className="brand-headline text-2xl md:text-3xl text-white mb-4 group-hover:text-[#00ffb3] transition-colors duration-300">
        {philosophy.title}
      </h3>
      <p className="brand-body text-[#94a3b8] leading-relaxed text-base md:text-lg">
        {philosophy.description}
      </p>
    </div>
  );
}

export function PhilosophySection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#0f172a] via-[#0a0f1e] to-[#020617] overflow-hidden">
      {/* Background Effects */}
      <MorphingShapes />
      <GlowOrbs />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00c896]/20 to-[#6366f1]/20 border border-[#00c896]/30 backdrop-blur-sm">
              <span className="text-sm uppercase tracking-widest text-[#00c896] font-semibold">Philosophy</span>
            </div>
          </div>

          <h2 className="brand-headline text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              4가지 철학적 기둥
            </span>
          </h2>

          <p className="brand-body text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
            LazySaturday를 지탱하는 핵심 가치와 믿음
          </p>

          {/* Decorative Element */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00c896] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PHILOSOPHY.map((phil) => (
            <PhilosophyCard key={phil.number} philosophy={phil} />
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex items-center justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#00c896]/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
