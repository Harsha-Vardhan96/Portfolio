import React, { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Dynamic Smooth Cursor Soft Spotlight */}
      <div
        className="absolute rounded-full opacity-30 blur-[130px] gpu-accelerated"
        style={{
          width: '650px',
          height: '650px',
          left: `${mousePos.x - 325}px`,
          top: `${mousePos.y - 325}px`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Top Ambient Glow */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-[150px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0))'
        }}
      />

      {/* Center Soft Radial Light Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full center-radial-light opacity-60 blur-[120px] pointer-events-none" />

      {/* Film Grain Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-overlay" />

      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Radial Mask overlay to soften grid edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#070709_85%)] pointer-events-none" />
    </div>
  );
}
