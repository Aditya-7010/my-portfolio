import React from 'react';

export const IconFallbackHandler = (e) => {
  e.target.style.display = 'none';
  if(e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = 'block';
  }
};

export const IconJava = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
      alt="Java" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M84.4,70.9c-2.4-4-5.6-7.3-8.8-10.7c-3.1-3.3-6.2-6.5-8.5-10.2c-2.3-3.7-3.9-7.9-4.3-12.3c-0.4-4.5,0.4-9.1,2.3-13.3 l1.9-4.1l-4.1,2.1c-2.8,1.5-5.5,3.3-7.9,5.4C52.6,30,50.6,32.6,49,35.4c-1.6,2.8-2.9,5.8-3.7,8.9c-0.8,3.1-1.2,6.3-1.1,9.6 c0.1,3.2,0.7,6.4,1.8,9.4c1,3,2.4,5.9,4.2,8.6c1.7,2.7,3.8,5.2,6,7.5c2.3,2.3,4.8,4.4,7.4,6.4c2.7,2,5.5,3.8,8.4,5.4 c2.9,1.6,5.9,3,9,4.2c3.1,1.2,6.3,2.1,9.5,2.8c3.2,0.7,6.5,1.2,9.8,1.4c3.3,0.2,6.7,0.1,10-0.2L115,99l-3.9-2.5 c-3.3-2.1-6.7-4-10.3-5.5C97.2,89.5,93.4,88.4,89.5,87.6C85.5,86.8,81.5,86.3,77.4,86c-4.1-0.2-8.2-0.2-12.2,0 c-4.1,0.2-8.1,0.6-12.1,1.2c-4,0.6-7.9,1.4-11.8,2.4c-3.9,1-7.7,2.2-11.4,3.6L25,95.3l3.6-3.8c2.9-3,6-5.8,9.4-8.3 c3.4-2.5,7-4.8,10.7-6.8c3.8-2,7.7-3.7,11.8-5.1c4.1-1.4,8.3-2.5,12.5-3.3c4.2-0.8,8.6-1.3,12.9-1.5c4.4-0.2,8.8-0.1,13.2,0.3 c4.4,0.4,8.8,1,13.2,1.9C116.6,70.5,120.9,71.7,125,73L125,73c-2-2.1-4.2-4-6.6-5.7c-2.4-1.7-4.9-3.2-7.5-4.5 c-2.6-1.3-5.4-2.4-8.2-3.3C99.8,58.6,96.9,57.9,94,57.5c-2.9-0.4-5.8-0.6-8.7-0.5c-2.9,0.1-5.8,0.5-8.7,1 c-2.9,0.5-5.7,1.2-8.5,2.1c-2.8,0.9-5.5,2.1-8.1,3.4l-4.1,2.1l1.9-4.1c1.5-3.1,3.4-6,5.6-8.6c2.2-2.6,4.7-5,7.4-7 c2.7-2,5.6-3.8,8.7-5.2c3.1-1.4,6.3-2.5,9.6-3.3c3.3-0.8,6.8-1.2,10.2-1.3c3.4-0.1,6.9,0.1,10.3,0.6L115,37l-3.9-2.5 c-3-1.9-6.2-3.5-9.4-4.8C98.4,28.4,95,27.3,91.5,26.5c-3.5-0.8-7-1.3-10.6-1.5c-3.6-0.2-7.2-0.1-10.8,0.3c-3.6,0.4-7.1,1-10.6,1.9 c-3.5,0.9-6.9,2-10.2,3.3C46,31.7,42.8,33.3,39.8,35c-3,1.8-5.8,3.8-8.5,6c-2.7,2.2-5.3,4.6-7.7,7.2c-2.4,2.5-4.6,5.2-6.6,8.1 C15,59.3,13.4,62.4,12.1,65.6C10.8,68.9,9.8,72.2,9.1,75.7C8.4,79.1,8,82.7,7.9,86.2C7.8,89.8,8.1,93.4,8.7,96.9 c0.6,3.6,1.5,7.1,2.7,10.6c1.2,3.4,2.7,6.8,4.5,10L18,121l2.4-4.1c1.8-3,3.9-5.8,6.2-8.4c2.3-2.6,4.8-5,7.5-7.1 c2.7-2.1,5.6-4,8.6-5.6c3-1.6,6.2-2.9,9.5-4C45.4,90.6,48.8,89.6,52.3,88.8c3.5-0.8,7-1.3,10.6-1.5c3.6-0.2,7.2-0.2,10.8,0.1 c3.6,0.3,7.1,0.8,10.6,1.6c3.5,0.8,6.9,1.8,10.3,3c3.4,1.2,6.7,2.7,9.9,4.4L115,99l-3.9-2.5c-3.3-2.1-6.7-4-10.3-5.5 c-3.5-1.5-7.3-2.6-11.2-3.4c-3.9-0.8-7.9-1.3-12-1.6c-4.1-0.2-8.2-0.2-12.2,0c-4.1,0.2-8.1,0.6-12.1,1.2c-4,0.6-7.9,1.4-11.8,2.4 c-3.9,1-7.7,2.2-11.4,3.6L25,95.3l3.6-3.8c2.9-3,6-5.8,9.4-8.3c3.4-2.5,7-4.8,10.7-6.8c3.8-2,7.7-3.7,11.8-5.1 c4.1-1.4,8.3-2.5,12.5-3.3c4.2-0.8,8.6-1.3,12.9-1.5c4.4-0.2,8.8-0.1,13.2,0.3c4.4,0.4,8.8,1,13.2,1.9 c4.4,0.9,8.7,2.1,12.9,3.5l4.5,1.5L84.4,70.9z"/>
    </svg>
  </div>
);

