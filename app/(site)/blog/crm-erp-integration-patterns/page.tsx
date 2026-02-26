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
        <header className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/25" />
          <div className="relative z-10 space-y-4">
            <p className="text-sm text-muted-foreground">OnXeon Blog</p>
            <h1 className="text-3xl md:text-4xl font-semibold">Integration Patterns for CRM and ERP Systems</h1>
            <p className="text-muted-foreground">
              A practical architecture model to keep CRM and ERP data accurate, traceable and resilient under load.
            </p>
            <div>
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_14px_hsl(var(--brand)/0.24)]"
              >
                Sync Systems Faster
              </Link>
            </div>
          </div>
        </header>

        <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
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
          <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="font-semibold">2. Reliable Delivery Patterns</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Idempotent writes to prevent duplicate transactions</li>
              <li>Retry strategy with exponential backoff and max attempts</li>
              <li>Dead-letter queue for non-recoverable failures</li>
              <li>Replay tooling for controlled incident recovery</li>
            </ul>
          </section>

          <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="font-semibold">3. Observability Standards</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Correlation IDs across CRM, middleware and ERP</li>
              <li>Error classification by business impact</li>
              <li>Queue lag and sync latency thresholds</li>
              <li>Reconciliation dashboards for key records</li>
            </ul>
          </section>
        </div>

        <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
          <h2 className="font-semibold">4. Integration Change Control</h2>
          <p className="text-muted-foreground mt-2">
            Use versioned contracts and structured release gates. Most integration outages happen due to unmanaged field
            changes or undocumented assumptions.
          </p>
        </section>

        <Button
          variant="default"
          asChild
          className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
        >
          <Link href="/contact#book">Discuss Integration Architecture</Link>
        </Button>
      </article>
    </Section>
  );
}
