/**
 * Manifesto Section Component
 * Personal story and vision for all developers
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
          <div className="space-y-10 mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-medium text-center">
              <span className="bg-gradient-to-r from-[#00c896] via-[#00ffb3] to-[#06b6d4] bg-clip-text text-transparent">
                {MANIFESTO.quote}
              </span>
            </p>

            {/* Personal Story */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {MANIFESTO.content.map((line, index) => (
                <p
                  key={index}
                  className="text-xl md:text-2xl leading-relaxed text-white/80 text-center"
                  style={{
                    animation: `fade-in-up 0.8s ease-out ${index * 0.2 + 0.3}s backwards`
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 py-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#00c896] to-transparent"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00c896] animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-[#00c896] to-transparent"></div>
            </div>

            {/* Vision */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {MANIFESTO.vision.map((line, index) => (
                <p
                  key={index}
                  className="text-xl md:text-2xl leading-relaxed text-[#00ffb3] font-medium text-center"
                  style={{
                    animation: `fade-in-up 0.8s ease-out ${index * 0.2 + 1}s backwards`
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="relative pt-12 border-t border-white/10">
            <p className="text-lg md:text-xl leading-relaxed text-[#cbd5e1] text-center max-w-4xl mx-auto mb-12">
              {MANIFESTO.closing}
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c896] to-[#06b6d4] text-white font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer flex items-center gap-2">
                <span>🚀</span>
                <span>플랫폼 시작하기</span>
              </div>
              <div className="px-8 py-4 rounded-xl border-2 border-[#00c896] text-[#00c896] font-semibold text-lg hover:bg-[#00c896]/10 transition-all duration-300 cursor-pointer flex items-center gap-2">
                <span>💼</span>
                <span>비즈니스 모델 보기</span>
              </div>
            </div>

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
