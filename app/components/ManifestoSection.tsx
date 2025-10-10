/**
 * Manifesto Section Component
 * Brand identity manifesto with stunning glass effects
 */

import { MANIFESTO } from '../constants/brand';
import { AnimatedGradientMesh, FloatingParticles } from './AdvancedBackgrounds';

export function ManifestoSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#020617] to-[#0a0f1e] overflow-hidden">
      {/* Background Effects */}
      <AnimatedGradientMesh />
      <FloatingParticles />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="manifesto-card">
          {/* Header with Loop Indicator */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="loop-indicator mb-8"></div>
            <h2 className="brand-headline text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-[#00ffb3] to-white bg-clip-text text-transparent">
                {MANIFESTO.title}
              </span>
            </h2>
          </div>

          {/* Main Quote */}
          <div className="space-y-8 mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-medium text-center">
              <span className="bg-gradient-to-r from-[#00c896] via-[#00ffb3] to-[#06b6d4] bg-clip-text text-transparent">
                {MANIFESTO.quote}
              </span>
            </p>

            {/* Content Lines */}
            {MANIFESTO.content.map((line, index) => (
              <p
                key={index}
                className="text-xl md:text-2xl leading-relaxed text-white/90 text-center"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.2 + 0.3}s backwards`
                }}
              >
                {line}
              </p>
            ))}

            {/* Final Statement */}
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-semibold text-center pt-8">
              <span className="text-white">그게 나의 </span>
              <span
                className="bg-gradient-to-r from-[#00c896] via-[#00ffb3] to-[#06b6d4] bg-clip-text text-transparent animate-gradient-shift"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 200, 150, 0.5))'
                }}
              >
                LazySaturday
              </span>
              <span className="text-white">다.</span>
            </p>
          </div>

          {/* Closing Statement */}
          <div className="relative pt-12 border-t border-white/10">
            <p className="text-lg md:text-xl leading-relaxed text-[#cbd5e1] text-center max-w-4xl mx-auto">
              {MANIFESTO.closing}
            </p>

            {/* Decorative Dots */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#6366f1] animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
