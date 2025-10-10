/**
 * Advanced Background Effects
 * Modern UI background animations with particles, blobs, and gradients
 */

'use client';

export function AnimatedGradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {/* Gradient Orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.3) 0%, transparent 70%)',
          top: '-20%',
          left: '-10%',
          animation: 'blob-morph-1 25s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(100, 100, 255, 0.25) 0%, transparent 70%)',
          top: '20%',
          right: '-10%',
          animation: 'blob-morph-2 30s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 100, 200, 0.2) 0%, transparent 70%)',
          bottom: '-20%',
          left: '30%',
          animation: 'blob-morph-3 35s ease-in-out infinite',
        }}
      />
    </div>
  );
}

export function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 20,
    duration: 15 + Math.random() * 15,
    tx: (Math.random() - 0.5) * 200,
    ty: -200 - Math.random() * 200,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#00c896] opacity-0"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animation: `particle-float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            ['--tx' as string]: `${particle.tx}px`,
            ['--ty' as string]: `${particle.ty}px`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(0, 200, 150, 0.5)`,
          }}
        />
      ))}
    </div>
  );
}

export function MorphingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Large morphing shape 1 */}
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#00c896]/30 to-[#6366f1]/30"
        style={{
          top: '10%',
          right: '15%',
          filter: 'blur(60px)',
          animation: 'blob-morph-1 20s ease-in-out infinite',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
      />

      {/* Large morphing shape 2 */}
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#8b5cf6]/20 to-[#ec4899]/20"
        style={{
          bottom: '10%',
          left: '10%',
          filter: 'blur(70px)',
          animation: 'blob-morph-2 25s ease-in-out infinite',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />

      {/* Medium morphing shape */}
      <div
        className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#06b6d4]/25 to-[#3b82f6]/25"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(50px)',
          animation: 'blob-morph-3 30s ease-in-out infinite',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
      />
    </div>
  );
}

export function GlowOrbs() {
  return (
    <>
      {/* Glowing orb 1 */}
      <div className="absolute w-32 h-32 rounded-full opacity-50 pointer-events-none"
        style={{
          top: '20%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.8), transparent)',
          filter: 'blur(40px)',
          animation: 'float-3d 8s ease-in-out infinite',
        }}
      />

      {/* Glowing orb 2 */}
      <div className="absolute w-24 h-24 rounded-full opacity-40 pointer-events-none"
        style={{
          top: '60%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.7), transparent)',
          filter: 'blur(35px)',
          animation: 'float-3d 10s ease-in-out infinite 2s',
        }}
      />

      {/* Glowing orb 3 */}
      <div className="absolute w-20 h-20 rounded-full opacity-45 pointer-events-none"
        style={{
          bottom: '25%',
          left: '70%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6), transparent)',
          filter: 'blur(30px)',
          animation: 'float-3d 12s ease-in-out infinite 4s',
        }}
      />
    </>
  );
}

export function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0, 200, 150, 0.3)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function PulseRings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[#00c896]"
          style={{
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            marginTop: '-150px',
            marginLeft: '-150px',
            animation: `pulse-ring 4s ease-out infinite ${i * 1.3}s`,
          }}
        />
      ))}
    </div>
  );
}

export function ShimmerLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Horizontal shimmer lines */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-px w-full"
          style={{
            top: `${20 + i * 30}%`,
            background: 'linear-gradient(90deg, transparent, rgba(0, 200, 150, 0.5), transparent)',
            animation: `shimmer 3s linear infinite ${i * 0.5}s`,
          }}
        />
      ))}

      {/* Vertical shimmer lines */}
      {[...Array(2)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px h-full"
          style={{
            left: `${30 + i * 40}%`,
            background: 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.4), transparent)',
            animation: `shimmer 4s linear infinite ${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}
