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
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Enterprise Implementation Strategy: A Practical Rollout Framework</h1>
          <p className="text-muted-foreground">How to scope, phase and deliver enterprise implementation programs with clear ownership and measurable outcomes.</p>
        </header>
        <section className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-transparent transition-all duration-500 group-hover:from-green-100/35 dark:group-hover:from-emerald-500/12" />
          <h2 className="relative z-10 text-xl font-semibold">1. Define Business Outcomes First</h2>
          <p className="relative z-10 text-muted-foreground mt-2">Anchor scope to operational metrics such as cycle time, ticket resolution, quote accuracy and reporting reliability.</p>
        </section>
        <section className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-transparent transition-all duration-500 group-hover:from-green-100/35 dark:group-hover:from-emerald-500/12" />
          <h2 className="relative z-10 text-xl font-semibold">2. Deliver in Controlled Phases</h2>
          <p className="relative z-10 text-muted-foreground mt-2">Use staged rollout with pilot users, controlled data migration windows and measurable go-live gates.</p>
        </section>
        <section className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-transparent transition-all duration-500 group-hover:from-green-100/35 dark:group-hover:from-emerald-500/12" />
          <h2 className="relative z-10 text-xl font-semibold">3. Plan for Long-Term Ownership</h2>
          <p className="relative z-10 text-muted-foreground mt-2">Document architecture decisions, integration contracts and support runbooks before handover.</p>
        </section>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss Your Implementation</Link>
          </Button>
      </article>
    </Section>
  );
}
