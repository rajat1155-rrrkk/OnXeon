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
          <p className="text-muted-foreground">A practical approach to data ownership, order lifecycle sync and finance reconciliation.</p>
        </header>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Order Lifecycle Mapping</h2><p className="text-muted-foreground mt-2">Align lifecycle stages and status contracts between CRM and ERP domains.</p></section>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Data Quality Controls</h2><p className="text-muted-foreground mt-2">Apply validation rules, duplicate handling and automated reconciliation checks.</p></section>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Exception Handling</h2><p className="text-muted-foreground mt-2">Build alert routing and retry workflows for integration incidents.</p></section>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Review Your Data Flow</Link>
          </Button>
      </article>
    </Section>
  );
}