export const IconPython = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
      alt="Python" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M63.9,109.8c18.5,0,17.4-4,17.4-4l0.1-11.5c0,0-17.5,1.2-24.9-3.7c-5-3.4-6-10.1-6-10.1h32c0,0,10.6,1.1,10.6-14.8V49.6 c0-15.6-14-16-14-16h-14v10.9h10.3v13.5H48.4v13.7c0,14.6,11.3,14,11.3,14h10.9v8c0,0,1.3,5.9-11.7,5.9c-14.5,0-13-5-13-5v11.2 C45.9,105,47.2,109.8,63.9,109.8z M71.9,40.1c-2.4,0-4.4-2-4.4-4.5s2-4.5,4.4-4.5s4.4,2,4.4,4.5S74.3,40.1,71.9,40.1z M63.9,18.4 c-18.5,0-17.4,4-17.4,4l-0.1,11.5c0,0,17.5-1.2,24.9,3.7c5,3.4,6,10.1,6,10.1h-32c0,0-10.6-1.1-10.6,14.8v26.1 c0,15.6,14,16,14,16h14V92.9H52.5V79.4h30.8V65.7c0-14.6-11.3-14-11.3-14H61V43.7c0,0-1.3-5.9,11.7-5.9c14.5,0,13,5,13,5V31.6 C85.7,23.3,84.4,18.4,63.9,18.4z M56.3,88c2.4,0,4.4,2,4.4,4.5s-2,4.5-4.4,4.5s-4.4-2-4.4-4.5S53.9,88,56.3,88z"/>
    </svg>
  </div>
);

export const IconCpp = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" 
      alt="C++" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M117.4,56.8h-7.1V49.6h-7.1v7.1h-7.1v7.1h7.1v7.1h7.1v-7.1h7.1V56.8z M89.6,56.8h-7.1V49.6h-7.1v7.1h-7.1v7.1h7.1v7.1h7.1v-7.1 h7.1V56.8z M57,32c-17.7,0-32,14.3-32,32s14.3,32,32,32c12.2,0,22.8-6.8,28-16.7h-11.5c-4.1,4.7-10.1,7.7-16.8,7.7 c-12.2,0-22-9.9-22-22s9.9-22,22-22c6.6,0,12.6,2.9,16.8,7.7h11.5C80,38.8,69.4,32,57,32z"/>
    </svg>
  </div>
);

