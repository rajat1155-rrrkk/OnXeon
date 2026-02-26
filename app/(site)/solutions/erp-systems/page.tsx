import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "ERP Systems — OnXeon" },
  description:
    "ERP system strategy across SAP and self-hosted options including ERPNext and Odoo.",
};

const erpOptions = [
  {
    title: "Enterprise ERP",
    stack: ["SAP", "Enterprise-grade module ecosystems"],
    details:
      "Designed for organizations requiring strict governance, complex supply chain controls and multi-entity operations.",
  },
  {
    title: "Self-Hosted ERP",
    stack: ["ERPNext", "Odoo", "Other modular open-source stacks"],
    details:
      "Designed for businesses that need ownership, affordability and custom workflows without heavy license overhead.",
  },
];

const erpCapabilities = [
  "Financial workflows and reconciliation",
  "Procurement and inventory controls",
  "Manufacturing and fulfillment orchestration",
  "Data migration and master data governance",
  "Role-based security and compliance logging",
  "Cross-system integration with CRM and cloud services",
];

export default function ErpSystemsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center">ERP Systems</h1>
          <p className="relative z-10 mt-3 text-muted-foreground text-center max-w-3xl mx-auto">
            ERP architecture decisions driven by fit, complexity and budget. We implement enterprise suites and open
            self-hosted stacks with the same delivery rigor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {erpOptions.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <div className="flex flex-wrap gap-2 pt-3">
                {item.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <h2 className="text-xl font-semibold">Typical ERP Capabilities We Deliver</h2>
          <div className="grid gap-2 pt-3 sm:grid-cols-2">
            {erpCapabilities.map((item) => (
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
            <Link href="/contact#book">Discuss ERP Integration</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services/erp-solutions">View ERP Services</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
