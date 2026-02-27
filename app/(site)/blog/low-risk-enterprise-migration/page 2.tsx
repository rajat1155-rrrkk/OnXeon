import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Low-Risk Enterprise Migration — OnXeon Blog" },
  description:
    "Migration planning approach for enterprise systems with phased rollout, validation and fallback strategy.",
};

export default function LowRiskEnterpriseMigrationPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Planning a Low-Risk Enterprise Migration</h1>
          <p className="text-muted-foreground">How to reduce migration risk through staging, validation and operational readiness.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Assess</h2><p className="text-muted-foreground mt-2">Baseline system dependencies, data quality and rollout constraints.</p></section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Pilot</h2><p className="text-muted-foreground mt-2">Run controlled pilots with fallback plans and business sign-off gates.</p></section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Scale</h2><p className="text-muted-foreground mt-2">Execute phased migration with post-go-live monitoring and stabilization.</p></section>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Plan Your Migration</Link>
          </Button>
      </article>
    </Section>
  );
}
