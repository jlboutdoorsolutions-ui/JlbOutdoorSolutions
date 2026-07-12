import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";
import portfolioItems from "@/data/portfolio.json";

const PORTFOLIO_HERO = "/images/hero/portfolio-hero.jpg";

const categories = [
  { value: "all", label: "All Projects", icon: "🏞️" },
  { value: "Pavers", label: "Pavers", icon: "🧱" },
  { value: "Concrete Flatwork", label: "Concrete", icon: "🛣️" },
  { value: "Soil Health", label: "Soil Health", icon: "🌱" },
  { value: "Seasonal Cleanup", label: "Cleanup", icon: "🍂" },
  { value: "Yard Installation & Grading", label: "Yard Installation", icon: "🏗️" },
  { value: "Lot Clearing & Skid Steer", label: "Lot Clearing", icon: "🚜" },
  { value: "Snow Removal", label: "Snow Removal", icon: "❄️" },
];

type PortfolioItem = (typeof portfolioItems)[number];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const items =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PORTFOLIO_HERO})` }} />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-3">Our Work</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Project Portfolio</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Browse our completed projects across landscaping, hardscaping, concrete, and more. Every project
              represents our commitment to excellence edge to edge.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <button
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer text-left"
                  onClick={() => setLightboxItem(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{categories.find((c) => c.value === item.category)?.icon || "🏞️"}</span>
                      <p className="text-xs uppercase tracking-widest text-white/70">{item.category}</p>
                    </div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    {item.description && <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.description}</p>}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No projects found in this category yet.</p>
              <p className="text-sm mt-2">Check back soon as we continue to grow our portfolio.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contact us for a free consultation. We would love to discuss your vision and show you what JLB can do for
            your property.
          </p>
          <Link href="/contact">
            <Button>Get a Free Quote</Button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxItem(null)}>
          <button
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
            onClick={() => setLightboxItem(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxItem.imageUrl} alt={lightboxItem.title} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{lightboxItem.title}</h3>
              {lightboxItem.description && <p className="text-white/70 text-sm mt-2">{lightboxItem.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
