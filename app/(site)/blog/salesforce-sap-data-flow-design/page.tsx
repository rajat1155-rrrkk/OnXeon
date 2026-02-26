import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Salesforce SAP Data Flow Design — OnXeon Blog" },
  description:
    "Design reliable Salesforce and SAP data flows with ownership, reconciliation and exception management.",
};

export default function SalesforceSapDataFlowDesignPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Salesforce + SAP Data Flow Design for Reliable Operations</h1>
          <p className="text-muted-foreground">
            A practical blueprint for syncing CRM and ERP data while protecting financial accuracy and operational flow.
          </p>
        </header>

        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <h2 className="font-semibold">Data Ownership Model</h2>
          <p className="text-muted-foreground mt-2">
            Keep ownership explicit. For example: opportunity and customer engagement stages in Salesforce, order
            booking and invoicing in SAP.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Field-level ownership matrix for shared entities</li>
            <li>Update direction rules (CRM → ERP, ERP → CRM)</li>
            <li>Conflict resolution for concurrent changes</li>
          </ul>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Order Lifecycle Mapping</h2>
            <p className="text-muted-foreground mt-2">
              Map each stage transition and required data contract: quote, order, fulfillment, invoice, payment.
            </p>
          </section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
            <h2 className="font-semibold">Reconciliation Controls</h2>
            <p className="text-muted-foreground mt-2">
              Run scheduled reconciliation between Salesforce and SAP for key records and monetary totals.
            </p>
          </section>
        </div>

        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
          <h2 className="font-semibold">Exception Handling Playbook</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Classify exceptions by business criticality</li>
            <li>Automatic retry for transient failures</li>
            <li>Manual review queue for data validation failures</li>
            <li>Daily exception summary and SLA-based closure targets</li>
          </ul>
        </section>

        <Button variant="default" asChild>
          <Link href="/contact#book">Review Your Data Flow</Link>
        </Button>
      </article>
    </Section>
  );
}
