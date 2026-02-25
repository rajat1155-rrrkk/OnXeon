import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Cloud Platforms — OnXeon" },
  description: "Cloud platform architecture and deployment patterns for enterprise systems.",
};

export default function CloudPlatformsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Cloud Platforms</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">AWS, Azure and GCP platform engineering for reliable enterprise delivery.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Landing Zone Setup</h2><p className="text-muted-foreground mt-2">Accounts, network boundaries, IAM controls and baseline security policy.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Deployment & Operations</h2><p className="text-muted-foreground mt-2">CI/CD integration, observability and resilience-focused runbooks.</p></div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss Cloud Architecture</Link>
          </Button>
      </div>
    </Section>
  );
}
