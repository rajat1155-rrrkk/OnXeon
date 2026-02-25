import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "ERP Solutions — OnXeon" },
  description:
    "ERP deployment and integration services for SAP, ERPNext, Odoo and related enterprise workflows.",
};

export default function ErpSolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">ERP Solutions</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">
          ERP implementations and modernization programs designed for reliable
          operations across finance, procurement and inventory.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Core Modules</h2><p className="text-muted-foreground mt-2">Finance, procurement, inventory, manufacturing and reporting setup.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Data Migration</h2><p className="text-muted-foreground mt-2">Validated migration from legacy systems with reconciled business data.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Integration</h2><p className="text-muted-foreground mt-2">Integration with CRM, billing, analytics and internal operational tools.</p></div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss ERP Project</Link>
          </Button>
      </div>
    </Section>
  );
}
