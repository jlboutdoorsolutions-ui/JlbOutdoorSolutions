import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { Leaf, Shovel, Layers, Truck, Square, ArrowRight, Cloud } from "lucide-react";

const SERVICES_HERO = "/images/hero/services-hero.jpg";

const services = [
  {
    id: "soil-health",
    icon: Leaf,
    title: "Soil Health",
    tagline: "Regenerative practices from the ground up",
    description:
      "A beautiful lawn begins with what you cannot see. Our regenerative soil health services include comprehensive testing, aeration, topdressing, and custom amendment programs designed to optimize nutrient levels, drainage, and microbial activity. We use organic, locally-sourced materials and practices that build soil carbon, enhance biodiversity, and create self-sustaining ecosystems.",
    details: [
      "Soil composition testing and analysis",
      "Core aeration and native overseeding",
      "Organic compost and amendment applications",
      "pH balancing with natural inputs",
      "Mycorrhizal fungi and beneficial microbe inoculation",
    ],
    image: "/images/services/soil-health.jpg",
  },
  {
    id: "seasonal-cleanup",
    icon: Shovel,
    title: "Seasonal Cleanup",
    tagline: "Sustainable stewardship through every season",
    description:
      "Your property deserves to look its best in every season while supporting the environment. Our seasonal cleanup crews are thorough, efficient, and committed to regenerative practices — handling everything from spring bed preparation to fall leaf cleanup and mulching. We prioritize composting and chipping materials on-site when possible, reducing waste while enriching your soil.",
    details: [
      "Spring cleanup and native bed preparation",
      "Leaf composting and chipping",
      "Sustainable debris management",
      "Organic mulch installation",
      "Pollinator-friendly bed edging and plantings",
    ],
    image: "/images/services/seasonal-cleanup.jpg",
  },
  {
    id: "yard-installation",
    icon: Layers,
    title: "Yard Installation & Grading",
    tagline: "Regenerative yards built to thrive",
    description:
      "Whether you are establishing a lawn on a new build or completely renovating an existing one, JLB delivers yard installations engineered for longevity and ecological health. We handle all aspects of site grading to ensure proper drainage, use regenerative practices like native seed mixes and organic amendments, and establish living systems that improve over time.",
    details: [
      "Regenerative site grading and drainage planning",
      "Organic topsoil and amendment installation",
      "Native grass seed and sod options",
      "Erosion control and soil stabilization",
      "Establishment care with minimal inputs",
    ],
    image: "/images/services/yard-installation.jpg",
  },
  {
    id: "lot-clearing",
    icon: Truck,
    title: "Lot Clearing & Skid Steer Work",
    tagline: "Responsible site preparation",
    description:
      "From wooded lots to overgrown properties, our skid steer team handles clearing, grubbing, and site preparation with precision and environmental responsibility. We prioritize salvaging materials for reuse, minimize soil compaction, and preserve healthy trees and root systems where possible.",
    details: [
      "Selective lot clearing and grubbing",
      "Tree preservation and selective removal",
      "Material salvage and recycling",
      "Minimal-impact site preparation",
      "Soil health protection during clearing",
    ],
    image: "/images/services/lot-clearing.jpg",
  },
  {
    id: "concrete-flatwork",
    icon: Square,
    title: "Concrete Flatwork",
    tagline: "Durable surfaces with environmental consideration",
    description:
      "Our concrete flatwork is defined by clean lines, smooth finishes, and structural integrity. We handle driveways, walkways, patios, and utility pads with craftsmanship and attention to detail. We prioritize permeable concrete options where appropriate to support groundwater recharge and reduce runoff.",
    details: [
      "Driveways and aprons",
      "Permeable and eco-friendly concrete options",
      "Walkways and sustainable surfaces",
      "Patio slabs and pool decks",
      "Decorative finishes with minimal environmental impact",
    ],
    image: "/images/services/concrete.jpg",
  },
  {
    id: "pavers",
    icon: Layers,
    title: "Pavers",
    tagline: "Permeable beauty that sustains the landscape",
    description:
      "Paver installations are where function meets artistry and environmental stewardship. JLB designs and installs paver patios, walkways, driveways, and pool surrounds using premium materials and regenerative installation methods. We prioritize permeable paver systems that allow water infiltration, support groundwater recharge, and reduce runoff.",
    details: [
      "Permeable paver design and installation",
      "Driveway and walkway pavers with water infiltration",
      "Retaining walls and sustainable steps",
      "Pool surrounds and outdoor living spaces",
      "Native plantings and pollinator-friendly edges",
    ],
    image: "/images/services/pavers.jpg",
  },
  {
    id: "snow-removal",
    icon: Cloud,
    title: "Snow Removal",
    tagline: "Safe, reliable winter property care",
    description:
      "Winter weather doesn't have to disrupt your life. JLB provides professional snow removal and ice management services to keep your driveways, walkways, and parking areas safe and accessible throughout the season. We use responsible de-icing methods and prioritize efficient, thorough service.",
    details: [
      "Driveway and walkway snow removal",
      "Parking area clearing and management",
      "Ice melt and de-icing treatments",
      "Environmentally responsible products",
      "Seasonal contracts and on-call service",
    ],
    image: "/images/services/snow-removal.jpg",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${SERVICES_HERO})` }} />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-3">Our Expertise</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Services</h1>
        </div>
      </section>

      {/* Regenerative Intro */}
      <section className="py-16 bg-primary/5 border-b border-primary/10">
        <div className="container max-w-3xl">
          <div className="flex items-start gap-3 mb-4">
            <Leaf className="text-primary shrink-0 mt-1" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Built on Regenerative Principles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every service we offer is grounded in regenerative practices that restore soil health, support
                biodiversity, and create landscapes that improve over time. We believe that true excellence means
                leaving properties better than we found them — not just beautiful, but ecologically thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? "order-1" : "order-2"}>
                    <div className="flex items-start gap-3 mb-4">
                      <Icon className="text-primary shrink-0 mt-1" size={28} />
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Service</p>
                        <h3 className="text-4xl font-bold text-foreground mt-1">{service.title}</h3>
                        <p className="text-lg text-primary font-serif italic mt-2">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button className="gap-2">
                        Get a Quote <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>

                  <div className={isEven ? "order-2" : "order-1"}>
                    <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Landscape?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact JLB Outdoor Solutions today to discuss your project and discover how regenerative practices can
            create a landscape that thrives.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Request a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
