import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "System Integration — OnXeon" },
  description: "System integration patterns connecting CRM, ERP and internal business services.",
};

export default function SystemIntegrationPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">System Integration</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">Create dependable integrations across enterprise platforms using APIs, events and controlled data mappings.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">API Integrations</h2><p className="text-muted-foreground mt-2">Stable interfaces, auth strategy and retry-safe workflows.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Data Pipelines</h2><p className="text-muted-foreground mt-2">Validated transformations and scheduled sync operations.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Monitoring</h2><p className="text-muted-foreground mt-2">Alerts, observability and error remediation runbooks.</p></div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss Integration Needs</Link>
          </Button>
      </div>
    </Section>
  );
}
