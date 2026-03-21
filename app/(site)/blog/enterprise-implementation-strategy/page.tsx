import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Enterprise Implementation Strategy — OnXeon Blog" },
  description:
    "A practical rollout framework for enterprise CRM and ERP implementations with lower delivery risk and stronger adoption.",
};

export default function EnterpriseImplementationStrategyPage() {
  return (
    <Section>
      <article className="mx-auto max-w-4xl space-y-8 py-24">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -right-12 top-0 h-44 w-44 rounded-full bg-brand/10 blur-3xl dark:bg-brand/12" />
          <div className="relative z-10 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">OnXeon Journal</p>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Enterprise Implementation Strategy: A Practical Rollout Framework
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              How to scope, phase and deliver enterprise implementation programmes with clearer ownership, calmer
              delivery governance and measurable outcomes.
            </p>
          </div>
        </header>
        <section className="rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="relative z-10 text-xl font-semibold">1. Define Business Outcomes First</h2>
          <p className="relative z-10 text-muted-foreground mt-2">Anchor scope to operational metrics such as cycle time, ticket resolution, quote accuracy and reporting reliability.</p>
        </section>
        <section className="rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="relative z-10 text-xl font-semibold">2. Deliver in Controlled Phases</h2>
          <p className="relative z-10 text-muted-foreground mt-2">Use staged rollout with pilot users, controlled data migration windows and measurable go-live gates.</p>
        </section>
        <section className="rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="relative z-10 text-xl font-semibold">3. Plan for Long-Term Ownership</h2>
          <p className="relative z-10 text-muted-foreground mt-2">Document architecture decisions, integration contracts and support runbooks before handover.</p>
        </section>
        <Button
          variant="default"
          asChild
          className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Link href="/contact#book">Discuss Your Programme</Link>
        </Button>
      </article>
    </Section>
  );
}
