import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "OnXeon Services — OnXeon" },
  description:
    "Enterprise SaaS implementation and integration services with affordable self-hosted alternatives from OnXeon.",
};

const serviceAreas = [
  {
    title: "CRM Solutions",
    description:
      "Salesforce, ServiceNow and self-hosted CRM delivery with reporting, automation and integration.",
    href: "/services/crm-solutions",
  },
  {
    title: "ERP Solutions",
    description:
      "SAP and modular ERP implementations including ERPNext and Odoo for cost-efficient operations.",
    href: "/services/erp-solutions",
  },
  {
    title: "Cloud Solutions",
    description:
      "AWS, Azure, GCP and self-hosted infrastructure using Docker and open-source runtime stacks.",
    href: "/services/cloud-solutions",
  },
  {
    title: "System Integration",
    description:
      "API, event and workflow integrations connecting CRM, ERP, support and internal business tools.",
    href: "/solutions/system-integration",
  },
];

const productGroups = [
  {
    title: "Enterprise SaaS & OEM Platforms",
    items: ["Salesforce", "SAP", "ServiceNow", "AWS", "Azure", "GCP"],
  },
  {
    title: "Affordable Self-Hosted Stack",
    items: ["Plane", "ERPNext", "Odoo", "Nextcloud", "PostgreSQL", "Docker"],
  },
];

const productLinks: Record<string, string> = {
  Salesforce: "/solutions/crm-platforms",
  SAP: "/solutions/erp-systems",
  ServiceNow: "/blog/servicenow-enterprise-workflows",
  AWS: "/solutions/cloud-platforms",
  Azure: "/solutions/cloud-platforms",
  GCP: "/solutions/cloud-platforms",
  Plane: "/blog/self-hosted-platform-operations",
  ERPNext: "/services/erp-solutions",
  Odoo: "/services/erp-solutions",
  Nextcloud: "/services/cloud-solutions",
  PostgreSQL: "/services/cloud-solutions",
  Docker: "/services/cloud-solutions",
};

export default function OnXeonServicesPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center">OnXeon Services</h1>
          <p className="relative z-10 mt-3 text-muted-foreground max-w-3xl mx-auto text-center">
            Vendor-neutral delivery across enterprise SaaS platforms and affordable self-hosted alternatives. We
            design practical systems that are reliable today and maintainable long term.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="group/xeon inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:scale-[1.03] hover:border-brand/55 hover:bg-brand/18 hover:text-brand hover:shadow-lg hover:shadow-brand/20"
            >
              Activate Hybrid Edge
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {serviceAreas.map((item) => (
            <Link key={item.title} href={item.href}>
              <Card className="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
                <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.24),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.2),transparent_46%)]" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {productGroups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30"
            >
              <h2 className="text-xl font-semibold">{group.title}</h2>
              <div className="grid gap-2 pt-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <Link
                    key={item}
                    href={productLinks[item] || "/services/onxeon-services"}
                    className="group/item rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-green-300 hover:text-foreground hover:shadow-sm hover:shadow-green-200/30 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/25"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
