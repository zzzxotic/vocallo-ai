import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Phone,
  FileText,
  Calendar,
  MessageSquare,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Globe,
  Headphones,
} from "lucide-react";
import { useState } from "react";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Phone,
      title: "24/7 Call Coverage & Smart Triage",
      description:
        "Never miss a call again with intelligent routing and instant response",
      details: [
        "Instant call pickup, even during busy periods",
        "Smart triage determines urgency and routes appropriately",
        "Custom greetings that match your practice's voice",
        "Emergency call escalation to on-call dentist",
        "Multi-language support for diverse patient base",
      ],
    },
    {
      icon: FileText,
      title: "Insurance & Intake Information Capture",
      description:
        "Comprehensive patient information collection with intelligent verification",
      details: [
        "Insurance verification in real-time",
        "Medical history and allergy documentation",
        "Preferred appointment times and dentist selection",
        "Contact information updates and validation",
        "Reason for visit classification and priority scoring",
      ],
    },
    {
      icon: Calendar,
      title: "Instant Calendar Booking",
      description: "Direct integration with your practice management system",
      details: [
        "Real-time calendar availability checking",
        "Automatic appointment confirmation emails/texts",
        "Buffer time management for different procedures",
        "Waitlist management for cancelled appointments",
        "Multi-location scheduling for practice groups",
      ],
    },
    {
      icon: MessageSquare,
      title: "After-Hours Voicemail to Text",
      description: "Transform voicemails into actionable text summaries",
      details: [
        "Instant voicemail transcription with 99% accuracy",
        "Priority flagging for urgent messages",
        "Automatic follow-up scheduling for next business day",
        "Integration with practice management notifications",
        "Searchable message history and patient context",
      ],
    },
    {
      icon: Shield,
      title: "HIPAA-Friendly Data Handling",
      description: "Healthcare-grade security for all patient interactions",
      details: [
        "End-to-end encryption for all communications",
        "Compliant data storage with audit trails",
        "Role-based access controls for staff",
        "Automatic data retention policy enforcement",
        "Regular security audits and compliance reporting",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
            tabIndex={-1}
          >
            Powerful features for{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              modern practices
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Everything your dental practice needs to provide exceptional patient
            experience and capture every opportunity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "ring-2 ring-primary shadow-lg scale-105"
                        : "hover:shadow-md hover:scale-102"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-gradient-to-r from-indigo to-cyan text-white"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {feature.title}
                          </CardTitle>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    {isActive && (
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Feature Mockup */}
            <div className="sticky top-24">
              <Card className="p-8 glass-card border-0">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Live Demo</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo to-cyan rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Incoming Call</p>
                        <p className="text-sm text-muted-foreground">
                          Patient: Sarah Johnson
                        </p>
                      </div>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                      <p className="text-sm">
                        <strong>Vocallo AI:</strong> "Hi, thank you for calling
                        Smile Dental. How can I help you today?"
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Patient:</strong> "I'd like to schedule a
                        cleaning appointment."
                      </p>
                      <p className="text-sm">
                        <strong>Vocallo AI:</strong> "I'd be happy to help you
                        schedule that. May I get your name and date of birth?"
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Status</p>
                        <p className="text-green-600">✓ Patient verified</p>
                      </div>
                      <div>
                        <p className="font-medium">Insurance</p>
                        <p className="text-green-600">
                          ✓ Delta Dental confirmed
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="font-medium text-primary">
                        Appointment Scheduled!
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Thursday, Dec 14 at 10:00 AM with Dr. Smith
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your practice size and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative p-8 hover:scale-102 transition-transform duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $200
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  Perfect for single-location practices
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "24/7 call answering",
                    "Appointment booking",
                    "Google Calendar integration",
                    "Voicemail-to-text transcription",
                    "Basic analytics and reporting",
                    "Email support",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" onClick={scrollToTop} className="block pt-6">
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative p-8 border-primary shadow-lg hover:scale-102 transition-transform duration-300">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo to-cyan text-white">
                Most Popular
              </Badge>

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $299
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">
                  For growing practices with multiple locations
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-primary">
                  Everything in Starter, plus:
                </p>
                <ul className="space-y-3">
                  {[
                    "Multi-location call routing",
                    "Bilingual EN/ES support",
                    "Custom intake forms",
                    "FAQ knowledge base",
                    "Priority phone support",
                    "Advanced analytics dashboard",
                    "API integrations",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" onClick={scrollToTop} className="block pt-6">
                  <Button className="w-full bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Money-back guarantee */}
          <div className="text-center mt-12">
            <Badge variant="outline" className="px-6 py-2 text-lg">
              <Star className="w-4 h-4 mr-2" />
              30-day money-back guarantee
            </Badge>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              Try Vocallo AI risk-free. If you're not completely satisfied within
              30 days, we'll refund your money, no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of dental practices that trust Vocallo AI to handle their
            patient calls.
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
