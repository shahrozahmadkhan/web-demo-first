import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { SectionHeading, Reveal } from "@/components/site/Reveal";
import { WhyUs, CompanyInfo, Reviews, Process, EstimateSection, ContactBlock } from "@/components/site/Sections";
import { SERVICES } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "LA United Construction | Home Remodeling & Construction in Los Angeles",
      "Explore home remodeling, ADUs, roofing, exterior improvements, and residential construction services from LA United Construction in Los Angeles, California.",
      "/",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <section id="services" className="scroll-mt-20 py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Services"
            title="Construction Solutions for Every Home"
            text="From small renovations to major residential improvements, discover construction services designed around your property and goals."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
          </div>
        </div>
      </section>
      <section className="bg-card py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Projects" title="Crafted with Care. Built for Living." text="Explore residential construction and remodeling inspiration. Images shown are sample portfolio content." />
          <ProjectGallery limit={6} />
          <div className="mt-10"><Link to="/projects" className="btn-outline">View all projects</Link></div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Before &amp; After</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">See the Transformation</h2>
            <p className="mt-4 text-lg text-muted-foreground">Imagine the possibilities for your home with thoughtful construction and remodeling.</p>
            <p className="mt-3 text-sm text-muted-foreground">Drag the handle or use your arrow keys. Sample images.</p>
          </Reveal>
          <Reveal delay={0.1}><BeforeAfter /></Reveal>
        </div>
      </section>
      <WhyUs />
      <CompanyInfo />
      <Reviews />
      <Process />
      <EstimateSection />
      <ContactBlock />
    </>
  );
}
