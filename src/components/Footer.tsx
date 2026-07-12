import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import site from "@/data/site.json";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Estimator", href: "/estimator" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src={site.logo} alt={site.businessName} className="h-20 w-auto mb-4" />
            <p className="text-sm text-background/70 leading-relaxed">
              Premium landscaping and hardscaping services in {site.serviceArea}. We bring
              craftsmanship and regenerative practices to every project.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4 tracking-wide uppercase text-xs">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-background/70">
                <Phone size={16} className="text-primary shrink-0" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-background/70">
                <Mail size={16} className="text-primary shrink-0" />
                <span>{site.email}</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-background/70">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{site.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} {site.businessName}. All rights reserved.
          </p>
          <p className="text-xs text-background/50 italic font-serif">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
