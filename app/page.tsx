'use client';

export default function Home() {

  const philosophies = [
    {
      number: "01",
      title: "System over Hustle",
      description: "바쁨보다 구조가 중요하다. 루틴이 의지를 이긴다."
    },
    {
      number: "02",
      title: "Small is Sustainable",
      description: "작을수록 오래 간다. 거대한 목표보다 작은 루프."
    },
    {
      number: "03",
      title: "Automation is Art",
      description: "자동화는 게으름이 아니라 철학이다."
    },
    {
      number: "04",
      title: "Freedom by Routine",
      description: "자유는 반복에서 온다. 반복이 시스템을 만든다."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Midnight */}
        <section className="section-midnight min-h-screen flex items-center justify-center px-6 md:px-12 relative">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid-background"></div>
          </div>

          {/* Loop Lines */}
          <div className="loop-lines">
            <div className="loop-line loop-line-h1"></div>
            <div className="loop-line loop-line-h2"></div>
            <div className="loop-line loop-line-h3"></div>
            <div className="loop-line loop-line-v1"></div>
            <div className="loop-line loop-line-v2"></div>
          </div>

          {/* Floating Accent Dots */}
          <div className="floating-dots">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
            <div className="floating-dot dot-4"></div>
            <div className="floating-dot dot-5"></div>
          </div>

          {/* Routine Pulse Rings */}
          <div className="routine-rings">
            <div className="routine-ring ring-1"></div>
            <div className="routine-ring ring-2"></div>
            <div className="routine-ring ring-3"></div>
          </div>
          <div className="max-w-5xl w-full hero-container relative z-10">
            {/* Logo */}
            <div className="mb-16">
              <h1 className="brand-logo text-5xl md:text-7xl lg:text-8xl text-[#e2e8f0] mb-4">
                <span className="logo-text inline-block">LAZY</span>
                <span className="logo-text inline-block text-[#00c896]">SATURDAY</span>
              </h1>
              <p className="brand-code text-sm md:text-base text-[#94a3b8] ml-1">
                자동화로 주말을 되찾는 개발자.
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
              <span className="brand-tag">#BuildOnce</span>
              <span className="brand-tag">#EarnForever</span>
              <span className="brand-tag">#SurviveBySystem</span>
              <span className="brand-tag">#AI</span>
              <span className="brand-tag">#Automation</span>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Dawn */}
        <section className="section-dawn py-24 px-6 md:px-12 relative">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="brand-headline text-4xl md:text-5xl text-[#e2e8f0] mb-4">
                Philosophy
              </h2>
              <p className="brand-body text-lg text-[#cbd5e1]">
                LazySaturday를 지탱하는 4가지 철학적 기둥
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {philosophies.map((phil, index) => (
                <div
                  key={index}
                  className="philosophy-block cursor-pointer bg-[#0a0f1e]/60 backdrop-blur-sm border-l-4 border-[#00c896] hover:bg-[#1a2740]/80 transition-all duration-300"
                >
                  <div className="philosophy-number bg-[#00c896] text-[#0a0f1e]">{phil.number}</div>
                  <h3 className="brand-headline text-2xl text-[#e2e8f0] mb-3">
                    {phil.title}
                  </h3>
                  <p className="brand-body text-[#94a3b8] leading-relaxed">
                    {phil.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto Section - Morning */}
        <section className="section-morning py-24 px-6 md:px-12 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="manifesto-card bg-[#0a0f1e]/70 backdrop-blur-md border border-[#00c896]/20">
              <div className="mb-12">
                <div className="loop-indicator border-[#00c896] mb-6"></div>
                <h2 className="brand-headline text-3xl md:text-4xl mb-8 text-[#e2e8f0]">
                  Identity Manifesto
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-[#cbd5e1]">
                  나는 게으른 토요일을 위해 일한다.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-[#cbd5e1]">
                  작은 시스템 하나가 나의 하루를 바꾼다.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-[#cbd5e1]">
                  꾸준히 만들고, 자동화하며, 천천히 살아간다.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed font-semibold text-[#e2e8f0]">
                  그게 나의 <span className="text-[#00c896]">LazySaturday</span>다.
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-[#00c896]/20">
                <p className="text-lg leading-relaxed text-[#94a3b8]">
                  LazySaturday는 개발자의 실험정신과 인간적인 여유가 공존하는 브랜드다.<br />
                  나는 완벽한 것을 만들지 않는다. 대신, 꾸준히 만들어 남긴다.<br />
                  그 꾸준함이 곧 나의 브랜딩이자 생존 방식이다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Bright Morning */}
        <section className="section-bright py-24 px-6 md:px-12 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 border border-[#00c896]/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#00c896]/10 rounded-full" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#00c896]/15 rounded-full" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-12 text-center">
              <h2 className="brand-headline text-3xl md:text-4xl text-[#e2e8f0] mb-4">
                By The Numbers
              </h2>
              <p className="brand-body text-[#94a3b8]">
                작은 습관이 만드는 큰 변화
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-[#00c896]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6">
                  <div className="stat-number text-[#00c896] group-hover:scale-110 transition-transform">2h</div>
                  <div className="stat-label text-[#cbd5e1]">Daily Focus</div>
                  <div className="mt-3 text-xs text-[#64748b]">매일 2시간 집중</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-[#00c896]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6">
                  <div className="stat-number text-[#00c896] group-hover:scale-110 transition-transform">100%</div>
                  <div className="stat-label text-[#cbd5e1]">Automated</div>
                  <div className="mt-3 text-xs text-[#64748b]">완전 자동화</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-[#00c896]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6">
                  <div className="stat-number text-[#00c896] group-hover:scale-110 transition-transform">∞</div>
                  <div className="stat-label text-[#cbd5e1]">Loop Count</div>
                  <div className="mt-3 text-xs text-[#64748b]">무한 반복</div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-[#00c896]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6">
                  <div className="stat-number text-[#00c896] group-hover:scale-110 transition-transform">1</div>
                  <div className="stat-label text-[#cbd5e1]">Saturday</div>
                  <div className="mt-3 text-xs text-[#64748b]">자유로운 주말</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="section-quote py-32 px-6 md:px-12 relative overflow-hidden">
          {/* Ambient Light Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c896]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#00c896]/3 rounded-full blur-3xl"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute top-20 left-[10%] w-1 h-1 bg-[#00c896] rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
            <div className="absolute top-40 right-[15%] w-1 h-1 bg-[#00c896] rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
            <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-[#00c896] rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
            <div className="absolute top-1/2 right-[25%] w-1 h-1 bg-[#00c896] rounded-full animate-float" style={{ animationDelay: '6s', animationDuration: '9s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Quote Header */}
            <div className="text-center mb-24">
              <div className="relative inline-block mb-12">
                <div className="absolute inset-0 bg-[#00c896]/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-[#00c896]/20 rounded-full"></div>
                  <div className="absolute inset-2 border border-[#00c896]/40 rounded-full"></div>
                  <svg className="w-12 h-12 text-[#00c896] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <p className="brand-code text-sm text-[#00c896] tracking-wider">
                  Routine is freedom
                </p>
                <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#00c896]/50 to-[#00c896]"></div>
              </div>
            </div>

            {/* Principle Cards - Enhanced */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Focus Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00c896]/0 via-[#00c896]/20 to-[#00c896]/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-[#0a0f1e]/60 backdrop-blur-md rounded-xl p-8 border border-[#00c896]/10 group-hover:border-[#00c896]/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#00c896]/5 rounded-full blur-2xl group-hover:bg-[#00c896]/10 transition-all duration-500"></div>
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-[#00c896]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00c896]/20 to-transparent rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-[#0a0f1e]/80 backdrop-blur-sm rounded-2xl border border-[#00c896]/30"></div>
                        <svg className="relative z-10 w-10 h-10 text-[#00c896] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h4 className="brand-headline text-2xl text-[#e2e8f0] mb-4 group-hover:text-white transition-colors duration-300">Focus</h4>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00c896]/50 to-transparent mb-4"></div>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">
                      집중된 시간이<br />산만한 하루를 이긴다
                    </p>
                    
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#00c896] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Repeat Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00c896]/0 via-[#00c896]/20 to-[#00c896]/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-[#0a0f1e]/60 backdrop-blur-md rounded-xl p-8 border border-[#00c896]/10 group-hover:border-[#00c896]/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#00c896]/5 rounded-full blur-2xl group-hover:bg-[#00c896]/10 transition-all duration-500"></div>
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-[#00c896]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00c896]/20 to-transparent rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-[#0a0f1e]/80 backdrop-blur-sm rounded-full border border-[#00c896]/30"></div>
                        <svg className="relative z-10 w-10 h-10 text-[#00c896] group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    
                    <h4 className="brand-headline text-2xl text-[#e2e8f0] mb-4 group-hover:text-white transition-colors duration-300">Repeat</h4>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00c896]/50 to-transparent mb-4"></div>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">
                      반복이 시스템이 되고<br />자유가 된다
                    </p>
                    
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#00c896] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Grow Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00c896]/0 via-[#00c896]/20 to-[#00c896]/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-[#0a0f1e]/60 backdrop-blur-md rounded-xl p-8 border border-[#00c896]/10 group-hover:border-[#00c896]/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#00c896]/5 rounded-full blur-2xl group-hover:bg-[#00c896]/10 transition-all duration-500"></div>
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-[#00c896]/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00c896]/20 to-transparent rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-[#0a0f1e]/80 backdrop-blur-sm rotate-45 border border-[#00c896]/30"></div>
                        <svg className="relative z-10 w-10 h-10 text-[#00c896] group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    
                    <h4 className="brand-headline text-2xl text-[#e2e8f0] mb-4 group-hover:text-white transition-colors duration-300">Grow</h4>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00c896]/50 to-transparent mb-4"></div>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">
                      작은 변화가 쌓여<br />큰 성장이 된다
                    </p>
                    
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#00c896] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 md:px-12 bg-[#0a0f1e] text-[#e2e8f0] border-t border-[#00c896]/20 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 border border-[#00c896] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 border border-[#00c896] rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#00c896] rounded-full animate-pulse"></div>
                  <h3 className="brand-headline text-xl text-[#00c896]">LazySaturday</h3>
                </div>
                <p className="brand-body text-sm text-[#94a3b8] leading-relaxed mb-4">
                  작게 만들어, 꾸준히 배포하며,<br />천천히 사는 삶.
                </p>
                <div className="flex gap-2">
                  <span className="inline-block w-8 h-1 bg-[#00c896] rounded-full"></span>
                  <span className="inline-block w-4 h-1 bg-[#00c896]/50 rounded-full"></span>
                  <span className="inline-block w-2 h-1 bg-[#00c896]/30 rounded-full"></span>
                </div>
              </div>
              <div>
                <h4 className="brand-body font-semibold text-sm uppercase tracking-wider mb-4 text-[#cbd5e1] flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#00c896]"></span>
                  Links
                </h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    About
                  </a></li>
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    Projects
                  </a></li>
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    Blog
                  </a></li>
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    Contact
                  </a></li>
                </ul>
              </div>
              <div>
                <h4 className="brand-body font-semibold text-sm uppercase tracking-wider mb-4 text-[#cbd5e1] flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#00c896]"></span>
                  Connect
                </h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    Twitter
                  </a></li>
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    GitHub
                  </a></li>
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    LinkedIn
                  </a></li>
                  <li><a href="#" className="hover-accent text-[#94a3b8] hover:text-[#00c896] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-[#00c896] transition-all"></span>
                    Email
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-[#00c896]/10 text-center">
              <p className="brand-code text-xs text-[#64748b]">
                © 2025 LazySaturday. Build once. Earn forever.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
