import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BrickWall, Hammer, Home, Plus, Triangle, Zap } from "lucide-react";
import type { Service } from "@/lib/site";
import { Reveal } from "./Reveal";

const ICONS = { hammer: Hammer, home: Home, roof: Triangle, brick: BrickWall, zap: Zap, plus: Plus };

export function ServiceCard({ s, i }: { s: Service; i: number }) {
  const Icon = ICONS[s.icon];
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <Link
        to="/services/$slug"
        params={{ slug: s.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={s.image} alt={s.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-charcoal/85 text-primary backdrop-blur">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-extrabold tracking-tight">{s.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">
            Learn More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
