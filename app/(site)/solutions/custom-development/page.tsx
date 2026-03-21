import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Custom Development — OnXeon" },
  description:
    "Custom development for enterprise platform extensions, workflow automations, and internal tools integrated with CRM, ERP and cloud systems.",
};

const deliveryAreas = [
  {
    title: "Platform Extensions",
    text: "Custom modules, workflow logic and UI extensions where standard SaaS capabilities are not sufficient.",
  },
  {
    title: "Business Automation",
    text: "Automation for approvals, handoffs, notifications and operational controls across teams.",
  },
  {
    title: "Internal Apps & Portals",
    text: "Targeted internal tools integrated with CRM, ERP and service platforms for daily operations.",
  },
];

const engineeringApproach = [
  "Architecture aligned to existing CRM/ERP/cloud stack",
  "API-first integration with controlled contracts",
  "Security and role-based access from day one",
  "Operational runbooks and maintainable handover",
  "Incremental rollout with measurable milestones",
  "Long-term support and enhancement roadmap",
];

export default function CustomDevelopmentPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/18 blur-3xl dark:bg-emerald-500/14" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <p className="relative z-10 text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Solution Detail
          </p>
          <h1 className="relative z-10 mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center">Custom Development</h1>
          <p className="relative z-10 mt-4 text-muted-foreground text-center max-w-3xl mx-auto text-sm leading-6 sm:text-base">
            Targeted software delivery for situations where standard platform capability is not enough, without compromising the broader enterprise architecture.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:scale-[1.02] hover:border-brand/55 hover:bg-brand/18 hover:text-brand hover:shadow-lg hover:shadow-brand/20"
            >
              Schedule A Call
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {deliveryAreas.map((area) => (
            <div
              key={area.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
              <h2 className="font-semibold">{area.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm">{area.text}</p>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="text-xl font-semibold">Engineering Approach</h2>
          <div className="grid gap-2 pt-3 sm:grid-cols-2">
            {engineeringApproach.map((item) => (
              <div key={item} className="rounded-lg border border-border/70 bg-background/70 p-3 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Discuss Your Custom Build</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/solutions/system-integration">See Integration Patterns</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
