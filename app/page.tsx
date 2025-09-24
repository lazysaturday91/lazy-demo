'use client';

import { useState } from 'react';

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [isGlitching, setIsGlitching] = useState(false);

  // Handle click explosions
  const handleScreenClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Add particles at click position
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    setClicks(prev => prev + 1);

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  // Handle title glitch effect
  const handleTitleClick = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  // Handle orb click
  const handleOrbClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const orb = e.currentTarget as HTMLElement;
    orb.classList.add('orb-clicked');
    setTimeout(() => orb.classList.remove('orb-clicked'), 600);
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative cursor-crosshair"
      onClick={handleScreenClick}
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-background"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="particles"></div>
      
      {/* Click Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="click-particle"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
      
      {/* Main Content */}
      <main className="z-10 text-center px-4 max-w-4xl">
        <div className="cyber-container">
          {/* Glowing Title */}
          <h1 
            className={`text-6xl md:text-8xl font-bold mb-6 cyber-text cursor-pointer select-none transition-all duration-300 hover:scale-105 ${isGlitching ? 'glitch-active' : ''}`}
            onClick={handleTitleClick}
          >
            LAZY<span className="text-cyan-400">SATURDAY</span>
          </h1>
          
          {/* Subtitle with typing effect */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-mono typing-text">
              Demo Site_
            </p>
          </div>
          
          {/* Info Panel */}
          <div className="cyber-panel mx-auto max-w-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm p-6 relative hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              
              <p className="text-cyan-100 font-mono text-sm mb-2">
                &gt; System Status: <span className="text-green-400 glow-text">ONLINE</span>
              </p>
              <p className="text-gray-400 font-mono text-xs">
                Clicks: {clicks} | Vercel Deploy Test Environment
              </p>
            </div>
          </div>
          
          {/* Glowing Orb */}
          <div className="mt-12">
            <div 
              className="cyber-orb mx-auto cursor-pointer" 
              onClick={handleOrbClick}
            />
          </div>
          
          {/* Instruction Text */}
          <div className="mt-8">
            <p className="text-gray-500 font-mono text-xs animate-pulse">
              Click anywhere to interact_
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
