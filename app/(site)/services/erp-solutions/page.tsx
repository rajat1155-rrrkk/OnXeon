import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "ERP Solutions — OnXeon" },
  description:
    "ERP implementation services across SAP and modern self-hosted ERP options such as ERPNext and Odoo.",
};

const enterpriseErp = [
  {
    name: "SAP",
    detail: "Enterprise ERP architecture, module rollout, data migration and controlled integration.",
  },
  {
    name: "Microsoft Dynamics / Similar Suites",
    detail: "Business-process aligned implementation with finance and operations reporting.",
  },
];

const selfHostedErp = [
  {
    name: "ERPNext",
    detail: "Cost-efficient ERP for finance, inventory, procurement, manufacturing and HR.",
  },
  {
    name: "Odoo",
    detail: "Modular ERP approach with CRM, accounting, inventory and operations on one stack.",
  },
  {
    name: "Dolibarr",
    detail: "Lightweight self-hosted ERP/CRM option for smaller operational teams.",
  },
];

const deliveryModules = [
  "Finance and accounting setup",
  "Procurement and inventory flows",
  "Manufacturing and fulfillment workflows",
  "Master data migration and reconciliation",
  "Role-based access, audit trails and reporting",
  "ERP-to-CRM and ERP-to-cloud integrations",
];

export default function ErpSolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/18 blur-3xl dark:bg-emerald-500/14" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <p className="relative z-10 text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Service Detail
          </p>
          <h1 className="relative z-10 mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center">ERP Solutions</h1>
          <p className="relative z-10 mt-4 text-muted-foreground text-center max-w-3xl mx-auto text-sm leading-6 sm:text-base">
            ERP delivery built for operational control: enterprise-grade where scale and governance require it, self-hosted where ownership and cost discipline are priorities.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/55 hover:bg-brand/16 hover:text-brand before:absolute before:inset-y-0 before:left-[-58%] before:w-[42%] before:-skew-x-12 before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent before:opacity-0 before:transition-all before:duration-500 hover:before:left-[124%] hover:before:opacity-100 dark:before:via-white/25"
            >
              Arrange A Call
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 space-y-4 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="text-xl font-semibold">Enterprise ERP Platforms</h2>
            <div className="space-y-3">
              {enterpriseErp.map((item) => (
                <div key={item.name} className="rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 space-y-4 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="text-xl font-semibold">Self-Hosted ERP Alternatives</h2>
            <div className="space-y-3">
              {selfHostedErp.map((item) => (
                <div key={item.name} className="rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
          <h2 className="text-xl font-semibold">Typical ERP Scope</h2>
          <div className="grid gap-2 pt-3 sm:grid-cols-2">
            {deliveryModules.map((item) => (
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
            <Link href="/contact#book">Discuss An ERP Programme</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/solutions/erp-systems">Explore ERP Systems</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
