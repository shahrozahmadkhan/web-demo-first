import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhyUs, CompanyInfo, Process, Reviews, EstimateSection } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta } from "@/lib/meta";
import exterior from "@/assets/exterior.jpg";
import addition from "@/assets/addition.jpg";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About Us | LA United Construction", "LA United Construction is a general construction and home remodeling company based in Los Angeles, California.", "/about"),
  component: () => (
    <>
      <PageHero eyebrow="About Us" title="Building Better Spaces in Los Angeles" image={exterior} />
      <section className="py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">General construction &amp; home remodeling</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              LA United Construction works with Los Angeles homeowners on residential construction, home remodeling, accessory dwelling units, roofing, exterior and structural improvements, and home systems.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every project begins with a conversation about your goals, your property, and your budget — so the plan fits the way you want to live.
            </p>
          </Reveal>
          <Reveal delay={0.1}><img src={addition} alt="Residential addition under construction (sample)" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" /></Reveal>
        </div>
      </section>
      <WhyUs />
      <CompanyInfo />
      <Process />
      <Reviews />
      <EstimateSection />
    </>
  ),
});
