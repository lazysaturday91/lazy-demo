/**
 * Stats Section Component
 * Display key metrics and achievements
 */

interface StatItemProps {
  number: string;
  label: string;
  description: string;
}

function StatItem({ number, label, description }: StatItemProps) {
  return (
    <div className="text-center group relative">
      <div className="absolute inset-0 bg-[#00c896]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative p-6">
        <div className="stat-number text-[#00c896] group-hover:scale-110 transition-transform">
          {number}
        </div>
        <div className="stat-label text-[#cbd5e1]">{label}</div>
        <div className="mt-3 text-xs text-[#64748b]">{description}</div>
      </div>
    </div>
  );
}

const stats: StatItemProps[] = [
  { number: '2h', label: 'Daily Focus', description: '매일 2시간 집중' },
  { number: '100%', label: 'Automated', description: '완전 자동화' },
  { number: '∞', label: 'Loop Count', description: '무한 반복' },
  { number: '1', label: 'Saturday', description: '자유로운 주말' },
];

export function StatsSection() {
  return (
    <section className="section-bright py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#00c896]/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 border border-[#00c896]/10 rounded-full"
          style={{ animation: 'pulse 3s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#00c896]/15 rounded-full"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="brand-headline text-3xl md:text-4xl text-[#e2e8f0] mb-4">
            By The Numbers
          </h2>
          <p className="brand-body text-[#94a3b8]">작은 습관이 만드는 큰 변화</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
