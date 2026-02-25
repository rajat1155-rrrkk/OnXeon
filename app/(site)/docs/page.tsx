import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Documentation — OnXeon" },
  description:
    "Documentation for OnXeon delivery approach, engagement model, implementation lifecycle and support operations.",
};

const sections = [
  {
    title: "Implementation Lifecycle",
    description:
      "Discovery, solution design, implementation, testing and handover with practical governance.",
  },
  {
    title: "Integration Standards",
    description:
      "Reliable API, data mapping and error-handling patterns for CRM, ERP and internal systems.",
  },
  {
    title: "Runbook & Support",
    description:
      "Operational runbooks, incident response flow and long-term maintenance process.",
  },
  {
    title: "Architecture Decisions",
    description:
      "Vendor-neutral design tradeoffs for cloud and self-hosted enterprise platforms.",
  },
];

export default function DocsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-10">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">Documentation</h1>
          <p className="text-muted-foreground">
            How OnXeon plans, builds and supports enterprise systems across CRM,
            ERP, cloud and self-hosted environments.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="rounded-xl border p-6 bg-card space-y-3">
          <h2 className="text-xl font-semibold">Need a specific implementation guide?</h2>
          <p className="text-muted-foreground">
            We can provide architecture notes, rollout plans and integration
            runbooks tailored to your platform stack.
          </p>
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
