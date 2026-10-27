import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import exterior from "@/assets/exterior.jpg";

const HouseScene = lazy(() => import("./HouseScene"));

function canWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function Hero() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<"pending" | "3d" | "static">("pending");
  useEffect(() => setMode(canWebGL() && !reduce ? "3d" : "static"), [reduce]);

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] as const },
  });

  return (
    <section className="blueprint relative min-h-[100svh] overflow-hidden bg-charcoal text-on-dark">
      <div className="absolute inset-0 lg:left-[38%]" aria-hidden="true">
        {mode === "3d" && (
          <Suspense fallback={null}>
            <HouseScene />
          </Suspense>
        )}
        {mode === "static" && <img src={exterior} alt="" className="h-full w-full object-cover opacity-60" />}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent lg:via-charcoal/40" />
      <div className="container-site relative flex min-h-[100svh] flex-col justify-center pb-20 pt-32">
        <div className="pointer-events-none max-w-2xl [&_a]:pointer-events-auto">
          <motion.p {...item(0)} className="eyebrow">Residential Construction • Remodeling • ADUs</motion.p>
          <motion.h1 {...item(1)} className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            BUILDING<br />BETTER <span className="text-primary">SPACES.</span>
          </motion.h1>
          <div className="animate-draw mt-6 h-[2px] w-40 bg-primary" />
          <motion.h2 {...item(2)} className="mt-6 text-xl font-bold md:text-2xl">
            Construction &amp; Home Remodeling in Los Angeles
          </motion.h2>
          <motion.p {...item(3)} className="mt-4 max-w-xl text-base leading-relaxed text-on-dark-muted md:text-lg">
            From custom ADUs and home renovations to roofing and structural improvements, LA United Construction helps transform your property with professional construction solutions.
          </motion.p>
          <motion.div {...item(4)} className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">Request a Free Estimate <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="btn-outline-dark">Explore Our Services</Link>
          </motion.div>
        </div>
      </div>
      <a href="#services" aria-label="Scroll to services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-on-dark/40 pt-2">
          <span className="animate-scroll-dot h-2 w-1 rounded-full bg-primary" />
        </span>
      </a>
    </section>
  );
}
