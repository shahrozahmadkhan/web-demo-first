import { MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl shadow-card"
      onPointerDown={(e) => { dragging.current = true; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      <img src={after} alt="Bathroom after renovation (sample)" loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt="Bathroom before renovation (sample)" loading="lazy" className="h-full w-full object-cover" draggable={false} />
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-on-dark">Before</span>
      <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">After</span>
      <div className="absolute inset-y-0 w-[2px] bg-on-dark" style={{ left: `${pos}%` }}>
        <button
          role="slider"
          aria-label="Before and after comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          }}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-primary text-primary-foreground shadow-cta"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
      <span className="absolute bottom-3 right-4 text-[11px] font-semibold text-on-dark/80">Sample images</span>
    </div>
  );
}
