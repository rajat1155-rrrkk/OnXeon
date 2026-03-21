import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Services — OnXeon" },
  description:
    "OnXeon services for enterprise implementations, integrations, open-source solutions, and long-term support.",
};

const services = [
  {
    title: "OnXeon Services",
    href: "/services/onxeon-services",
    description:
      "End-to-end enterprise implementation and modernization services.",
  },
  {
    title: "CRM Solutions",
    href: "/services/crm-solutions",
    description:
      "Salesforce, ServiceNow and affordable self-hosted CRM delivery.",
  },
  {
    title: "ERP Solutions",
    href: "/services/erp-solutions",
    description:
      "SAP, ERPNext and Odoo implementations aligned to operations.",
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description:
      "AWS, Azure, GCP and self-hosted cloud infrastructure execution.",
  },
];

export default function ServicesPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/18 blur-3xl dark:bg-emerald-500/14" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <p className="relative z-10 text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Advisory And Delivery
          </p>
          <h1 className="relative z-10 mt-3 text-3xl font-semibold tracking-[-0.03em] text-center md:text-4xl">Services</h1>
          <p className="relative z-10 mt-4 text-muted-foreground max-w-3xl mx-auto text-center text-sm leading-6 sm:text-base">
            Delivery across enterprise SaaS, integration programmes and carefully considered self-hosted systems, structured for long-term operating confidence.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="group/xeon inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-brand/18 hover:text-brand hover:shadow-md hover:shadow-brand/25"
            >
              Schedule A Call
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
                <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
