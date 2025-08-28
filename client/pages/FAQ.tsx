import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Shield } from "lucide-react";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

export default function FAQ() {
  const faqs = [
    {
      question:
        "How accurate is Vocallo AI's language model for dental terminology?",
      answer:
        "Vocallo AI is specifically trained on dental terminology, procedures, and common patient inquiries. Our AI achieves 99.2% accuracy in understanding dental-specific language and can handle complex scenarios like insurance verification, procedure scheduling, and emergency triage. We continuously update our model with feedback from dental practices to improve accuracy.",
    },
    {
      question: "How does Vocallo AI handle patient privacy and HIPAA compliance?",
      answer:
        "Vocallo AI is fully HIPAA compliant with end-to-end encryption, secure data storage, and comprehensive audit trails. All patient interactions are protected by healthcare-grade security measures. We've undergone independent security audits and maintain SOC 2 Type II certification. Patient data is never used for AI training without explicit consent.",
    },
    {
      question: "What happens during dental emergencies or after-hours calls?",
      answer:
        "Vocallo AI intelligently identifies emergency situations using keywords and urgency indicators. For true emergencies, calls are immediately escalated to your designated on-call dentist or emergency contact. For urgent but non-emergency situations, patients receive immediate guidance and priority scheduling for the next available appointment.",
    },
    {
      question:
        "Does Vocallo AI support multiple languages for diverse patient populations?",
      answer:
        "Yes, Vocallo AI supports English and Spanish with native-level fluency. Our Premium plan includes bilingual capabilities that automatically detect the caller's preferred language and conduct the entire conversation accordingly. We're expanding to additional languages based on customer demand.",
    },
    {
      question: "How long does it take to set up Vocallo AI for my practice?",
      answer:
        "Most practices are up and running within 24-48 hours. Setup involves configuring your practice details, integrating with your calendar system, and customizing conversation flows. Our onboarding team provides white-glove service to ensure smooth implementation with minimal disruption to your current operations.",
    },
    {
      question:
        "Which practice management systems does Vocallo AI integrate with?",
      answer:
        "Vocallo AI integrates with popular systems including Dentrix, Eaglesoft, Open Dental, Curve Dental, and many others. We also support Google Calendar, Outlook, and other standard calendar applications. If your system isn't listed, our technical team can typically create custom integrations within 1-2 weeks.",
    },
    {
      question:
        "Can Vocallo AI handle complex scheduling requirements and provider preferences?",
      answer:
        "Absolutely. Vocallo AI learns your practice's scheduling patterns, provider specialties, procedure time requirements, and patient preferences. It can schedule routine cleanings, complex procedures, follow-ups, and even coordinate multi-appointment treatment plans while respecting provider availability and practice protocols.",
    },
    {
      question: "What if a patient needs to speak with a human staff member?",
      answer:
        "Patients can always request to speak with a human, and Vocallo AI will seamlessly transfer them to available staff. For complex situations beyond AI capabilities, the system intelligently escalates calls. All interactions are logged so your staff has complete context when they take over the conversation.",
    },
    {
      question: "How does billing work, and are there any hidden fees?",
      answer:
        "Vocallo AI uses transparent monthly billing with no setup fees, long-term contracts, or hidden charges. The Starter plan is $200/month and Premium is $299/month. This includes unlimited calls, integrations, and support. You only pay for the plan level you choose - no per-call or per-minute charges.",
    },
    {
      question: "What kind of analytics and reporting does Vocallo AI provide?",
      answer:
        "Vocallo AI provides comprehensive analytics including call volume, conversion rates, peak calling times, common patient inquiries, and booking success rates. Premium customers get advanced analytics with ROI tracking, patient satisfaction scores, and detailed performance insights to help optimize your practice operations.",
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
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get answers to common questions about Vocallo AI's AI voice assistant
            for dental practices.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here to help you understand how Vocallo AI can transform your
              practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Book a Demo */}
            <Card className="p-6 text-center hover:scale-102 transition-transform duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Book a Demo</h3>
                <p className="text-muted-foreground">
                  See Vocallo AI in action with a personalized 5-minute
                  demonstration
                </p>
                <Link to="/contact" onClick={scrollToTop}>
                  <Button className="bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white">
                    Schedule Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Call Us */}
            <Card className="p-6 text-center hover:scale-102 transition-transform duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Call Us Directly</h3>
                <p className="text-muted-foreground">
                  Speak with our team for immediate answers to your questions
                </p>
                <a href="tel:765-650-9577">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    765-650-9577
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Learn More */}
            <Card className="p-6 text-center hover:scale-102 transition-transform duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Learn More</h3>
                <p className="text-muted-foreground">
                  Explore our features and see how Vocallo AI works for practices
                  like yours
                </p>
                <Link to="/features" onClick={scrollToTop}>
                  <Button variant="outline">View Features</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
