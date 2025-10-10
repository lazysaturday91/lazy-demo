/**
 * Background Effects Components
 * Reusable background elements for visual rhythm
 */

export function GridBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="grid-background"></div>
    </div>
  );
}

export function LoopLines() {
  return (
    <div className="loop-lines">
      <div className="loop-line loop-line-h1"></div>
      <div className="loop-line loop-line-h2"></div>
      <div className="loop-line loop-line-h3"></div>
      <div className="loop-line loop-line-v1"></div>
      <div className="loop-line loop-line-v2"></div>
    </div>
  );
}

export function FloatingDots() {
  return (
    <div className="floating-dots">
      <div className="floating-dot dot-1"></div>
      <div className="floating-dot dot-2"></div>
      <div className="floating-dot dot-3"></div>
      <div className="floating-dot dot-4"></div>
      <div className="floating-dot dot-5"></div>
    </div>
  );
}

export function RoutineRings() {
  return (
    <div className="routine-rings">
      <div className="routine-ring ring-1"></div>
      <div className="routine-ring ring-2"></div>
      <div className="routine-ring ring-3"></div>
    </div>
  );
}

export function AmbientLights() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c896]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#00c896]/3 rounded-full blur-3xl"></div>
    </div>
  );
}
