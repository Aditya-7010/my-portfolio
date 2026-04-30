import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .hover-target').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, .hover-target').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div 
        className={`hidden lg:flex fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[100] transition-all duration-100 ease-out items-center justify-center backdrop-blur-[1px] mix-blend-multiply
          ${isHovering ? 'scale-[2.5] bg-indigo-500/10 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)]' : 'scale-100 border-indigo-600/60'}`}
        style={{ transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)` }}
      >
        {isHovering && <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.5)]"></div>}
      </div>
      <div 
        className={`hidden lg:block fixed top-0 left-0 w-2 h-2 bg-teal-500 rounded-full pointer-events-none z-[101] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(20,184,166,0.5)]
          ${isHovering ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
      ></div>
    </>
  );
};

export default CustomCursor;