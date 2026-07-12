import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import site from "@/data/site.json";

const CONTACT_HERO = "/images/hero/contact-hero.jpg";

const services = [
  "Soil Health",
  "Seasonal Cleanup",
  "Yard Installation & Grading",
  "Lot Clearing & Skid Steer",
  "Concrete Flatwork",
  "Pavers",
  "Snow Removal",
  "Multiple Services",
  "Not Sure / General Inquiry",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const emptyForm: FormState = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (field: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address";
    if (form.message.trim().length < 10) next.message = "Please provide at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Submitted via Formspree since this is a static site with no backend.
    // Set your real endpoint in src/data/site.json ("formspreeEndpoint").
    // Sign up free at https://formspree.io, create a form, and paste the
    // URL it gives you (looks like https://formspree.io/f/xxxxabcd).
    setStatus("sending");
    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("sent");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CONTACT_HERO})` }} />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-3">Let's Talk</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Get in Touch</p>
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Property?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill out the form and a member of our team will be in touch within one business day to discuss
                  your project and schedule a free on-site consultation.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{site.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{site.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Service Area</p>
                    <p className="font-medium text-foreground">{site.serviceArea}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Hours</p>
                    <p className="font-medium text-foreground">{site.hours.weekday}</p>
                    <p className="text-sm text-muted-foreground">{site.hours.saturday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === "sent" ? (
                <Card>
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Message Received!</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Thank you for reaching out to JLB Outdoor Solutions. A member of our team will contact you
                      within one business day to discuss your project.
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8">
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            placeholder="John Smith"
                            value={form.name}
                            onChange={update("name")}
                            className={`w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                              errors.name ? "border-destructive" : "border-input"
                            }`}
                          />
                          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={update("email")}
                            className={`w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                              errors.email ? "border-destructive" : "border-input"
                            }`}
                          />
                          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="(636) 555-0100"
                            value={form.phone}
                            onChange={update("phone")}
                            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="service" className="text-sm font-medium text-foreground">
                            Service of Interest
                          </label>
                          <select
                            id="service"
                            value={form.service}
                            onChange={update("service")}
                            className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Tell Us About Your Project *
                        </label>
                        <textarea
                          id="message"
                          placeholder="Describe your project, property size, timeline, or any specific questions you have..."
                          rows={5}
                          value={form.message}
                          onChange={update("message")}
                          className={`w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                            errors.message ? "border-destructive" : "border-input"
                          }`}
                        />
                        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-destructive">
                          Something went wrong sending your message. Please try again, or call us directly at {site.phone}.
                        </p>
                      )}

                      <Button type="submit" className="w-full py-6 text-base" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
