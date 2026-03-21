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
      <article className="mx-auto max-w-4xl space-y-8 py-24">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -right-12 top-0 h-44 w-44 rounded-full bg-brand/10 blur-3xl dark:bg-brand/12" />
          <div className="relative z-10 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">OnXeon Journal</p>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Choosing Between Enterprise SaaS and Self-Hosted Platforms
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              A practical decision framework for balancing speed, cost, control and long-term maintainability across
              the systems your team will actually operate.
            </p>
            <div>
              <Link
                href="/contact#book"
                className="inline-flex items-center rounded-full border border-brand/25 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/45 hover:text-brand dark:bg-white/5"
              >
                Review Your Platform Options
              </Link>
            </div>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
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

          <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
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

        <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
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

        <section className="relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
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
          className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Link href="/contact#book">Evaluate Your Platform Choice</Link>
        </Button>
      </article>
    </Section>
  );
}
