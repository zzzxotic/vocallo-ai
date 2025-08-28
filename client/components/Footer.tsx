import { Link } from 'react-router-dom';
import { scrollToTop } from '@/hooks/use-scroll-to-top';

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Vocallo AI
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI voice assistant that answers dental practice phone calls 24/7 and books patients into your schedule.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus-ring"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Get Started</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Call or text: 
                <a 
                  href="tel:765-650-9577" 
                  className="ml-1 text-primary hover:text-primary/80 transition-colors"
                >
                  765-650-9577
                </a>
              </p>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block text-sm text-primary hover:text-primary/80 transition-colors focus-ring"
              >
                Book a Demo →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground">
              © 2024 Vocallo AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
              HIPAA-compliant voice assistant technology. Patient data is protected according to healthcare privacy standards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
