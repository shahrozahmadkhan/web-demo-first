import { Link } from "@tanstack/react-router";
import { BadgeCheck, Clock, Gem, Globe, Layers, MapPin, MessageSquare, Phone, ShieldCheck, Star, ChevronLeft, ChevronRight, HardHat } from "lucide-react";
import { useState } from "react";
import { COMPANY } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";
import { EstimateForm } from "./EstimateForm";

export function WhyUs() {
  const items = [
    { icon: HardHat, t: "Residential Construction Expertise", d: "Construction and remodeling solutions for different residential needs." },
    { icon: Gem, t: "Quality-Focused Work", d: "Attention to materials, finishes, and workmanship on every scope." },
    { icon: Layers, t: "Multiple Home Improvement Services", d: "Remodeling, ADUs, exterior improvements, and residential systems." },
    { icon: MessageSquare, t: "Clear Communication", d: "Talk openly about your goals, scope, timeline, and budget." },
  ];
  return (
    <section className="py-24">
      <div className="container-site">
        <SectionHeading eyebrow="Why LA United" title="A Reliable Partner for Your Next Project" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border bg-card p-7 transition-colors hover:border-primary/50">
                <it.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-extrabold">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyInfo() {
  const rows = [
    { icon: BadgeCheck, l: "Business type", v: COMPANY.type },
    { icon: MapPin, l: "Address", v: COMPANY.address, href: COMPANY.mapsUrl },
    { icon: Phone, l: "Phone", v: COMPANY.phone, href: COMPANY.tel },
    { icon: Globe, l: "Website", v: "launitedconstruction.com", href: COMPANY.website },
    { icon: Clock, l: "Published hours", v: COMPANY.hours },
    { icon: ShieldCheck, l: "License (as supplied)", v: COMPANY.license },
  ];
  return (
    <section className="bg-navy py-24 text-on-dark">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Company Information</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">LA United Construction</h2>
          <p className="mt-4 text-on-dark-muted">Hours and license details are shown as provided by the company. Please confirm details directly when planning your project.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {rows.map((r, i) => (
            <Reveal key={r.l} delay={i * 0.05}>
              <div className="flex gap-4 rounded-xl border border-on-dark/10 bg-on-dark/5 p-5">
                <r.icon className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-dark-muted">{r.l}</p>
                  {r.href ? (
                    <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block font-semibold hover:text-primary">{r.v}</a>
                  ) : (
                    <p className="mt-1 font-semibold">{r.v}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const slides = [0, 1, 2];
  const [i, setI] = useState(0);
  return (
    <section id="reviews" className="scroll-mt-20 py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Reviews" title="What Homeowners Are Saying" />
          <Reveal className="mb-12 flex items-center gap-5 rounded-2xl bg-card p-6 shadow-card">
            <p className="text-5xl font-extrabold">4.9<span className="text-xl text-muted-foreground">/5</span></p>
            <div>
              <div className="flex text-primary">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-1 text-sm font-bold">65+ Reviews</p>
              <p className="text-xs text-muted-foreground">As displayed on the company's profile</p>
            </div>
          </Reveal>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${i * 100}%)` }}>
            {slides.map((s) => (
              <div key={s} className="w-full shrink-0 px-1 md:w-1/2 lg:w-1/3" aria-hidden={false}>
                <figure className="h-full rounded-2xl border border-dashed bg-card p-7">
                  <div className="flex text-primary">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="mt-4 italic text-muted-foreground">Verified customer review placeholder — authentic reviews will appear here once supplied by the company.</blockquote>
                  <figcaption className="mt-5 text-sm font-bold">Review placeholder #{s + 1}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-3 lg:hidden">
          <button aria-label="Previous review" onClick={() => setI((v) => Math.max(0, v - 1))} className="rounded-full border p-3 hover:bg-muted"><ChevronLeft className="h-4 w-4" /></button>
          <button aria-label="Next review" onClick={() => setI((v) => Math.min(slides.length - 1, v + 1))} className="rounded-full border p-3 hover:bg-muted"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { n: "01", t: "Consultation", d: "Discuss the homeowner's goals, ideas, needs, and budget." },
    { n: "02", t: "Project Planning", d: "Review the project scope, design requirements, and proposed next steps." },
    { n: "03", t: "Construction", d: "Coordinate the agreed construction or remodeling work." },
    { n: "04", t: "Final Review", d: "Review the completed scope and discuss any remaining agreed items." },
  ];
  return (
    <section className="bg-charcoal py-24 text-on-dark blueprint">
      <div className="container-site">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">Our Process</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">From First Conversation to Finished Space</h2>
        </Reveal>
        <ol className="relative grid gap-10 border-l border-on-dark/15 pl-8 lg:grid-cols-4 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <li className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-charcoal bg-primary lg:-top-[49px] lg:left-0" />
                <p className="text-4xl font-extrabold text-primary">{s.n}</p>
                <h3 className="mt-3 text-xl font-extrabold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EstimateSection() {
  return (
    <section id="estimate" className="scroll-mt-20 bg-muted py-24">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <p className="eyebrow">Free Estimate</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">Let's Build Something Better</h2>
          <p className="mt-4 text-lg text-muted-foreground">Tell us about your construction or remodeling project and take the next step toward improving your home.</p>
          <a href={COMPANY.tel} className="mt-8 flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
            <span><span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Prefer to talk?</span><span className="text-xl font-extrabold">{COMPANY.phone}</span></span>
          </a>
        </Reveal>
        <Reveal delay={0.1}><EstimateForm /></Reveal>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="py-24">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">Contact LA United Construction</h2>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4"><MapPin className="h-5 w-5 text-primary" /><span>{COMPANY.address}<br /><a className="text-sm font-bold text-primary" href={COMPANY.mapsUrl} target="_blank" rel="noreferrer">Get directions →</a></span></li>
            <li className="flex gap-4"><Phone className="h-5 w-5 text-primary" /><a href={COMPANY.tel} className="font-semibold hover:text-primary">{COMPANY.phone}</a></li>
            <li className="flex gap-4"><Globe className="h-5 w-5 text-primary" /><a href={COMPANY.website} className="font-semibold hover:text-primary">launitedconstruction.com</a></li>
            <li className="flex gap-4"><Clock className="h-5 w-5 text-primary" /><span>{COMPANY.hours} <span className="text-xs text-muted-foreground">(published hours)</span></span></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={COMPANY.tel} className="btn-primary"><Phone className="h-4 w-4" /> Call Now</a>
            <Link to="/contact" hash="estimate" className="btn-outline">Request an Estimate</Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <iframe title="Map showing LA United Construction location" src={COMPANY.mapEmbed} loading="lazy" className="h-[420px] w-full rounded-2xl border-0 shadow-card" referrerPolicy="no-referrer-when-downgrade" />
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-charcoal pb-20 pt-40 text-on-dark blueprint">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
      <div className="container-site relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-on-dark-muted">{text}</p>}
      </div>
    </section>
  );
}
