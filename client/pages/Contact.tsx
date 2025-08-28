import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

interface FormData {
  fullName: string;
  practiceName: string;
  email: string;
  phone: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  practiceName?: string;
  email?: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    practiceName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.practiceName.trim()) {
      newErrors.practiceName = "Practice name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Demo request submitted!",
        description:
          "We'll contact you within 24 hours to schedule your personalized demo.",
      });

      // Reset form
      setFormData({
        fullName: "",
        practiceName: "",
        email: "",
        phone: "",
        notes: "",
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 via-transparent to-cyan/5" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
            tabIndex={-1}
          >
            Book a{" "}
            <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
              5-minute demo
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            See how Vocallo AI can transform your dental practice's phone handling
            and help you capture every patient opportunity.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-4">Schedule Your Demo</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours
                  to schedule your personalized demo.
                </p>
              </CardHeader>

              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      placeholder="Dr. Jane Smith"
                      className={errors.fullName ? "border-destructive" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Practice Name */}
                  <div className="space-y-2">
                    <Label htmlFor="practiceName">Practice Name *</Label>
                    <Input
                      id="practiceName"
                      type="text"
                      value={formData.practiceName}
                      onChange={(e) =>
                        handleInputChange("practiceName", e.target.value)
                      }
                      placeholder="Smile Dental Care"
                      className={
                        errors.practiceName ? "border-destructive" : ""
                      }
                    />
                    {errors.practiceName && (
                      <p className="text-sm text-destructive">
                        {errors.practiceName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="doctor@smiledental.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) =>
                        handleInputChange("notes", e.target.value)
                      }
                      placeholder="Tell us about your practice's current phone handling challenges..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-glow bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white font-semibold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Book My Demo"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="p-8 bg-gradient-to-br from-indigo/5 to-cyan/5 border-primary/20">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-4">
                    Prefer to call?
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-0">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo to-cyan rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          Call or text us directly
                        </p>
                        <a
                          href="tel:765-650-9577"
                          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                        >
                          765-650-9577
                        </a>
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      Our team is available Monday-Friday, 9 AM - 6 PM EST to
                      answer your questions and schedule your demo.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl mb-4">
                    What to expect in your demo
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-0">
                  <ul className="space-y-4">
                    {[
                      "Live demonstration of Vocallo AI handling patient calls",
                      "Integration walkthrough with your current systems",
                      "Customization options for your practice's needs",
                      "ROI analysis based on your call volume",
                      "Implementation timeline and onboarding process",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Practice Background Image Placeholder */}
              <Card className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-primary/10" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3">
                    Trusted by dental practices nationwide
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join hundreds of practices that have transformed their
                    patient experience with Vocallo AI.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>5,000+ appointments booked</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>99.9% uptime</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Have questions before your demo?
          </h2>
          <p className="text-muted-foreground mb-8">
            Check out our frequently asked questions or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq" onClick={scrollToTop}>
              <Button variant="outline">View FAQ</Button>
            </Link>
            <Button className="bg-gradient-to-r from-indigo to-cyan hover:from-indigo/90 hover:to-cyan/90 text-white">
              Schedule Demo Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
