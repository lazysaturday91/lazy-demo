/**
 * Hero Section Component
 * Modern landing section with advanced animations
 */

import { BRAND } from '../constants/brand';
import {
  AnimatedGradientMesh,
  FloatingParticles,
  MorphingShapes,
  GlowOrbs,
  GridPattern
} from './AdvancedBackgrounds';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a0f1e] to-[#0f172a]">
      {/* Advanced Background Effects */}
      <AnimatedGradientMesh />
      <MorphingShapes />
      <FloatingParticles />
      <GlowOrbs />
      <GridPattern />

      {/* Content */}
      <div className="max-w-6xl w-full relative z-10 animate-fade-in-up">
        {/* Logo with Glow Effect */}
        <div className="mb-16 text-center">
          <h1 className="brand-logo text-6xl md:text-8xl lg:text-9xl mb-6 relative">
            <span
              className="inline-block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-logo-breathe"
              style={{
                textShadow: '0 0 80px rgba(255, 255, 255, 0.3)',
                filter: 'drop-shadow(0 0 30px rgba(0, 200, 150, 0.3))'
              }}
            >
              LAZY
            </span>
            <span
              className="inline-block bg-gradient-to-r from-[#00c896] via-[#00ffb3] to-[#06b6d4] bg-clip-text text-transparent ml-4 animate-gradient-shift"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(0, 200, 150, 0.5))'
              }}
            >
              SATURDAY
            </span>

            {/* Glow Effect Behind Logo */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-[#00c896]/50 via-[#6366f1]/40 to-[#8b5cf6]/30 animate-blob-morph"></div>
            </div>
          </h1>

          <p className="brand-code text-base md:text-lg text-[#94a3b8] tracking-wide">
            <span className="inline-block px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              {BRAND.description}
            </span>
          </p>
        </div>

        {/* Main Slogan with Glass Card */}
        <div className="mb-12">
          <div className="glass-card max-w-4xl mx-auto text-center">
            <h2 className="brand-headline text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="block text-white/90 mb-2">Make small.</span>
              <span className="block text-white/90 mb-2">Ship fast.</span>
              <span
                className="block bg-gradient-to-r from-[#00c896] via-[#00ffb3] to-[#06b6d4] bg-clip-text text-transparent animate-gradient-shift"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 200, 150, 0.4))'
                }}
              >
                Live slow.
              </span>
            </h2>

            <div className="relative">
              <p className="brand-body text-lg md:text-xl text-[#cbd5e1] leading-relaxed max-w-3xl mx-auto">
                작게 만들어, 꾸준히 배포하며, 천천히 사는 삶.<br />
                <span className="text-white/80 font-medium">
                  완벽함보다 반복을, 속도보다 지속을 선택하는 개발자의 생존법.
                </span>
              </p>

              {/* Decorative line */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00c896] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[#00c896] animate-glow-pulse"></div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#00c896] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags with Enhanced Styling */}
        <div className="flex flex-wrap gap-3 justify-center">
          {BRAND.keywords.map((keyword, index) => (
            <span
              key={keyword}
              className="brand-tag"
              style={{
                animation: `fade-in-scale 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              #{keyword}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-3d">
          <p className="text-sm text-[#64748b] uppercase tracking-widest">Scroll</p>
          <div className="w-6 h-10 rounded-full border-2 border-[#00c896]/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-[#00c896] animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
