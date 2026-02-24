import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Solutions — OnXeon" },
  description:
    "OnXeon solutions across Salesforce, SAP, self-hosted platforms, and integration architecture.",
};

const solutions = [
  {
    title: "Salesforce",
    href: "/solutions/salesforce",
    description: "Implementation and integration for sales and service operations.",
  },
  {
    title: "SAP",
    href: "/solutions/sap",
    description: "Enterprise integrations and data flows around SAP landscapes.",
  },
  {
    title: "Open Source & Self-hosted",
    href: "/solutions/open-source",
    description: "Plane, Nextcloud, PostgreSQL and Docker in production-ready setups.",
  },
  {
    title: "Platform Integrations",
    href: "/solutions/integrations",
    description: "Middleware and API patterns for reliable cross-system workflows.",
  },
];

export default function SolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Solutions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center">
          Platform-focused solutions for enterprise and self-hosted environments.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href}>
              <Card className="h-full hover:shadow-md transition">
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
