import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Documentation — OnXeon" },
  description:
    "Documentation for OnXeon delivery approach, engagement model, implementation lifecycle and support operations.",
};

const sections = [
  {
    title: "Implementation Lifecycle",
    description:
      "Discovery, solution design, implementation, testing and handover with practical governance.",
  },
  {
    title: "Integration Standards",
    description:
      "Reliable API, data mapping and error-handling patterns for CRM, ERP and internal systems.",
  },
  {
    title: "Runbook & Support",
    description:
      "Operational runbooks, incident response flow and long-term maintenance process.",
  },
  {
    title: "Architecture Decisions",
    description:
      "Vendor-neutral design tradeoffs for cloud and self-hosted enterprise platforms.",
  },
];

export default function DocsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-10">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 space-y-4 text-center max-w-3xl mx-auto shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl dark:bg-brand/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
            Delivery Notes
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">Documentation</h1>
          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            How OnXeon plans, delivers and supports enterprise systems across CRM, ERP, cloud and self-hosted environments.
          </p>
          <div>
            <Link
              href="/contact#book"
              className="inline-flex items-center rounded-full border border-brand/25 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/45 hover:text-brand dark:bg-white/5"
            >
              Request A Guide
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((item) => (
            <Card key={item.title} className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 bg-card space-y-3 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="text-xl font-semibold">Need a specific implementation guide?</h2>
          <p className="text-muted-foreground">
            We can provide architecture notes, rollout plans and integration
            runbooks tailored to your platform stack.
          </p>
          <Button
            variant="default"
            asChild
            className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/contact#book">Arrange A Consultation</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
