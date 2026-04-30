import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;