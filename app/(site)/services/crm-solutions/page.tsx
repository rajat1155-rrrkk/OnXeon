import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "CRM Solutions — OnXeon" },
  description:
    "CRM implementation services across Salesforce and ServiceNow with affordable self-hosted alternatives for growing teams.",
};

const enterpriseCrm = [
  {
    name: "Salesforce",
    detail:
      "Sales Cloud and Service Cloud implementation, automation, reporting and governance.",
  },
  {
    name: "ServiceNow",
    detail:
      "Customer workflows, ticketing and process automation integrated with internal operations.",
  },
  {
    name: "Zoho CRM",
    detail:
      "Fast deployment for sales teams with workflow automation and business reporting.",
  },
];

const selfHostedCrm = [
  {
    name: "SuiteCRM",
    detail: "Self-hosted CRM for sales and service workflows with lower recurring license costs.",
  },
  {
    name: "EspoCRM",
    detail: "Lean CRM stack for startups and internal teams needing full data ownership.",
  },
  {
    name: "Odoo CRM",
    detail: "CRM plus ERP-ready foundation for unified business operations.",
  },
];

const deliverySections = [
  {
    title: "Discovery & Design",
    description:
      "Process mapping, field model design, lifecycle stages, user roles and reporting requirements.",
  },
  {
    title: "Implementation & Integration",
    description:
      "CRM setup, custom objects, workflow rules, integrations to ERP, email, telephony and internal systems.",
  },
  {
    title: "Adoption & Enhancements",
    description:
      "Training, adoption dashboards, operational support, and iterative improvements after go-live.",
  },
];

export default function CrmSolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center">CRM Solutions</h1>
          <p className="relative z-10 mt-3 text-muted-foreground text-center max-w-3xl mx-auto">
            We implement and optimize CRM systems with a vendor-neutral approach: enterprise platforms where needed,
            self-hosted alternatives where cost control and ownership matter.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/60 hover:bg-brand/18 hover:text-brand hover:shadow-[0_0_16px_hsl(var(--brand)/0.24)]"
            >
              Ignite CRM Flow
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card space-y-4 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="text-xl font-semibold">Enterprise CRM Platforms</h2>
            <div className="space-y-3">
              {enterpriseCrm.map((item) => (
                <div key={item.name} className="rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card space-y-4 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="text-xl font-semibold">Affordable Self-Hosted Options</h2>
            <div className="space-y-3">
              {selfHostedCrm.map((item) => (
                <div key={item.name} className="rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {deliverySections.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30"
            >
              <div className="pointer-events-none absolute inset-y-0 left-[-40%] w-[36%] -skew-x-12 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 transition-all duration-700 group-hover:left-[122%] group-hover:opacity-100 dark:via-white/20" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card space-y-3 transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <h2 className="text-xl font-semibold">Need CRM aligned with ERP and cloud systems?</h2>
          <p className="text-muted-foreground">
            We build complete flows across CRM, ERP, billing, support and analytics. See our platform-focused view or
            start with a consultation.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              variant="default"
              asChild
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
            >
              <Link href="/contact#book">Discuss CRM Project</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/crm-platforms">View CRM Platforms</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
