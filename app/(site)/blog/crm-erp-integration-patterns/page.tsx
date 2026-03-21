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
      <article className="mx-auto max-w-4xl space-y-8 py-24">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -right-12 top-0 h-44 w-44 rounded-full bg-brand/10 blur-3xl dark:bg-brand/12" />
          <div className="relative z-10 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">OnXeon Journal</p>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Integration Patterns for CRM and ERP Systems
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              A practical architecture model for keeping customer, commercial and operational data aligned without
              creating fragility downstream.
            </p>
            <div>
              <Link
                href="/contact#book"
                className="inline-flex items-center rounded-full border border-brand/25 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/45 hover:text-brand dark:bg-white/5"
              >
                Discuss Integration Design
              </Link>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="font-semibold">1. Define System-of-Record Ownership</h2>
          <p className="text-muted-foreground mt-2">
            Explicit ownership removes conflict and reduces duplicate updates. Define which platform owns each object
            and field set before integration build starts.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Leads and opportunity lifecycle often originate in CRM</li>
            <li>Orders, invoices and inventory usually belong in ERP</li>
            <li>Reference data needs clear authority and refresh strategy</li>
          </ul>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
            <h2 className="font-semibold">2. Reliable Delivery Patterns</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Idempotent writes to prevent duplicate transactions</li>
              <li>Retry strategy with exponential backoff and max attempts</li>
              <li>Dead-letter queue for non-recoverable failures</li>
              <li>Replay tooling for controlled incident recovery</li>
            </ul>
          </section>

          <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
            <h2 className="font-semibold">3. Observability Standards</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Correlation IDs across CRM, middleware and ERP</li>
              <li>Error classification by business impact</li>
              <li>Queue lag and sync latency thresholds</li>
              <li>Reconciliation dashboards for key records</li>
            </ul>
          </section>
        </div>

        <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="font-semibold">4. Integration Change Control</h2>
          <p className="text-muted-foreground mt-2">
            Use versioned contracts and structured release gates. Most integration outages happen due to unmanaged field
            changes or undocumented assumptions.
          </p>
        </section>

        <Button
          variant="default"
          asChild
          className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Link href="/contact#book">Discuss Integration Architecture</Link>
        </Button>
      </article>
    </Section>
  );
}
