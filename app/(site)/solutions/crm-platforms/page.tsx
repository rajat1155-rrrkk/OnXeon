import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "CRM Platforms — OnXeon" },
  description: "CRM platform implementation services for enterprise sales and service operations.",
};

export default function CrmPlatformsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">CRM Platforms</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">Salesforce, Zoho and ServiceNow delivery for practical business workflows and measurable operations outcomes.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Use Cases</h2><p className="text-muted-foreground mt-2">Lead-to-cash, service workflows, escalation handling and cross-team reporting.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Integration Patterns</h2><p className="text-muted-foreground mt-2">CRM to ERP, CRM to support platforms and event-driven sync flows.</p></div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Book CRM Consultation</Link>
          </Button>
      </div>
    </Section>
  );
}
