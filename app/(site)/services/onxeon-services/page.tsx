import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "OnXeon Services — OnXeon" },
  description:
    "Enterprise implementation, system integration, open-source deployment and long-term support services from OnXeon.",
};

const serviceAreas = [
  {
    title: "Enterprise Implementations",
    description:
      "End-to-end implementation and customization of Salesforce, SAP and related enterprise platforms.",
    href: "/services",
  },
  {
    title: "System Integrations",
    description:
      "Reliable integration across CRM, ERP, OEM platforms and internal tools using maintainable patterns.",
    href: "/services",
  },
  {
    title: "Open Source & Self-Hosted",
    description:
      "Deployment and operations support for tools like Plane, ERPNext, Odoo, Nextcloud, PostgreSQL and Docker.",
    href: "/services",
  },
  {
    title: "Enhancements & Support",
    description:
      "Ongoing system improvements, automation, monitoring and long-term technical support.",
    href: "/contact#book",
  },
];

export default function OnXeonServicesPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          OnXeon Services
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center">
          Practical enterprise delivery for CRM, ERP, cloud and self-hosted
          systems with a vendor-neutral approach.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {serviceAreas.map((item) => (
            <Link key={item.title} href={item.href}>
              <Card className="h-full hover:shadow-md transition">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center pt-4">
          <Button variant="default" asChild>
            <Link
            href="/contact#book"
            
          >
            Book a Consultation
          </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
