import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Ambient wavy gradient animation for hero sections
export function WavyGradientBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="wavy-gradient-1 absolute -top-1/2 -left-1/2 w-full h-full opacity-30" />
      <div className="wavy-gradient-2 absolute -bottom-1/2 -right-1/2 w-full h-full opacity-20" />
    </div>
  );
}

// Phone with voice waves animation
export function PhoneVoiceWaves({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="relative">
        {/* Phone icon base */}
        <div className="w-8 h-12 bg-gradient-to-b from-indigo to-cyan rounded-lg flex items-center justify-center">
          <div className="w-4 h-6 bg-white/20 rounded-sm" />
        </div>
        
        {/* Voice waves */}
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
          <div className="voice-wave voice-wave-1" />
          <div className="voice-wave voice-wave-2" />
          <div className="voice-wave voice-wave-3" />
        </div>
      </div>
    </div>
  );
}

// Calendar checkmark micro-animation
export function CalendarCheckmark({ className, isVisible = true }: { className?: string; isVisible?: boolean }) {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowCheck(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className={cn("relative w-8 h-8", className)}>
      {/* Calendar base */}
      <div className="w-full h-full bg-gradient-to-br from-indigo to-cyan rounded-md flex items-center justify-center">
        <div className="w-4 h-4 bg-white/20 rounded-sm" />
      </div>
      
      {/* Animated checkmark */}
      <div className={cn(
        "absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center transition-all duration-500",
        showCheck ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}>
        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
}

// Subtle moon shimmer for after-hours
export function MoonShimmer({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-6 h-6", className)}>
      {/* Moon base */}
      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 rounded-full relative overflow-hidden">
        {/* Shimmer effect */}
        <div className="moon-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </div>
  );
}

// Gentle chat bubbles animation
export function ChatBubbles({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-12 h-8", className)}>
      <div className="chat-bubble chat-bubble-1 absolute bottom-0 left-0" />
      <div className="chat-bubble chat-bubble-2 absolute bottom-1 left-3" />
      <div className="chat-bubble chat-bubble-3 absolute bottom-0 right-0" />
    </div>
  );
}

// Lazy loading wrapper with Intersection Observer
export function LazyAnimationWrapper({ 
  children, 
  className,
  threshold = 0.1 
}: { 
  children: React.ReactNode; 
  className?: string;
  threshold?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element, threshold]);

  return (
    <div ref={setElement} className={className}>
      {isVisible && children}
    </div>
  );
}
