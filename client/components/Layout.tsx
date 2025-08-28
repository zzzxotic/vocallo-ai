import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background wavy-bg relative">
      <Header />
      <PageTransition>
        <main className={`pt-16 ${className}`} role="main">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
