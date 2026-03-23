import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "CRM Platforms — OnXeon" },
  description:
    "Platform-level CRM guidance across Salesforce, ServiceNow, Zoho and self-hosted CRM options.",
};

const platformMatrix = [
  {
    type: "Enterprise CRM",
    options: ["Salesforce", "ServiceNow", "Zoho CRM"],
    notes: "Best for mature teams needing deep workflow controls and enterprise ecosystem integration.",
  },
  {
    type: "Self-Hosted CRM",
    options: ["SuiteCRM", "EspoCRM", "Odoo CRM"],
    notes: "Best for cost-sensitive teams prioritizing data ownership and deployment control.",
  },
];

const crmPatterns = [
  "Lead-to-cash and quote workflows",
  "Customer support and SLA workflows",
  "CRM-ERP synchronization",
  "Revenue and pipeline reporting",
  "Role-based security and approvals",
  "Workflow automation and notifications",
];

const productLinks: Record<string, string> = {
  Salesforce: "/solutions/crm-platforms",
  ServiceNow: "/blog/servicenow-enterprise-workflows",
  "Zoho CRM": "/services/crm-solutions",
  SuiteCRM: "/services/crm-solutions",
  EspoCRM: "/services/crm-solutions",
  "Odoo CRM": "/services/erp-solutions",
};

export default function CrmPlatformsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/18 blur-3xl dark:bg-emerald-500/14" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <p className="relative z-10 text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Solution Detail
          </p>
          <h1 className="relative z-10 mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center">CRM Platforms</h1>
          <p className="relative z-10 mt-4 text-muted-foreground text-center max-w-3xl mx-auto text-sm leading-6 sm:text-base">
            Choose the CRM platform that matches your operating model, governance needs and appetite for ownership.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_14px_hsl(var(--brand)/0.24)]"
            >
              Arrange A Call
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {platformMatrix.map((group) => (
            <div
              key={group.type}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <h2 className="text-xl font-semibold">{group.type}</h2>
              <div className="flex flex-wrap gap-2 pt-3">
                {group.options.map((item) => (
                  <Link
                    key={item}
                    href={productLinks[item] || "/services/crm-solutions"}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-green-300 hover:text-foreground hover:shadow-sm hover:shadow-green-200/30 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/25"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{group.notes}</p>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="text-xl font-semibold">Common CRM Implementation Patterns</h2>
          <div className="grid gap-2 pt-3 sm:grid-cols-2">
            {crmPatterns.map((item) => (
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
            <Link href="/contact#book">Arrange A CRM Consultation</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services/crm-solutions">View CRM Services</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
