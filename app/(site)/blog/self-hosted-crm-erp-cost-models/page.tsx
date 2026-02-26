import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Self-Hosted CRM ERP Cost Models — OnXeon Blog" },
  description:
    "How to compare SaaS licensing and self-hosted CRM/ERP cost structures over a practical multi-year horizon.",
};

export default function SelfHostedCrmErpCostModelsPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Cost Modeling for Self-Hosted CRM and ERP</h1>
          <p className="text-muted-foreground">
            A practical framework to evaluate enterprise SaaS subscriptions against self-hosted CRM and ERP operating
            models.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Direct Cost Inputs</h2>
            <p className="text-muted-foreground mt-2">
              Include licenses, hosting, support effort, migration cost, monitoring and backup operations across a
              3-year model.
            </p>
          </section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Risk and Flexibility</h2>
            <p className="text-muted-foreground mt-2">
              Compare lock-in risk, customization limits, compliance constraints and data-control requirements.
            </p>
          </section>
        </div>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <h2 className="font-semibold">Decision Output</h2>
          <p className="text-muted-foreground mt-2">
            Create a balanced recommendation: enterprise SaaS, self-hosted-first, or hybrid model aligned to business
            stage and team capability.
          </p>
        </section>
        <Button variant="default" asChild>
          <Link href="/contact#book">Build My Platform Cost Model</Link>
        </Button>
      </article>
    </Section>
  );
}