export const IconReact = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
      alt="React" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M64,24.1c16.3,0,31.7,3,44.7,8.4c-7.3-6.1-17-10.6-28.1-13c1.7-0.1,3.4-0.1,5.1-0.1 c17.3,0,33.5,3.3,46.9,9.4c3.4,1.5,6.4,3.2,9.2,5C136,38,131,44.2,123,50c-11.6,8.4-27.1,13.8-44.2,15.7 c17.1,2,32.6,7.3,44.2,15.7c8,5.8,13,12,18.8,16.3c-2.8,1.8-5.9,3.5-9.2,5c-13.4,6.1-29.6,9.4-46.9,9.4 c-1.7,0-3.4,0-5.1-0.1c11.2-2.3,20.8-6.9,28.1-13c-13,5.4-28.4,8.4-44.7,8.4c-16.3,0-31.7-3-44.7-8.4c7.3,6.1,17,10.6,28.1,13 c-1.7,0.1-3.4,0.1-5.1,0.1c-17.3,0-33.5-3.3-46.9-9.4c-3.4-1.5-6.4-3.2-9.2-5c5.8-4.3,10.8-10.5,18.8-16.3 C26.3,71.2,10.8,65.8-6.3,63.9C-23.4,61.9-38.9,56.6-50.5,48.2c-8-5.8-13-12-18.8-16.3c2.8-1.8,5.9-3.5,9.2-5 c13.4-6.1,29.6-9.4,46.9-9.4c1.7,0,3.4,0,5.1,0.1c-11.2,2.3-20.8,6.9-28.1,13C-23.1,27.1-7.7,24.1,8.6,24.1 M64,48.5 c-8.6,0-15.5,6.9-15.5,15.5c0,8.6,6.9,15.5,15.5,15.5s15.5-6.9,15.5-15.5C79.5,55.4,72.6,48.5,64,48.5z"/>
    </svg>
  </div>
);

export const IconHTML = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
      alt="HTML" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M26.4,14L34,98.6L63.9,107l30-8.4l7.6-84.6H26.4z M96.1,32.7l-1,11.2h-48l-0.8-11.2H96.1z M85,61.7h-36l-0.8,12h27l-2.1,23.3 L63.9,99.5l-9.1-2.5L54.1,83h-12l0.9,20.4l20.9,5.8l20.9-5.8L88,50.5h-45l0.8-11.2H85V61.7z"/>
    </svg>
  </div>
);

export const IconJS = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
      alt="JavaScript" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M14.5,14.5h99v99h-99V14.5z M88.5,84c-3.1-2.3-5.2-4.9-6.3-7.8l-10.4,6.4c2.8,5.8,7.3,10.2,13.4,13.2 c6.1,3,13,4.5,20.6,4.5c9,0,16.2-2.1,21.5-6.4c5.3-4.3,8-9.8,8-16.5c0-4.6-1.3-8.4-4-11.4c-2.7-3-6.5-5.5-11.5-7.5 c-4.9-2-11.4-4-19.4-6c-6.1-1.5-10.6-3.3-13.4-5.3c-2.8-2-4.2-4.9-4.2-8.5c0-3.6,1.4-6.6,4.3-8.8c2.9-2.3,6.8-3.4,11.9-3.4 c5.4,0,9.9,1.3,13.4,4c3.5,2.7,6,6.3,7.5,10.8l10.8-6.1c-2.7-6.2-6.9-10.9-12.7-14.3c-5.8-3.4-12.2-5.1-19.3-5.1 c-8.5,0-15.5,2.2-20.9,6.7c-5.4,4.5-8.2,10.2-8.2,17.2c0,5,1.5,9,4.4,12.1c2.9,3.1,6.8,5.7,11.7,7.6c4.9,1.9,11.3,3.9,19.2,5.9 c6,1.5,10.4,3.4,13.2,5.5c2.8,2.2,4.1,5.2,4.1,9.2c0,4-1.6,7.2-4.8,9.7c-3.2,2.5-7.5,3.7-13,3.7C95.5,89.5,91.6,87.6,88.5,84z M40.7,59H28.9v44.9H40.7V59z M40.7,35H28.9v11.9h11.8V35z"/>
    </svg>
  </div>
);

