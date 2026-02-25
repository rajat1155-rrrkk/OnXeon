import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Case Studies — OnXeon" },
  description:
    "Example enterprise implementation and integration projects delivered by OnXeon.",
};

const studies = [
  {
    title: "CRM Rollout for Multi-Team Operations",
    description:
      "Implemented Salesforce workflows and integrated service operations across teams.",
  },
  {
    title: "ERP Integration for Finance and Fulfillment",
    description:
      "Connected ERP workflows with CRM and internal tooling for reliable data flow.",
  },
  {
    title: "Open-Source Migration for Cost Reduction",
    description:
      "Replaced selected SaaS dependencies with self-hosted platforms and support model.",
  },
];

export default function CaseStudiesPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">Case Studies</h1>
          <p className="text-muted-foreground">
            Representative project types and outcomes from enterprise delivery engagements.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {studies.map((study) => (
            <Card key={study.title} className="h-full">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="default" asChild>
            <Link href="/contact#book" >
            Discuss Similar Project
          </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
