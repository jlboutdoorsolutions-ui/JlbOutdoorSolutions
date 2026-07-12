import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Shield, Award, Users, Leaf, Sprout, Droplet } from "lucide-react";
import site from "@/data/site.json";

const ABOUT_HERO = "/images/hero/about-hero.jpg";
const ABOUT_IMG = "/images/hero/about-story.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description: "We do what we say, when we say it. Our word is our contract, and our work speaks for itself.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description: "Every project is executed with the precision and care of a craftsman who takes pride in their work.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We listen, advise, and collaborate. Your vision guides every decision we make on your property.",
  },
  {
    icon: Leaf,
    title: "Regenerative Practices",
    description:
      "We build landscapes that improve over time — restoring soil health, supporting biodiversity, and creating thriving ecosystems.",
  },
  {
    icon: Sprout,
    title: "Long-Term Thinking",
    description: "We design for the future. Our work is built to last and to support the health of your property for generations.",
  },
  {
    icon: Droplet,
    title: "Environmental Stewardship",
    description: "We respect the land we work on, using responsible practices that benefit your property and the broader environment.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ABOUT_HERO})` }} />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">About JLB</h1>
        </div>
      </section>

      {/* Tagline Feature */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/60 font-medium mb-4">Our Promise</p>
          <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground italic font-serif leading-tight">
            Excellence
            <br />
            Edge to Edge
          </h2>
          <div className="w-16 h-px bg-primary-foreground/30 mx-auto mt-8" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Built on Regenerative
                <br />
                Principles & Craftsmanship
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  JLB Outdoor Solutions was founded on a simple belief: that every property deserves to be treated
                  with care, precision, and genuine craftsmanship. We believe that true excellence means creating
                  landscapes that are not just beautiful, but ecologically thriving — landscapes that improve over
                  time through regenerative practices.
                </p>
                <p>
                  Our team brings hands-on expertise across every service we offer — from the careful science of
                  soil health and native plantings to the artistry of a custom paver installation with permeable
                  systems. We prioritize building soil carbon, supporting biodiversity, and creating self-sustaining
                  ecosystems that benefit your property and the environment.
                </p>
                <p>
                  "Excellence edge to edge" is not just a tagline — it is the standard we hold ourselves to on every
                  single project. Whether we are clearing a lot or installing a patio, we bring the same dedication
                  to both craftsmanship and environmental responsibility.
                </p>
                <p className="text-primary font-semibold">Proudly serving {site.serviceArea} with premium landscaping, hardscaping, and snow removal services.</p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">Start Your Project</Button>
                </Link>
              </div>
            </div>

            <div>
              <img src={ABOUT_IMG} alt="JLB Outdoor Solutions project" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">What Guides Our Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regenerative Commitment */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Our Commitment</p>
            <h2 className="text-4xl font-bold text-foreground mb-6">Regenerative Landscaping for a Thriving Future</h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We believe that landscaping is not just about aesthetics — it is about creating living systems that
              improve over time. Regenerative practices are at the heart of everything we do. This means building
              soil health, supporting native plants and pollinators, managing water responsibly, and leaving
              properties better than we found them.
            </p>
            <p>
              From soil testing and organic amendments to permeable paving systems and native plantings, every
              decision we make is guided by a commitment to ecological health. We work with nature, not against it,
              to create landscapes that are beautiful, resilient, and sustainable.
            </p>
            <p>
              When you choose JLB Outdoor Solutions, you are not just investing in a beautiful yard — you are
              investing in a landscape that will thrive for decades, support local ecosystems, and reflect your
              values of environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Dream Landscape?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help you create a landscape that is beautiful, thriving, and built to last. Contact JLB Outdoor
            Solutions for a free consultation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
