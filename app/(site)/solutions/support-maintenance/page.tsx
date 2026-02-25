import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Support & Maintenance — OnXeon" },
  description: "Ongoing support and maintenance for enterprise implementations and integrations.",
};

export default function SupportMaintenancePage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Support & Maintenance</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">Long-term support for production systems, integration reliability and continuous improvements.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Ongoing Improvements</h2><p className="text-muted-foreground mt-2">Small iterative upgrades, feature requests and process improvements.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Reliability Support</h2><p className="text-muted-foreground mt-2">Integration health checks, incident response and escalation handling.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Maintainability</h2><p className="text-muted-foreground mt-2">Codebase hygiene, documentation and operational ownership transfer.</p></div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss Support Model</Link>
          </Button>
      </div>
    </Section>
  );
}
