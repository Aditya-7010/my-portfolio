import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, delay = 0, className = "", threshold = 0.1 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // 1. Store the ref value in a local variable for the cleanup function
    // This prevents the "ref already null" error when unmounting
    const currentElement = domRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // 2. Optimization: Stop observing once it's visible
          // There's no need to keep tracking if you only want it to fade in once
          observer.unobserve(currentElement);
        }
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      // 3. Clean up the observer properly using the local variable
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]); // 4. Added threshold to dependency array for flexibility

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out will-change-transform 
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} 
        ${className}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;