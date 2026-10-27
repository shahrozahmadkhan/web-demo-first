import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceCard } from "@/components/site/ServiceCard";
import { PageHero, EstimateSection } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageMeta(`${loaderData.service.title} in Los Angeles | LA United Construction`, loaderData.service.short, `/services/${params.slug}`)
      : { meta: [{ title: "Service not found | LA United Construction" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <div className="container-site py-40 text-center">
      <h1 className="text-3xl font-extrabold">Service not found</h1>
      <Link to="/services" className="btn-primary mt-6">See all services</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow="Service" title={s.title} text={s.short} image={s.image} />
      <section className="py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.overview}</p>
            <h3 className="mt-10 text-xl font-extrabold">What's included &amp; considerations</h3>
            <ul className="mt-4 space-y-3">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{b}</li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl font-extrabold">Frequently asked questions</h3>
            <Accordion type="single" collapsible className="mt-2">
              {s.faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={s.image} alt={`${s.title} — sample photo`} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
            <p className="mt-2 text-xs text-muted-foreground">Sample image for illustration.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-card py-24">
        <div className="container-site">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight">Related services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => <ServiceCard key={r.slug} s={r} i={i} />)}
          </div>
        </div>
      </section>
      <EstimateSection />
    </>
  );
}
