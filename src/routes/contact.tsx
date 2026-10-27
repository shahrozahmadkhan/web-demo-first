import { createFileRoute } from "@tanstack/react-router";
import { PageHero, EstimateSection, ContactBlock } from "@/components/site/Sections";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact & Free Estimate | LA United Construction", "Request a free estimate or call (760) 953-5148. LA United Construction, 1226 W 109th St, Los Angeles, CA 90044.", "/contact"),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Let's Talk About Your Project" text="Call, visit, or send us your project details for a free estimate." />
      <EstimateSection />
      <ContactBlock />
    </>
  ),
});
