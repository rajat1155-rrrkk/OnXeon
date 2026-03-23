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

const productLinks: Record<string, string> = {
  Salesforce: "/solutions/crm-platforms",
  SAP: "/solutions/erp-systems",
  ServiceNow: "/blog/servicenow-enterprise-workflows",
  AWS: "/solutions/cloud-platforms",
  Azure: "/solutions/cloud-platforms",
  GCP: "/solutions/cloud-platforms",
  ERPNext: "/services/erp-solutions",
  Odoo: "/services/erp-solutions",
  Plane: "/blog/self-hosted-platform-operations",
  Nextcloud: "/services/cloud-solutions",
  PostgreSQL: "/services/cloud-solutions",
  Docker: "/services/cloud-solutions",
};

export default function SystemIntegrationPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/18 blur-3xl dark:bg-emerald-500/14" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <p className="relative z-10 text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Solution Detail
          </p>
          <h1 className="relative z-10 mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center">System Integration</h1>
          <p className="relative z-10 mt-4 text-muted-foreground text-center max-w-3xl mx-auto text-sm leading-6 sm:text-base">
            Integration architecture across enterprise and self-hosted systems, designed for reliability, observability and long-term operational clarity.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:scale-[1.02] hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-lg hover:shadow-brand/20"
            >
              Arrange A Call
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {integrationPatterns.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
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
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <h2 className="text-xl font-semibold">{stack.heading}</h2>
              <div className="grid gap-2 pt-3 sm:grid-cols-2">
                {stack.items.map((item) => (
                  <Link
                    key={item}
                    href={productLinks[item] || "/solutions/system-integration"}
                    className="group/item rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-green-300 hover:text-foreground hover:shadow-sm hover:shadow-green-200/30 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/25"
                  >
                    {item}
                  </Link>
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
            <Link href="/contact#book">Discuss An Integration Programme</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/solutions">See All Solutions</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
