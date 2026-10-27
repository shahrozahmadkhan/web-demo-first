import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { pageMeta } from "@/lib/meta";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta("Privacy Policy | LA United Construction", "How LA United Construction handles information you share through this website.", "/privacy"),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <article className="container-site max-w-3xl space-y-5 py-20 leading-relaxed text-muted-foreground">
        <p>This policy explains how information submitted through this website may be used. It is a general template and should be reviewed by the company before publication.</p>
        <h2 className="text-xl font-extrabold text-foreground">Information you provide</h2>
        <p>When you request an estimate, you may share your name, email, phone number, project address, and project details. This information is used only to respond to your request.</p>
        <h2 className="text-xl font-extrabold text-foreground">Sharing</h2>
        <p>We do not sell your personal information. Information may be shared with service providers only as needed to operate this website.</p>
        <h2 className="text-xl font-extrabold text-foreground">Contact</h2>
        <p>Questions? Call <a className="text-primary" href={COMPANY.tel}>{COMPANY.phone}</a>.</p>
      </article>
    </>
  ),
});
