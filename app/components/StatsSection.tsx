/**
 * Stats Section Component
 * Display key metrics with AI automation focus
 */

import { STATS } from '../constants/brand';
import { MorphingShapes, PulseRings } from './AdvancedBackgrounds';

interface StatItemProps {
  number: string;
  label: string;
  description: string;
}

function StatItem({ number, label, description }: StatItemProps) {
  return (
    <div className="glass-card text-center group cursor-pointer hover:scale-105 transition-all duration-500">
      <div className="relative p-8">
        {/* Number */}
        <div
          className="stat-number group-hover:scale-110 transition-transform duration-500"
          data-value={number}
        >
          {number}
        </div>

        {/* Label */}
        <div className="stat-label text-white/90 mt-4 mb-2">{label}</div>

        {/* Description */}
        <div className="text-sm text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
          {description}
        </div>

        {/* Decorative Line */}
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#00c896] to-[#6366f1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#0f172a] to-[#0a0f1e] overflow-hidden">
      {/* Background Effects */}
      <MorphingShapes />
      <PulseRings />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00c896]/20 to-[#6366f1]/20 border border-[#00c896]/30 backdrop-blur-sm">
              <span className="text-sm uppercase tracking-widest text-[#00c896] font-semibold">Impact</span>
            </div>
          </div>

          <h2 className="brand-headline text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-white via-[#00ffb3] to-white bg-clip-text text-transparent">
              자동화의 힘
            </span>
          </h2>

          <p className="brand-body text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
            AI가 일하는 동안, 당신은 살아가세요
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                animation: `fade-in-scale 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 text-center">
          <div className="glass-card-strong max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00c896] to-[#06b6d4] flex items-center justify-center text-2xl animate-float-3d">
                🤖
              </div>
            </div>
            <p className="brand-body text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
              AI는 쉬지 않습니다. 당신은 쉬어도 됩니다.
            </p>
            <p className="brand-body text-lg text-[#94a3b8]">
              배포, 모니터링, 알림... AI가 24시간 당신의 시스템을 지킵니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
