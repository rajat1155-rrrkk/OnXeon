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
          <p className="text-muted-foreground">
            A practical model for keeping integration systems stable after go-live and through ongoing platform change.
          </p>
        </header>

        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <h2 className="font-semibold">Contract Discipline</h2>
          <p className="text-muted-foreground mt-2">
            Version APIs and schemas with explicit deprecation windows. Avoid breaking field-level changes without
            consumer compatibility testing.
          </p>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Observability and SLOs</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Define SLOs for sync latency and failure rate</li>
              <li>Alert by business impact, not only by technical error count</li>
              <li>Track error trends by integration endpoint and version</li>
            </ul>
          </section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Support Handover Quality</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Runbook with common failure patterns and fixes</li>
              <li>Ownership matrix by workflow and endpoint</li>
              <li>Recovery steps with rollback guidance</li>
            </ul>
          </section>
        </div>

        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <h2 className="font-semibold">Quarterly Integration Health Review</h2>
          <p className="text-muted-foreground mt-2">
            Review contract drift, alert noise, unresolved exceptions and dependency lifecycle. This keeps integration
            debt from accumulating quietly.
          </p>
        </section>

        <Button variant="default" asChild>
          <Link href="/contact#book">Improve Integration Maintainability</Link>
        </Button>
      </article>
    </Section>
  );
}
