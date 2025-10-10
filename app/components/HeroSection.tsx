/**
 * Hero Section Component
 * Main landing section with brand identity
 */

import { BRAND } from '../constants/brand';
import { GridBackground, LoopLines, FloatingDots, RoutineRings } from './BackgroundEffects';

export function HeroSection() {
  return (
    <section className="section-midnight min-h-screen flex items-center justify-center px-6 md:px-12 relative">
      {/* Background Effects */}
      <GridBackground />
      <LoopLines />
      <FloatingDots />
      <RoutineRings />

      {/* Content */}
      <div className="max-w-5xl w-full hero-container relative z-10">
        {/* Logo */}
        <div className="mb-16">
          <h1 className="brand-logo text-5xl md:text-7xl lg:text-8xl text-[#e2e8f0] mb-4">
            <span className="logo-text inline-block">LAZY</span>
            <span className="logo-text inline-block text-[#00c896]">SATURDAY</span>
          </h1>
          <p className="brand-code text-sm md:text-base text-[#94a3b8] ml-1">
            {BRAND.description}
          </p>
        </div>

        {/* Main Slogan */}
        <div className="mb-4">
          <h2 className="brand-headline text-3xl md:text-5xl lg:text-6xl text-[#e2e8f0] leading-tight mb-6">
            Make small.<br />
            Ship fast.<br />
            <span className="text-[#00c896]">Live slow.</span>
          </h2>
          <div className="accent-line">
            <p className="brand-body text-lg md:text-xl text-[#cbd5e1] leading-relaxed">
              작게 만들어, 꾸준히 배포하며, 천천히 사는 삶.<br />
              완벽함보다 반복을, 속도보다 지속을 선택하는 개발자의 생존법.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {BRAND.keywords.map((keyword) => (
            <span key={keyword} className="brand-tag">#{keyword}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
