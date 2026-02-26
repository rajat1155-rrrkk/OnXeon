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

export default function SolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center">Solutions</h1>
          <p className="relative z-10 mt-3 text-muted-foreground max-w-3xl mx-auto text-center">
            Platform-specific architecture and implementation options for enterprise SaaS and affordable self-hosted stacks.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href}>
              <Card className="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
                <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
