import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Phone,
  FileText,
  Calendar,
  Clock,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 via-transparent to-cyan/5" />

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Never miss another{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              patient call
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Vocallo AI answers calls, verifies intent, collects patient details,
            and books directly into your calendar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact" onClick={scrollToTop}>
              <Button
                size="lg"
                className="btn-glow bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white font-semibold px-8 py-4 text-lg"
              >
                Book a Demo
              </Button>
            </Link>
            <Link to="/features" onClick={scrollToTop}>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-medium border-2 hover:border-primary/50"
              >
                See Features
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto max-w-lg">
            <div className="glass-card rounded-3xl p-8 transform hover:scale-102 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo to-cyan rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mb-2"></div>
                  <p className="text-sm font-medium">Call answered instantly</p>
                  <p className="text-xs text-muted-foreground">
                    AI assistant active
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-secondary/50 rounded-lg p-3 text-sm text-left">
                  <p className="font-medium">
                    Collecting patient information...
                  </p>
                  <p className="text-muted-foreground">
                    ✓ Name, phone, insurance verified
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 text-sm text-left">
                  <p className="font-medium text-primary">
                    Appointment booked!
                  </p>
                  <p className="text-muted-foreground">
                    Tomorrow at 2:00 PM - Dr. Smith
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How it works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your practice's phone handling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="text-center p-8 glass-card border-0 hover:scale-102 transition-transform duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo to-cyan rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Call Answered
                </h3>
                <p className="text-muted-foreground">
                  Vocallo AI picks up every call instantly, 24/7. Professional
                  greeting with your practice's custom message.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center p-8 glass-card border-0 hover:scale-102 transition-transform duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo to-cyan rounded-2xl flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Details Captured
                </h3>
                <p className="text-muted-foreground">
                  Smart conversation flow collects patient information,
                  insurance details, and appointment preferences.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center p-8 glass-card border-0 hover:scale-102 transition-transform duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo to-cyan rounded-2xl flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Appointment Booked
                </h3>
                <p className="text-muted-foreground">
                  Direct integration with your calendar. Patients get
                  confirmation, you get organized scheduling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by dental practices nationwide
            </h3>
            <p className="text-muted-foreground">
              Join hundreds of practices that never miss a patient call
            </p>
          </div>

          {/* Practice Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-muted/50 rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm font-medium">
                  Practice {i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">
                24/7 Availability
              </h4>
              <p className="text-sm text-muted-foreground">
                Never miss calls during lunch, after hours, or weekends
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">HIPAA Compliant</h4>
              <p className="text-sm text-muted-foreground">
                Healthcare-grade security for all patient interactions
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">
                Professional Support
              </h4>
              <p className="text-sm text-muted-foreground">
                Dedicated team helps optimize your call handling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a 5-minute demo and see how Vocallo AI can help your practice
            capture every opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" onClick={scrollToTop}>
              <Button
                size="lg"
                className="btn-glow bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white font-semibold px-8 py-4 text-lg"
              >
                Book a Demo
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Or call{" "}
              <a
                href="tel:765-650-9577"
                className="text-primary hover:text-primary/80 font-medium"
              >
                765-650-9577
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
