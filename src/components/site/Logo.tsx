import { Link } from "@tanstack/react-router";

// Temporary emblem until the official logo file is supplied.
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="LA United Construction home">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-sm font-extrabold tracking-tight text-on-dark ring-2 ring-primary/70">
        LA
      </span>
      <span className={`leading-tight ${dark ? "text-on-dark" : "text-foreground"}`}>
        <span className="block text-[15px] font-extrabold tracking-tight">LA United</span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-on-dark-muted" : "text-muted-foreground"}`}>
          Construction
        </span>
      </span>
    </Link>
  );
}