export const IconMySQL = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" 
      alt="MySQL" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M109.1,66.8c-0.2,0.6-0.6,1-1.3,1c-0.8,0-1.4-0.6-1.7-1.4l-11-30.8H88v40h-8.1v-40h-5.2c-2.1,0-3.7,0.7-4.9,2 c-1.2,1.3-1.8,3-1.8,5.1v32.8h-8V42.7h-7v40h-8V35.6h15v5.7c1.7-4,4.7-6,8.9-6H88c2.9,0,5.2,0.8,6.8,2.4s2.4,3.9,2.4,6.9v35h7.1 L115.1,48c0.3-0.8,0.9-1.3,1.7-1.3c0.7,0,1.1,0.4,1.4,1l11.4,31.9V35.6h-8V66.8z M50.4,82.8h-8v-6.3h-0.2c-1.3,2.4-3.5,4.3-6.6,5.6 c-3.1,1.3-6.4,1.9-9.9,1.9c-4.4,0-7.8-0.9-10.4-2.8C12.7,79.2,11.4,76,11.4,72c0-3.5,0.9-6.3,2.8-8.5c1.9-2.2,4.6-3.8,8-4.9 s7.7-1.7,12.7-1.9c3.2-0.1,6-0.2,8.4-0.4v-2c0-2.3-0.7-4-2.1-5.2c-1.4-1.2-3.4-1.8-6.1-1.8c-2.8,0-5.1,0.5-6.9,1.4 c-1.8,1-3,2.4-3.7,4.3L17,50.7c1-2.9,3.1-5.2,6.1-7.1c3-1.8,6.8-2.7,11.5-2.7c5.6,0,9.9,1.3,12.8,3.9c2.9,2.6,4.4,6.2,4.4,11V82.8z M42.4,61.9c-1.8,0.2-3.9,0.3-6.1,0.5c-4.5,0.3-7.8,0.9-10.1,1.9c-2.3,1-3.5,2.7-3.5,5.1c0,1.9,0.7,3.4,2.1,4.5c1.4,1.1,3.4,1.7,6,1.7 c3.5,0,6.4-1,8.6-2.9c2.2-1.9,3.3-4.3,3.3-7.2V61.9z"/>
    </svg>
  </div>
);

export const IconCSS = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
      alt="CSS" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M26.4,14l7.6,84.6L63.9,107l30-8.4L101.6,14H26.4z M94.8,32.7l-0.8,11.2h-47L46,55.1h40.9l-2.1,23.3L63.9,84L43,78.2 l-0.9-20.4h11.2l0.8,12l21.2,5.8l21.2-5.8l1.3-14.7H33.8L32,32.7H94.8z"/>
    </svg>
  </div>
);

export const IconGit = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
      alt="Git" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M124.6,56.5L67.5,0.3C66-1.1,64.2-1.1,62.7-1.1s-3.3,0-4.8,1.4L3.4,56.5C0.5,59.3,0.5,64.1,3.4,67l57.1,56.2 C62,124.7,64.3,124.7,65.8,124.7c1.5,0,3.8,0,5.3-1.5l54.5-56.2C128.5,64.1,128.5,59.3,124.6,56.5z M60.1,99.9 c-5.6,0-10.2-4.5-10.2-10s4.5-10,10.2-10c2.8,0,5.4,1.2,7.3,3l5.5-26.3c-1.5-1.5-2.4-3.5-2.4-5.8c0-4.4,3.6-8.1,8.1-8.1 c4.4,0,8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1c-1.2,0-2.4-0.3-3.4-0.8l-5.6,26.9c1,1.1,1.6,2.5,1.6,4.1C70.3,95.4,65.7,99.9,60.1,99.9z M41,63.9c-4.4,0-8.1-3.6-8.1-8.1S36.6,47.7,41,47.7s8.1,3.6,8.1,8.1S45.4,63.9,41,63.9z M67.5,70.6c-1.5,1.5-3.6,2.3-5.7,2.3 c-2,0-4-0.7-5.5-2l-7.7-7.7c1.3-1.6,2.2-3.6,2.2-5.9c0-1,0.2-1.9,0.5-2.8l7.6,7.6c1.6,1.6,4.4,1.6,6.1,0C65.5,61.4,66,60,66,58.4 V46.6C66.8,47.1,67.8,47.4,69,47.4c2.8,0,5.4-1.2,7.3-3L67.5,70.6z"/>
    </svg>
  </div>
);

