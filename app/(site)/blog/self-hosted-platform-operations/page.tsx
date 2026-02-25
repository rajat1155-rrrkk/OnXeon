import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Self Hosted Platform Operations — OnXeon Blog" },
  description:
    "Operational practices for running self-hosted enterprise platforms with security, backup and reliability controls.",
};

export default function SelfHostedPlatformOperationsPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Operating Self-Hosted Platforms in Production</h1>
          <p className="text-muted-foreground">How to run Plane, ERPNext, Odoo and similar platforms with stable day-2 operations.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Security Baseline</h2><p className="text-muted-foreground mt-2">Access controls, patch cadence, secret management and audit readiness.</p></section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Reliability Baseline</h2><p className="text-muted-foreground mt-2">Backups, restore testing, uptime monitoring and incident routing.</p></section>
        </div>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Operate with Confidence</h2><p className="text-muted-foreground mt-2">Define ownership, maintenance windows and documented support playbooks.</p></section>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Set Up Self-Hosted Ops</Link>
          </Button>
      </article>
    </Section>
  );
}
