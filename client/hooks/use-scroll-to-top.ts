import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls to top and focuses on main heading when route changes
 * Respects user's motion preferences for accessibility
 */
export function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Scroll to top with smooth behavior (or instant if reduced motion)
    window.scrollTo({ 
      top: 0, 
      behavior: prefersReducedMotion ? 'auto' : 'smooth' 
    });

    // Focus on main heading for accessibility after a small delay
    // This helps screen readers announce the new page
    setTimeout(() => {
      const mainHeading = document.querySelector('main h1, h1');
      if (mainHeading && mainHeading instanceof HTMLElement) {
        mainHeading.focus({ preventScroll: true });
        // Remove focus outline after focusing for screen readers
        mainHeading.style.outline = 'none';
        setTimeout(() => {
          mainHeading.style.outline = '';
        }, 100);
      }
    }, 100);
  }, [location.pathname]);
}

/**
 * Utility function for programmatic scroll-to-top
 * Can be called from navigation components
 */
export function scrollToTop() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  window.scrollTo({ 
    top: 0, 
    behavior: prefersReducedMotion ? 'auto' : 'smooth' 
  });
}
