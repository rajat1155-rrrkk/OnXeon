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
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/18 blur-3xl dark:bg-emerald-500/14" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <p className="relative z-10 text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Service Detail
          </p>
          <h1 className="relative z-10 mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center">CRM Solutions</h1>
          <p className="relative z-10 mt-4 text-muted-foreground text-center max-w-3xl mx-auto text-sm leading-6 sm:text-base">
            CRM delivery with a vendor-neutral lens: enterprise platforms where governance and scale demand them, self-hosted alternatives where ownership and cost discipline matter more.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/60 hover:bg-brand/18 hover:text-brand hover:shadow-[0_0_16px_hsl(var(--brand)/0.24)]"
            >
              Schedule A Call
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 space-y-4 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
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

          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 space-y-4 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
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
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <div className="pointer-events-none absolute inset-y-0 left-[-40%] w-[36%] -skew-x-12 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 transition-all duration-700 group-hover:left-[122%] group-hover:opacity-100 dark:via-white/20" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 space-y-3 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="text-xl font-semibold">Need CRM aligned with ERP and cloud systems?</h2>
          <p className="text-muted-foreground">
            We design complete flows across CRM, ERP, billing, support and analytics. Review the platform view or start with an advisory call.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              variant="default"
              asChild
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
            >
              <Link href="/contact#book">Discuss Your CRM Programme</Link>
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
