import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "ServiceNow Enterprise Workflows — OnXeon Blog" },
  description:
    "Designing ServiceNow workflows that integrate cleanly with ERP, CRM and internal enterprise systems.",
};

export default function ServiceNowEnterpriseWorkflowsPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">ServiceNow Workflow Design for Enterprise Teams</h1>
          <p className="text-muted-foreground">
            A practical model for building ServiceNow workflows that remain aligned with business operations and
            surrounding platforms.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Workflow Boundaries</h2>
            <p className="text-muted-foreground mt-2">
              Define clear handoff points between ServiceNow, CRM and ERP so ownership and system-of-record decisions
              stay explicit.
            </p>
          </section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Integration Reliability</h2>
            <p className="text-muted-foreground mt-2">
              Use idempotent APIs, retry-safe handlers, and operational alerts to avoid silent workflow failures.
            </p>
          </section>
        </div>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <h2 className="font-semibold">Governance Checklist</h2>
          <p className="text-muted-foreground mt-2">
            Track approvals, SLA transitions, integration ownership, and reporting definitions before scaling workflow
            automation.
          </p>
        </section>
        <Button variant="default" asChild>
          <Link href="/contact#book">Discuss ServiceNow Workflow Architecture</Link>
        </Button>
      </article>
    </Section>
  );
}
