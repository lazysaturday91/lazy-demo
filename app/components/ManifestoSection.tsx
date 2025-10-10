/**
 * Manifesto Section Component
 * Brand identity manifesto display
 */

import { MANIFESTO } from '../constants/brand';

export function ManifestoSection() {
  return (
    <section className="section-morning py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="manifesto-card bg-[#0a0f1e]/70 backdrop-blur-md border border-[#00c896]/20">
          <div className="mb-12">
            <div className="loop-indicator border-[#00c896] mb-6"></div>
            <h2 className="brand-headline text-3xl md:text-4xl mb-8 text-[#e2e8f0]">
              {MANIFESTO.title}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-[#cbd5e1]">
              {MANIFESTO.quote}
            </p>
            {MANIFESTO.content.map((line, index) => (
              <p key={index} className="text-xl md:text-2xl leading-relaxed text-[#cbd5e1]">
                {line}
              </p>
            ))}
            <p className="text-xl md:text-2xl leading-relaxed font-semibold text-[#e2e8f0]">
              그게 나의 <span className="text-[#00c896]">LazySaturday</span>다.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-[#00c896]/20">
            <p className="text-lg leading-relaxed text-[#94a3b8]">
              {MANIFESTO.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
