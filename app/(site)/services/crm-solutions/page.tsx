import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "CRM Solutions — OnXeon" },
  description:
    "CRM implementation and customization services for Salesforce, Zoho and ServiceNow ecosystems.",
};

export default function CrmSolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">CRM Solutions</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">
          Implementation, customization and integration of CRM platforms for
          sales, support and revenue operations.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-card space-y-2">
            <h2 className="text-xl font-semibold">What We Deliver</h2>
            <p className="text-muted-foreground">Sales and service workflows, role-based access, automation, reporting and operational governance.</p>
          </div>
          <div className="rounded-xl border p-6 bg-card space-y-2">
            <h2 className="text-xl font-semibold">Platforms</h2>
            <p className="text-muted-foreground">Salesforce, Zoho and ServiceNow implementations with integration to ERP, finance and internal tools.</p>
          </div>
        </div>
        <div className="rounded-xl border p-6 bg-card space-y-3">
          <h2 className="text-xl font-semibold">Delivery Model</h2>
          <p className="text-muted-foreground">Discovery, solution blueprint, staged rollout, user adoption support and long-term enhancement.</p>
          <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss CRM Project</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
