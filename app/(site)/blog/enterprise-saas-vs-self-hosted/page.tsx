import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Enterprise SaaS vs Self-Hosted — OnXeon Blog" },
  description:
    "Compare SaaS and self-hosted enterprise platform decisions across cost, control, operations and maintainability.",
};

export default function EnterpriseSaaSVsSelfHostedPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/25" />
          <div className="relative z-10 space-y-4">
            <p className="text-sm text-muted-foreground">OnXeon Blog</p>
            <h1 className="text-3xl md:text-4xl font-semibold">Choosing Between Enterprise SaaS and Self-Hosted Platforms</h1>
            <p className="text-muted-foreground">
              A practical decision framework for balancing speed, cost, control and long-term maintainability.
            </p>
            <div>
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_14px_hsl(var(--brand)/0.24)]"
              >
                Decide Your Platform Fast
              </Link>
            </div>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="font-semibold">When SaaS Is Usually Better</h2>
            <p className="text-muted-foreground mt-2">
              SaaS is often the right choice when speed of launch matters and internal operations capacity is limited.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Fast onboarding with managed upgrades</li>
              <li>Lower day-1 platform operations burden</li>
              <li>Strong vendor ecosystem and ready-made integrations</li>
              <li>Predictable support channels and SLA options</li>
            </ul>
          </section>

          <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="font-semibold">When Self-Hosted Is Usually Better</h2>
            <p className="text-muted-foreground mt-2">
              Self-hosted platforms are strong when cost control, customization and data ownership are strategic.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Lower long-term license exposure</li>
              <li>Greater control over data residency and compliance posture</li>
              <li>Deeper workflow customization possibilities</li>
              <li>Reduced platform lock-in over multi-year roadmaps</li>
            </ul>
          </section>
        </div>

        <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
          <h2 className="font-semibold">Use a 3-Year Decision Model</h2>
          <p className="text-muted-foreground mt-2">
            Compare options over 36 months instead of only year-1 cost. Include implementation, support effort,
            integration complexity and upgrade/migration overhead.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Total subscription or licensing costs</li>
            <li>Hosting, monitoring and backup costs</li>
            <li>Internal support team effort and required skills</li>
            <li>Cost of change for new workflows and integrations</li>
            <li>Exit cost if platform strategy changes</li>
          </ul>
        </section>

        <section className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
          <h2 className="font-semibold">Common Mistakes to Avoid</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Choosing only on first-year price</li>
            <li>Ignoring integration and reporting requirements early</li>
            <li>Underestimating data migration and user adoption effort</li>
            <li>Assuming vendor defaults match real business workflows</li>
          </ul>
        </section>

        <Button
          variant="default"
          asChild
          className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
        >
          <Link href="/contact#book">Evaluate Your Platform Choice</Link>
        </Button>
      </article>
    </Section>
  );
}
