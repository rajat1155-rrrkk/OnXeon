import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Cloud Solutions — OnXeon" },
  description:
    "Cloud architecture and deployment services across AWS, Azure and GCP with secure operations.",
};

export default function CloudSolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Cloud Solutions</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">
          Build and operate enterprise workloads on AWS, Azure and GCP with
          predictable, maintainable infrastructure.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-card space-y-2">
            <h2 className="text-xl font-semibold">Architecture</h2>
            <p className="text-muted-foreground">Landing zones, network segmentation, IAM policy and workload partitioning.</p>
          </div>
          <div className="rounded-xl border p-6 bg-card space-y-2">
            <h2 className="text-xl font-semibold">Operations</h2>
            <p className="text-muted-foreground">Monitoring, backup, patching, deployment automation and incident response support.</p>
          </div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss Cloud Project</Link>
          </Button>
      </div>
    </Section>
  );
}
