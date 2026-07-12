import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight, Leaf, Layers, Shovel, Truck, Square, Star } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import portfolio from "@/data/portfolio.json";

const HERO_IMAGE = "/images/hero/home-hero.jpg";
const CTA_IMAGE = "/images/hero/cta-banner.jpg";

const services = [
  {
    icon: Leaf,
    title: "Soil Health",
    description:
      "Regenerative soil programs that build carbon, enhance biodiversity, and create self-sustaining ecosystems. We test, amend, and restore.",
  },
  {
    icon: Shovel,
    title: "Seasonal Cleanup",
    description:
      "Sustainable cleanups with on-site composting and organic practices. We leave your property pristine and enriched.",
  },
  {
    icon: Layers,
    title: "Yard Installation & Grading",
    description:
      "Regenerative yard systems using native seeds, organic amendments, and practices that improve over time.",
  },
  {
    icon: Truck,
    title: "Lot Clearing & Skid Steer",
    description: "Responsible site preparation with material salvage, minimal soil compaction, and environmental care.",
  },
  {
    icon: Square,
    title: "Concrete Flatwork",
    description: "Durable surfaces with permeable options that support groundwater recharge and reduce environmental impact.",
  },
  {
    icon: Layers,
    title: "Pavers",
    description: "Permeable paver systems that combine beauty with environmental responsibility and water infiltration.",
  },
  {
    icon: Shovel,
    title: "Snow Removal",
    description: "Professional winter property care with safe, reliable snow removal and ice management services.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground"} />
      ))}
    </div>
  );
}

export default function Home() {
  const featuredPortfolio = portfolio.filter((p) => p.featured);
  const featuredTestimonials = testimonials.filter((t) => t.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-4">Landscaping & Hardscaping</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Excellence
            <br />
            <span className="italic font-light">Edge to Edge</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            JLB Outdoor Solutions delivers premium landscaping and hardscaping craftsmanship for properties that deserve
            nothing less than extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Request a Free Quote</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outlineWhite">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From soil restoration to hardscaping, we deliver regenerative solutions that enhance your property's beauty
              and environmental health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link key={idx} href="/services">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border/50">
                    <CardContent className="p-8">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estimator CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Quick Cost Estimator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Get a ballpark estimate for your project. Prices vary based on site conditions and specific requirements.
            </p>
            <Link href="/estimator">
              <Button size="lg">Try the Estimator</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      {featuredPortfolio.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Project</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={featuredPortfolio[0].imageUrl}
                  alt={featuredPortfolio[0].title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">
                  {featuredPortfolio[0].category}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-2">{featuredPortfolio[0].title}</h3>
                {featuredPortfolio[0].description && (
                  <p className="text-muted-foreground mb-4">{featuredPortfolio[0].description}</p>
                )}
                <Link href="/portfolio">
                  <Button className="gap-2">
                    View All Projects
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-3">Client Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          </div>
          {featuredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-border/50">
                  <CardContent className="p-6">
                    <StarRating rating={testimonial.rating} />
                    <p className="text-muted-foreground leading-relaxed my-4">{testimonial.review}</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.clientName}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <p>Testimonials coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundImage: `url(${CTA_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative z-10 container text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-4">Ready to Transform Your Property?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something
            <br />
            <span className="italic font-light">Extraordinary Together</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Contact us today for a free consultation and estimate. We'll walk your property, listen to your vision, and
            deliver a plan that exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Get Your Free Quote</Button>
            </Link>
            <Link href="/estimator">
              <Button size="lg" variant="outlineWhite">
                Try the Estimator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
