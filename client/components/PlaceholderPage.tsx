import { Layout } from './Layout';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-foreground">{title}</h1>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This page is coming soon. Continue the conversation to build out this section.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
