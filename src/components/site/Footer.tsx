import { Link } from "@tanstack/react-router";
import { Clock, Globe, MapPin, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-on-dark-muted">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo dark />
          <p className="text-sm leading-relaxed">
            General construction and home remodeling in Los Angeles — remodels, ADUs, roofing, exterior work, and residential systems.
          </p>
          <p className="text-xs">License: {COMPANY.license} (as supplied)</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-on-dark">Services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-on-dark">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms of Use</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-on-dark">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-primary" /><a href={COMPANY.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-primary">{COMPANY.address}</a></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-primary" /><a href={COMPANY.tel} className="hover:text-primary">{COMPANY.phone}</a></li>
            <li className="flex gap-3"><Globe className="h-4 w-4 shrink-0 text-primary" /><a href={COMPANY.website} className="hover:text-primary">launitedconstruction.com</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-primary" />{COMPANY.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-dark/10">
        <div className="container-site flex flex-col justify-between gap-2 py-6 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} LA United Construction. All rights reserved.</p>
          <p>Sample images shown are for illustration only.</p>
        </div>
      </div>
    </footer>
  );
}
