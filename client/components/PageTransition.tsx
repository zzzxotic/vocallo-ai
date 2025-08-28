import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Fade out current content
    setIsVisible(false);
    
    // After fade out completes, update content and fade in
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsVisible(true);
    }, 200); // Exit animation duration

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  // Initial load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={cn(
        'transition-all duration-300 ease-out',
        'motion-reduce:transition-none motion-reduce:duration-0',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-1.5',
        className
      )}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: isVisible ? '350ms' : '150ms',
      }}
    >
      {displayChildren}
    </div>
  );
}
