import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PROJECT_CATEGORIES, SAMPLE_PROJECTS } from "@/lib/site";

export function ProjectGallery({ limit }: { limit?: number }) {
  const [cat, setCat] = useState<string>("All Projects");
  const [open, setOpen] = useState<number | null>(null);
  const items = SAMPLE_PROJECTS.filter((p) => cat === "All Projects" || p.category === cat).slice(0, limit);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const active = open !== null ? items[open] : null;

  return (
    <div>
      <div role="tablist" aria-label="Project categories" className="mb-8 flex flex-wrap gap-2">
        {PROJECT_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              cat === c ? "bg-charcoal text-on-dark" : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p, i) => (
            <motion.button
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl text-left ${i === 0 && !limit ? "lg:col-span-2" : ""}`}
              aria-label={`View ${p.title}`}
            >
              <img src={p.image} alt={`${p.title} — sample image`} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-on-dark">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{p.category}</p>
                  <h3 className="mt-1 text-lg font-extrabold">{p.title}</h3>
                  <p className="text-xs text-on-dark-muted">Sample portfolio image</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-on-dark/15 backdrop-blur transition-colors group-hover:bg-primary">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button autoFocus onClick={() => setOpen(null)} aria-label="Close" className="absolute right-5 top-5 rounded-full bg-on-dark/15 p-3 text-on-dark hover:bg-primary">
              <X />
            </button>
            <motion.figure initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img src={active.image} alt={`${active.title} — sample image`} className="max-h-[80vh] rounded-xl" />
              <figcaption className="mt-3 text-on-dark">
                <span className="font-bold">{active.title}</span> · <span className="text-on-dark-muted">{active.category} — sample image for illustration</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
