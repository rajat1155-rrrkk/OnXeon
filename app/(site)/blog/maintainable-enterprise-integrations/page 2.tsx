import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Maintainable Enterprise Integrations — OnXeon Blog" },
  description:
    "Build maintainable enterprise integrations with contract versioning, observability and support handover practices.",
};

export default function MaintainableEnterpriseIntegrationsPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Building Long-Term Maintainable Enterprise Integrations</h1>
          <p className="text-muted-foreground">A practical model for keeping integration systems healthy after go-live.</p>
        </header>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Contract Discipline</h2><p className="text-muted-foreground mt-2">Version APIs and schemas with clear deprecation paths.</p></section>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Operational Readiness</h2><p className="text-muted-foreground mt-2">Instrument observability and define SLO-aligned alerting policies.</p></section>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Handover Quality</h2><p className="text-muted-foreground mt-2">Provide runbooks, troubleshooting notes and ownership transition documentation.</p></section>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Improve Integration Maintainability</Link>
          </Button>
      </article>
    </Section>
  );
}
