import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta("Terms of Use | LA United Construction", "Terms governing use of the LA United Construction website.", "/terms"),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <article className="container-site max-w-3xl space-y-5 py-20 leading-relaxed text-muted-foreground">
        <p>This website provides general information about LA United Construction's services. It is a general template and should be reviewed by the company before publication.</p>
        <h2 className="text-xl font-extrabold text-foreground">No guarantees</h2>
        <p>Content is informational and does not constitute a quote or contract. Project scope, pricing, and schedules are agreed in writing for each project.</p>
        <h2 className="text-xl font-extrabold text-foreground">Images</h2>
        <p>Some images are sample or illustrative content and do not necessarily depict completed company projects.</p>
      </article>
    </>
  ),
});
