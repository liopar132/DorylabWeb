import React, { useEffect, useState } from 'react'

// Custom hook to track window size
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the size correctly

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

export const useTailwindBreakpoints = () => {
  const [width] = useWindowSize();

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  const isBreakpoint = (breakpoint) => {
    if (breakpoints[breakpoint] !== undefined) {
      return width < breakpoints[breakpoint];
    }
    return false;
  };

  return {
    isSmall: isBreakpoint('sm'),
    isMedium: isBreakpoint('md'),
    isLarge: isBreakpoint('lg'),
    isXLarge: isBreakpoint('xl'),
    is2XLarge: isBreakpoint('2xl'),
  };
};