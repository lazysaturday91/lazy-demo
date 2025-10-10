/**
 * Journey Section Component
 * Display roadmap from personal tools to developer community
 */

import { JOURNEY } from '../constants/brand';
import { GlowOrbs, ShimmerLines } from './AdvancedBackgrounds';

export function JourneySection() {
  const statusColors = {
    current: 'from-[#00c896] to-[#00ffb3]',
    planned: 'from-[#6366f1] to-[#818cf8]',
    vision: 'from-[#8b5cf6] to-[#ec4899]',
  };

  const statusLabels = {
    current: 'In Progress',
    planned: 'Planned',
    vision: 'Vision',
  };

  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#020617] via-[#0a0f1e] to-[#0f172a] overflow-hidden">
      {/* Background Effects */}
      <GlowOrbs />
      <ShimmerLines />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="brand-headline text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {JOURNEY.title}
            </span>
          </h2>
          <p className="brand-body text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto">
            빠른 실행에서 지속 가능한 비즈니스 제국으로
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00c896] via-[#6366f1] to-[#8b5cf6] hidden lg:block"></div>

          {/* Journey Stages */}
          <div className="space-y-12 lg:space-y-24">
            {JOURNEY.stages.map((stage, index) => (
              <div
                key={stage.phase}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.2}s backwards`
                }}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="glass-card group cursor-pointer hover:scale-105 transition-all duration-500">
                    {/* Status Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${statusColors[stage.status as keyof typeof statusColors]} text-white`}>
                        {statusLabels[stage.status as keyof typeof statusLabels]}
                      </span>
                    </div>

                    {/* Phase Number */}
                    <div className="mb-4">
                      <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00c896] to-[#6366f1] bg-clip-text text-transparent">
                        {stage.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="brand-headline text-2xl md:text-3xl text-white mb-4 group-hover:text-[#00ffb3] transition-colors duration-300">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="brand-body text-[#94a3b8] leading-relaxed text-base md:text-lg">
                      {stage.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${statusColors[stage.status as keyof typeof statusColors]}`}></div>
                      <div className="w-2 h-2 rounded-full bg-[#00c896] animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block">
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${statusColors[stage.status as keyof typeof statusColors]} p-1 animate-pulse`}>
                      {/* Inner Circle */}
                      <div className="w-full h-full rounded-full bg-[#0a0f1e] flex items-center justify-center">
                        {/* Center Dot */}
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${statusColors[stage.status as keyof typeof statusColors]} flex items-center justify-center text-2xl font-bold text-white`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${statusColors[stage.status as keyof typeof statusColors]} blur-xl opacity-30 -z-10`}></div>
                  </div>
                </div>

                {/* Empty Space for Balance */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-24 text-center">
          <div className="glass-card-strong max-w-4xl mx-auto">
            <p className="brand-body text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              이 여정은 이제 막 시작되었습니다.
            </p>
            <p className="brand-body text-lg md:text-xl text-[#94a3b8] leading-relaxed">
              빠른 실행과 지속적인 수익화,<br />
              <span className="text-[#00c896] font-semibold">작은 서비스들이 모여 거대한 비즈니스</span>가 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
