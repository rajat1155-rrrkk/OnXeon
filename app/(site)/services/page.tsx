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
    title: "Enterprise Implementations",
    href: "/services/implementations",
    description:
      "Reliable implementations of Salesforce, SAP and related enterprise systems.",
  },
  {
    title: "System Integrations",
    href: "/services/integrations",
    description:
      "Connect CRM, ERP and internal tools with maintainable integration patterns.",
  },
  {
    title: "Open Source Solutions",
    href: "/services/open-source",
    description:
      "Deploy and customize self-hosted alternatives for better cost control.",
  },
  {
    title: "Enhancements & Support",
    href: "/services/support",
    description:
      "Long-term support and incremental improvements for existing systems.",
  },
];

export default function ServicesPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center">
          Practical delivery services for enterprise implementation and modernization.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card className="h-full hover:shadow-md transition">
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
