import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/site";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About Us", to: "/about" },
  { label: "Reviews", to: "/", hash: "reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overHero ? "bg-transparent" : "bg-charcoal/95 shadow-card backdrop-blur"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Logo dark />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  {...("hash" in n ? { hash: n.hash, activeProps: {} , activeOptions: { includeHash: true } } : { activeOptions: { exact: true } })}
                  className="text-sm font-semibold text-on-dark-muted transition-colors hover:text-on-dark data-[status=active]:text-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={COMPANY.tel} className="flex items-center gap-2 text-sm font-bold text-on-dark">
            <Phone className="h-4 w-4 text-primary" /> {COMPANY.phone}
          </a>
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">Get a Free Estimate</Link>
        </div>
        <button
          className="rounded-md p-2 text-on-dark lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-charcoal lg:hidden"
          >
            <ul className="container-site flex flex-col gap-1 pb-6">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    {...("hash" in n ? { hash: n.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-semibold text-on-dark hover:bg-navy"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-3">
                <a href={COMPANY.tel} className="btn-outline-dark"><Phone className="h-4 w-4" /> {COMPANY.phone}</a>
                <Link to="/contact" className="btn-primary">Get a Free Estimate</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
