import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);

  // Position tracking
  const mouse = useRef({ x: 0, y: 0 });
  const delayedOuter = useRef({ x: 0, y: 0 });
  const delayedInner = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smoothing factors (0.15 is buttery, 0.40 is snappier)
      const easeOuter = 0.15; 
      const easeInner = 0.40; 

      // 1. Calculate the smoothed position
      delayedOuter.current.x += (mouse.current.x - delayedOuter.current.x) * easeOuter;
      delayedOuter.current.y += (mouse.current.y - delayedOuter.current.y) * easeOuter;
      
      delayedInner.current.x += (mouse.current.x - delayedInner.current.x) * easeInner;
      delayedInner.current.y += (mouse.current.y - delayedInner.current.y) * easeInner;

      // 2. Apply position only (no scale logic)
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate(${delayedOuter.current.x - 16}px, ${delayedOuter.current.y - 16}px)`;
      }
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `translate(${delayedInner.current.x - 4}px, ${delayedInner.current.y - 4}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-target')) setIsHovering(true);
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .hover-target')) setIsHovering(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer Ring - Stays 8x8 (32px) */}
      <div 
        ref={cursorOuterRef}
        className={`hidden lg:flex fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[100] items-center justify-center backdrop-blur-[1px] mix-blend-multiply transition-colors duration-300
          ${isHovering ? 'border-teal-500 bg-teal-500/5' : 'border-indigo-600/60'}`}
      />
      
      {/* Inner Dot - Stays 2x2 (8px) */}
      <div 
        ref={cursorInnerRef}
        className={`hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[101] shadow-[0_0_10px_rgba(20,184,166,0.5)] transition-colors duration-300
          ${isHovering ? 'bg-teal-400' : 'bg-indigo-500'}`}
      />
    </>
  );
};

export default CustomCursor;