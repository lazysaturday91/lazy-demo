/**
 * Vision Section Component
 * Display mission and vision with AI automation focus
 */

import { VISION } from '../constants/brand';
import { MorphingShapes, FloatingParticles } from './AdvancedBackgrounds';

export function VisionSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0f1e] to-[#020617] overflow-hidden">
      {/* Background Effects */}
      <MorphingShapes />
      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00c896]/20 to-[#6366f1]/20 border border-[#00c896]/30 backdrop-blur-sm">
              <span className="text-sm uppercase tracking-widest text-[#00c896] font-semibold">
                {VISION.title}
              </span>
            </div>
          </div>

          <h2 className="brand-headline text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="bg-gradient-to-r from-white via-[#00ffb3] to-white bg-clip-text text-transparent">
              {VISION.subtitle}
            </span>
          </h2>

          <p className="brand-body text-xl md:text-2xl text-[#94a3b8] max-w-4xl mx-auto leading-relaxed mb-12">
            {VISION.description}
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#00c896] to-transparent"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00c896] animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-[#00c896] to-transparent"></div>
          </div>
        </div>

        {/* Vision Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VISION.points.map((point, index) => (
            <div
              key={point.title}
              className="glass-card group cursor-pointer text-center"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.15}s backwards`
              }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00c896]/20 to-[#6366f1]/20 border border-[#00c896]/30 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {point.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="brand-headline text-xl md:text-2xl text-white mb-4 group-hover:text-[#00ffb3] transition-colors duration-300">
                {point.title}
              </h3>

              {/* Description */}
              <p className="brand-body text-[#94a3b8] leading-relaxed text-sm md:text-base">
                {point.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00c896]/0 to-[#6366f1]/0 group-hover:from-[#00c896]/5 group-hover:to-[#6366f1]/5 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block glass-card-strong px-8 py-6 max-w-3xl">
            <p className="brand-body text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              <span className="text-[#00c896] font-semibold">나 혼자 쓰던 자동화 스크립트</span>가 누군가의 주말을 지켜줄 수 있다면,<br />
              그것이 바로 <span className="text-[#00ffb3] font-semibold">LazySaturday</span>의 존재 이유입니다.
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00c896] to-[#06b6d4] text-white font-semibold hover:scale-105 transition-transform cursor-pointer">
                Join the Movement
              </div>
              <div className="px-6 py-3 rounded-lg border-2 border-[#00c896] text-[#00c896] font-semibold hover:bg-[#00c896]/10 transition-colors cursor-pointer">
                Explore Tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
