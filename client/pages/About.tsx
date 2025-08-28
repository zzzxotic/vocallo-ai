import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Shield, Zap, Phone, Award } from "lucide-react";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
            tabIndex={-1}
          >
            About{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              Vocallo AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're on a mission to help dental practices never miss another
            patient call with AI-powered voice assistance.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every day, dental practices lose potential patients due to
                missed calls, busy phone lines, and after-hours inquiries. We
                believe that every person seeking dental care deserves
                immediate, professional attention - regardless of when they
                call.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vocallo AI was born from the understanding that modern dental
                practices need more than just answering services. They need
                intelligent, HIPAA-compliant AI that can handle complex patient
                interactions, verify insurance, and seamlessly integrate with
                existing practice management systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" onClick={scrollToTop}>
                  <Button className="bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white">
                    See How We Help
                  </Button>
                </Link>
                <Link to="/features" onClick={scrollToTop}>
                  <Button variant="outline">Explore Features</Button>
                </Link>
              </div>
            </div>

            {/* Mission Image Placeholder */}
            <Card className="p-8 glass-card border-0">
              <CardContent className="space-y-6">
                <div className="w-full h-64 bg-gradient-to-br from-indigo/10 to-cyan/10 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo to-cyan rounded-2xl flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-muted-foreground">
                      Friendly dental office reception
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Dental Practices */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why we focus on dental practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dental practices have unique challenges that require specialized
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">High Call Volume</h3>
                <p className="text-muted-foreground">
                  Dental practices receive numerous calls daily for
                  appointments, emergencies, and inquiries that require
                  immediate, professional attention.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">HIPAA Compliance</h3>
                <p className="text-muted-foreground">
                  Healthcare privacy requirements demand specialized technology
                  and processes that protect patient information at every
                  touchpoint.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Complex Scheduling</h3>
                <p className="text-muted-foreground">
                  Different appointment types, provider preferences, and
                  insurance considerations require intelligent routing and
                  booking capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Patient-First Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Every feature we build starts with one question: "How does
                    this improve the patient experience?"
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Privacy & Security
                  </h3>
                  <p className="text-muted-foreground">
                    Healthcare data is sacred. We implement the highest security
                    standards to protect patient information.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Practice Partnership
                  </h3>
                  <p className="text-muted-foreground">
                    We're not just a vendor - we're a partner invested in your
                    practice's growth and success.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Continuous Innovation
                  </h3>
                  <p className="text-muted-foreground">
                    We constantly evolve our AI to handle new scenarios and
                    improve patient interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing community of dental practices that trust Vocallo AI to
            handle their patient calls.
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
