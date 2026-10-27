import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/site/ServiceCard";
import { PageHero, EstimateSection } from "@/components/site/Sections";
import { SERVICES } from "@/lib/site";
import { pageMeta } from "@/lib/meta";
import remodel from "@/assets/remodel.jpg";

export const Route = createFileRoute("/services/")({
  head: () => pageMeta("Construction & Remodeling Services | LA United Construction", "Home remodeling, ADUs, roofing, exterior and structural work, residential systems, and additions in Los Angeles.", "/services"),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Construction Solutions for Every Home" text="From small renovations to major residential improvements, discover construction services designed around your property and goals." image={remodel} />
      <section className="py-24">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
        </div>
      </section>
      <EstimateSection />
    </>
  ),
});
