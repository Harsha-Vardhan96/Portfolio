import React, { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic Cursor Soft Spotlight */}
      <div
        className="absolute rounded-full transition-transform duration-700 ease-out opacity-40 blur-[120px]"
        style={{
          width: '600px',
          height: '600px',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Top Ambient Glow */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0))'
        }}
      />

      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Radial Mask overlay to soften grid edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070709_80%)]" />
    </div>
  );
}
