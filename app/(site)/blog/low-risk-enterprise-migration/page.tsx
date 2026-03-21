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
      <article className="mx-auto max-w-4xl space-y-8 py-24">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -right-12 top-0 h-44 w-44 rounded-full bg-brand/10 blur-3xl dark:bg-brand/12" />
          <div className="relative z-10 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">OnXeon Journal</p>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Planning a Low-Risk Enterprise Migration
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              How to reduce migration risk through staging, validation and operational readiness rather than relying on
              a single high-pressure cutover moment.
            </p>
          </div>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          <section className="rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"><h2 className="font-semibold">Assess</h2><p className="mt-2 text-muted-foreground">Baseline system dependencies, data quality and rollout constraints.</p></section>
          <section className="rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"><h2 className="font-semibold">Pilot</h2><p className="mt-2 text-muted-foreground">Run controlled pilots with fallback plans and business sign-off gates.</p></section>
          <section className="rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"><h2 className="font-semibold">Scale</h2><p className="mt-2 text-muted-foreground">Execute phased migration with post-go-live monitoring and stabilization.</p></section>
        </div>
        <Button
          variant="default"
          asChild
          className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Link href="/contact#book">Plan Your Migration</Link>
        </Button>
      </article>
    </Section>
  );
}
