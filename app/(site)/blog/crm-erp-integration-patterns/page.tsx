import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "CRM ERP Integration Patterns — OnXeon Blog" },
  description:
    "Proven integration patterns for CRM and ERP platforms including API contracts, mapping and reliability controls.",
};

export default function CrmErpIntegrationPatternsPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Integration Patterns for CRM and ERP Systems</h1>
          <p className="text-muted-foreground">Patterns that keep data accurate and workflows resilient across enterprise systems.</p>
        </header>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">System of Record Model</h2><p className="text-muted-foreground mt-2">Define source-of-truth ownership per object to avoid conflict and duplication.</p></section>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Integration Reliability</h2><p className="text-muted-foreground mt-2">Use idempotency keys, retry-safe APIs and dead-letter handling for failure recovery.</p></section>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Operational Visibility</h2><p className="text-muted-foreground mt-2">Track sync lag, error rates and reconciliation exceptions with clear escalation flows.</p></section>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss Integration Architecture</Link>
          </Button>
      </article>
    </Section>
  );
}
