import { createFileRoute } from "@tanstack/react-router";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { PageHero, EstimateSection } from "@/components/site/Sections";
import { pageMeta } from "@/lib/meta";
import adu from "@/assets/adu.jpg";

export const Route = createFileRoute("/projects")({
  head: () => pageMeta("Projects & Inspiration | LA United Construction", "Explore residential construction and remodeling inspiration: kitchens, bathrooms, ADUs, roofing, and exterior renovations.", "/projects"),
  component: () => (
    <>
      <PageHero eyebrow="Projects" title="Crafted with Care. Built for Living." text="Explore residential construction and remodeling inspiration. Images shown are sample portfolio content, not completed company projects." image={adu} />
      <section className="py-24"><div className="container-site"><ProjectGallery /></div></section>
      <section className="bg-card py-24">
        <div className="container-site">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight md:text-5xl">See the Transformation</h2>
          <BeforeAfter />
        </div>
      </section>
      <EstimateSection />
    </>
  ),
});
