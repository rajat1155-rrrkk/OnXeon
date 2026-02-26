import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "System Integration — OnXeon" },
  description:
    "Integration design across CRM, ERP, cloud and self-hosted systems using API and event-driven patterns.",
};

const integrationPatterns = [
  {
    title: "CRM ↔ ERP",
    text: "Sales, order, invoicing and customer data synchronization with controlled mapping and retries.",
  },
  {
    title: "ERP ↔ Cloud",
    text: "Operational and analytics data flows into cloud platforms with governance and traceability.",
  },
  {
    title: "Internal Tools",
    text: "Integration between ticketing, collaboration, identity and custom business applications.",
  },
];

const integrationStacks = [
  {
    heading: "Enterprise Ecosystem",
    items: ["Salesforce", "SAP", "ServiceNow", "AWS", "Azure", "GCP"],
  },
  {
    heading: "Self-Hosted Ecosystem",
    items: ["ERPNext", "Odoo", "Plane", "Nextcloud", "PostgreSQL", "Docker"],
  },
];

export default function SystemIntegrationPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center">System Integration</h1>
          <p className="relative z-10 mt-3 text-muted-foreground text-center max-w-3xl mx-auto">
            Clean integrations across OEM platforms and open self-hosted tools, designed for reliability,
            observability and maintainable long-term operations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {integrationPatterns.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30"
            >
              <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {integrationStacks.map((stack) => (
            <div
              key={stack.heading}
              className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30"
            >
              <h2 className="text-xl font-semibold">{stack.heading}</h2>
              <div className="grid gap-2 pt-3 sm:grid-cols-2">
                {stack.items.map((item) => (
                  <div key={item} className="rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Discuss Integration Needs</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/solutions">See All Solutions</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
