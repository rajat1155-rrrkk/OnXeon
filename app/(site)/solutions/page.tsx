import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Solutions — OnXeon" },
  description:
    "OnXeon solutions across enterprise SaaS platforms, affordable self-hosted stacks, and integration architecture.",
};

const solutions = [
  {
    title: "CRM Platforms",
    href: "/solutions/crm-platforms",
    description: "Salesforce, ServiceNow and self-hosted CRM platform strategy.",
  },
  {
    title: "ERP Systems",
    href: "/solutions/erp-systems",
    description: "SAP and open ERP systems aligned to finance and operations.",
  },
  {
    title: "Cloud Platforms",
    href: "/solutions/cloud-platforms",
    description: "AWS, Azure, GCP and self-hosted deployment architecture.",
  },
  {
    title: "System Integration",
    href: "/solutions/system-integration",
    description: "Integration patterns across CRM, ERP, cloud and internal tools.",
  },
];

const solutionTracks = [
  {
    title: "Enterprise SaaS Track",
    description:
      "Salesforce, SAP, ServiceNow and cloud platform architecture for teams that need enterprise governance and scale.",
    links: [
      { label: "CRM Platforms", href: "/solutions/crm-platforms" },
      { label: "ERP Systems", href: "/solutions/erp-systems" },
      { label: "Cloud Platforms", href: "/solutions/cloud-platforms" },
    ],
  },
  {
    title: "Affordable Self-Hosted Track",
    description:
      "Open-source and self-hosted stacks designed to reduce license cost while preserving operational reliability.",
    links: [
      { label: "OnXeon Services", href: "/services/onxeon-services" },
      { label: "ERP Solutions", href: "/services/erp-solutions" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    ],
  },
];

const decisionPoints = [
  "Platform fit with current process maturity",
  "Integration depth with CRM, ERP and internal tools",
  "3-year cost model across license and operations",
  "Security, compliance and data residency requirements",
  "Internal ownership and long-term maintainability",
  "Migration risk and rollout complexity",
];

export default function SolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/18 blur-3xl dark:bg-emerald-500/14" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <p className="relative z-10 text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Strategic Paths
          </p>
          <h1 className="relative z-10 mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center">Solutions</h1>
          <p className="relative z-10 mt-4 text-muted-foreground max-w-3xl mx-auto text-center text-sm leading-6 sm:text-base">
            Platform and architecture options for enterprise SaaS, self-hosted systems and the integration layers that connect them cleanly.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="group/xeon inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:rotate-[-1deg] hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_14px_hsl(var(--brand)/0.22)]"
            >
              Discuss Your Options
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href}>
              <Card className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
                <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {solutionTracks.map((track) => (
            <Card
              key={track.title}
              className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/35 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
              <CardHeader className="space-y-3">
                <CardTitle>{track.title}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
                <div className="space-y-2">
                  {track.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-foreground transition-all duration-300 hover:translate-x-0.5 hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
          <CardHeader className="space-y-3">
            <CardTitle>How to Choose the Right Solution Path</CardTitle>
            <CardDescription>
              Use these criteria to decide between enterprise SaaS, self-hosted,
              or a hybrid architecture.
            </CardDescription>
            <div className="grid gap-2 sm:grid-cols-2">
              {decisionPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-lg border border-border/70 bg-background/70 p-3 text-sm text-muted-foreground"
                >
                  {point}
                </div>
              ))}
            </div>
          </CardHeader>
        </Card>
      </div>
    </Section>
  );
}
