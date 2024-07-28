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
    xs: 0,    // Optional: Tailwind does not have an xs by default
    sm: 600,  // Matches MUI's sm breakpoint
    md: 900,  // Matches MUI's md breakpoint
    lg: 1200, // Matches MUI's lg breakpoint
    xl: 1536, // Matches MUI's xl breakpoint
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