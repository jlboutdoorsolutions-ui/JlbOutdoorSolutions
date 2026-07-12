import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { AlertTriangle, Calculator, ArrowRight, Info } from "lucide-react";
import serviceConfigs from "@/data/estimator.json";

const ESTIMATOR_HERO = "/images/hero/estimator-hero.jpg";

type ServiceKey = keyof typeof serviceConfigs;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

const serviceKeys = Object.keys(serviceConfigs) as ServiceKey[];

export default function Estimator() {
  const [selectedService, setSelectedService] = useState<ServiceKey>("pavers");
  const [units, setUnits] = useState<number>(serviceConfigs.pavers.defaultUnits);

  const config = serviceConfigs[selectedService];

  // Estimate formula: base price + per-unit cost, shown as a range (-15% / +25%)
  // to account for site conditions. Adjust the multipliers below if you want a
  // tighter or wider range.
  const baseEstimate = config.basePrice + config.pricePerUnit * units;
  const lowEstimate = Math.round(baseEstimate * 0.85);
  const highEstimate = Math.round(baseEstimate * 1.25);

  const handleServiceChange = (key: ServiceKey) => {
    setSelectedService(key);
    setUnits(serviceConfigs[key].defaultUnits);
  };

  const handleUnitsChange = (value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setUnits(Math.min(config.maxUnits, Math.max(config.minUnits, num)));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ESTIMATOR_HERO})` }} />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium mb-3">Plan Your Project</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Cost Estimator</h1>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Ballpark Estimate Disclaimer</p>
              <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">
                The figures provided by this tool are <strong>rough ballpark estimates only</strong> and are
                intended to help with general budgeting. Actual project costs may vary significantly based on site
                conditions, material selections, labor complexity, accessibility, and other factors. These estimates
                do not constitute a quote or binding price. Please contact JLB Outdoor Solutions for an accurate,
                on-site assessment and formal estimate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estimator Tool */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service Selector */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-semibold text-foreground mb-5">Select a Service</h2>
                <div className="space-y-2">
                  {serviceKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleServiceChange(key)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedService === key
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                      }`}
                    >
                      {serviceConfigs[key].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimator Panel */}
              <div className="lg:col-span-2 space-y-6">
                {/* Service Info */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Calculator size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground">{config.label}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{config.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Input */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{config.unitLabel}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-4">
                    <div>
                      <input
                        type="number"
                        value={units}
                        onChange={(e) => handleUnitsChange(e.target.value)}
                        min={config.minUnits}
                        max={config.maxUnits}
                        step={config.unit === "acres" ? 0.25 : 100}
                        className="w-full px-4 py-3 text-lg font-semibold border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>
                          Min: {formatNumber(config.minUnits)} {config.unit}
                        </span>
                        <span>
                          Max: {formatNumber(config.maxUnits)} {config.unit}
                        </span>
                      </div>
                    </div>
                    <input
                      type="range"
                      value={units}
                      onChange={(e) => setUnits(parseFloat(e.target.value))}
                      min={config.minUnits}
                      max={config.maxUnits}
                      step={config.unit === "acres" ? 0.25 : 100}
                      className="w-full accent-primary"
                    />
                  </CardContent>
                </Card>

                {/* Estimate Result */}
                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Estimated Range</p>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl font-bold text-foreground">{formatCurrency(lowEstimate)}</span>
                      <span className="text-2xl text-muted-foreground mb-1">—</span>
                      <span className="text-4xl font-bold text-foreground">{formatCurrency(highEstimate)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For approximately {formatNumber(units)} {config.unit} of {config.label.toLowerCase()}
                    </p>
                    <div className="mt-5 pt-5 border-t border-border">
                      <div className="flex items-start gap-2">
                        <Info size={14} className="text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-700">
                          This is a ballpark estimate. Actual pricing depends on site conditions and project
                          specifics. Contact us for a precise quote.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Factors */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Factors That Affect Pricing</h4>
                    <ul className="space-y-2">
                      {config.factors.map((factor) => (
                        <li key={factor} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full">
                      Get an Accurate Quote <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Learn About This Service
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