export const IconLinux = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" 
      alt="Linux" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M64,8C42.8,8,22,23,22,50c0,16.2,8.6,31.7,22,43c0.1,0.1,0.1,0.1,0.2,0.2C33.7,100,26,104,26,110c0,5.5,6.5,10,14.6,10 C46.7,120,53.2,118,64,118c10.8,0,17.3,2,23.4,2c8.1,0,14.6-4.5,14.6-10c0-6-7.7-10-18.2-16.8c0.1-0.1,0.1-0.1,0.2-0.2 C97.4,81.7,106,66.2,106,50C106,23,85.2,8,64,8z M50,44c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,44,50,44z M78,44 c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S81.3,44,78,44z M64,68c-8.8,0-16-4.5-16-10h32C80,63.5,72.8,68,64,68z"/>
    </svg>
  </div>
);

export const IconAWS = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
      alt="AWS" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M66.6,73.5c-4.1,2.5-10.7,5.5-18.1,5.5c-8.6,0-13.8-4-13.8-12.4c0-7.7,5.8-12.7,16.5-12.7c4.6,0,8.4,1.1,10.6,2V54.5 c0-4-1.3-10-10.7-10c-5,0-9.6,1.8-12.8,4.3l-3.3-8.1c3.8-2.9,10.5-5.3,17.5-5.3c14.9,0,19.2,8.8,19.2,20.6v28h-9.2L66.6,73.5z M66.4,63V59.4c-2-0.9-5-1.5-8.4-1.5c-6.1,0-8.8,2.5-8.8,6.2c0,3.7,2.3,5.9,6.7,5.9C60.2,70,64.2,67.6,66.4,63z M100.9,36.5h10.4 l13,46.9h-10.7L103,51.8h-0.2L92.2,83.4H81.8l-10-31.5h-0.2l-10,31.5H50.5l13-46.9h10.4L81.7,68h0.2L100.9,36.5z M26.4,65.6 l-6.9-29.1H8.8L21,83.4h11l7.8-23.7h0.2l7.7,23.7h11L71.1,36.5h-10.7L53.5,65.6h-0.2L45.4,41h-9.2l-7.7,24.6H26.4z M89,106.8 c-10,3.7-21,5.6-32.5,5.6c-17.6,0-34-4.5-47.5-12.4l3.1-6.8c12.3,7,27.5,11.2,43.7,11.2c11.3,0,21.8-2.1,31-5.7L89,106.8z M91.3,95 c0,0,15.1-13.6,15.1-23.1h7C113.4,85.6,91.3,95,91.3,95z"/>
    </svg>
  </div>
);

export const IconFlask = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" 
      alt="Flask" 
      className="w-full h-full object-contain absolute inset-0 z-10 filter drop-shadow-sm"
      onError={IconFallbackHandler}
    />
    <svg viewBox="0 0 128 128" className="w-full h-full hidden z-0 text-current opacity-70" fill="currentColor">
      <path d="M100.7,105.1l-25.2-46.8V33.4h5.3c2.3,0,4.1-1.8,4.1-4.1v-6.3c0-2.3-1.8-4.1-4.1-4.1H47.1c-2.3,0-4.1,1.8-4.1,4.1v6.3 c0,2.3,1.8,4.1,4.1,4.1h5.3v24.9L27.3,105.1c-1.3,2.5-1.4,5.4-0.1,7.9c1.3,2.5,3.9,4.1,6.7,4.1h60.3c2.8,0,5.4-1.6,6.7-4.1 C102.1,110.5,102.1,107.6,100.7,105.1z M52.5,56.7V33.4h22.9v23.3L89.6,83H38.4L52.5,56.7z M92.5,109H35.5l14.1-26.1h28.7L92.5,109 z"/>
    </svg>
  </div>
);