/**
 * Quote Section Component
 * Inspirational quote and principle cards
 */

import React from 'react';
import { AmbientLights } from './BackgroundEffects';

interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconAnimation?: string;
}

function PrincipleCard({ icon, title, description, iconAnimation = '' }: PrincipleCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00c896]/0 via-[#00c896]/20 to-[#00c896]/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      <div className="relative bg-[#0a0f1e]/60 backdrop-blur-md rounded-xl p-8 border border-[#00c896]/10 group-hover:border-[#00c896]/30 transition-all duration-500">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#00c896]/5 rounded-full blur-2xl group-hover:bg-[#00c896]/10 transition-all duration-500"></div>

        <div className="relative flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-[#00c896]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className={`absolute inset-0 bg-gradient-to-br from-[#00c896]/20 to-transparent rounded-2xl rotate-6 ${iconAnimation} transition-transform duration-500`}></div>
              <div className="absolute inset-0 bg-[#0a0f1e]/80 backdrop-blur-sm rounded-2xl border border-[#00c896]/30"></div>
              {icon}
            </div>
          </div>

          <h4 className="brand-headline text-2xl text-[#e2e8f0] mb-4 group-hover:text-white transition-colors duration-300">
            {title}
          </h4>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00c896]/50 to-transparent mb-4"></div>
          <p className="text-sm text-[#94a3b8] leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#00c896] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}

const principles: PrincipleCardProps[] = [
  {
    icon: (
      <svg className="relative z-10 w-10 h-10 text-[#00c896] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Focus',
    description: '집중된 시간이<br />산만한 하루를 이긴다',
    iconAnimation: 'group-hover:rotate-12',
  },
  {
    icon: (
      <svg className="relative z-10 w-10 h-10 text-[#00c896] group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Repeat',
    description: '반복이 시스템이 되고<br />자유가 된다',
    iconAnimation: 'group-hover:scale-110',
  },
  {
    icon: (
      <svg className="relative z-10 w-10 h-10 text-[#00c896] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Grow',
    description: '작은 변화가 쌓여<br />큰 성장이 된다',
    iconAnimation: 'group-hover:rotate-90',
  },
];

export function QuoteSection() {
  return (
    <section className="section-quote py-32 px-6 md:px-12 relative overflow-hidden">
      <AmbientLights />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {[
          { top: '20', left: '10%', delay: '0s', duration: '8s' },
          { top: '40', left: 'auto', right: '15%', delay: '2s', duration: '10s' },
          { top: 'auto', bottom: '32', left: '20%', delay: '4s', duration: '12s' },
          { top: '50%', left: 'auto', right: '25%', delay: '6s', duration: '9s' },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00c896] rounded-full animate-float"
            style={{
              top: particle.top !== 'auto' ? `${particle.top}px` : 'auto',
              bottom: particle.bottom ? `${particle.bottom}px` : 'auto',
              left: particle.left !== 'auto' ? particle.left : 'auto',
              right: particle.right,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Quote Header */}
        <div className="text-center mb-24">
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-[#00c896]/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-[#00c896]/20 rounded-full"></div>
              <div className="absolute inset-2 border border-[#00c896]/40 rounded-full"></div>
              <svg
                className="w-12 h-12 text-[#00c896] relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <blockquote className="brand-quote text-white text-center px-0 max-w-4xl mx-auto mb-8 relative">
            <span className="text-[#00c896]/30 text-6xl absolute -top-4 -left-4">&ldquo;</span>
            Two hours a day can change your life.
            <span className="text-[#00c896]/30 text-6xl absolute -bottom-8 -right-4">&rdquo;</span>
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00c896]/50 to-[#00c896]"></div>
            <p className="brand-code text-sm text-[#00c896] tracking-wider">Routine is freedom</p>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#00c896]/50 to-[#00c896]"></div>
          </div>
        </div>

        {/* Principle Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <PrincipleCard key={principle.title} {...principle} />
          ))}
        </div>
      </div>
    </section>
  );
}
