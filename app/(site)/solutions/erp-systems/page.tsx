import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "ERP Systems — OnXeon" },
  description: "ERP implementation and integration scenarios for operational enterprise systems.",
};

export default function ErpSystemsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">ERP Systems</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">SAP, ERPNext and Odoo implementations with clean data flow and operational controls.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Financial Flow</h2><p className="text-muted-foreground mt-2">Quote, order, invoice and payment reconciliation support.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Operations</h2><p className="text-muted-foreground mt-2">Inventory, procurement and fulfillment orchestration across teams.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Governance</h2><p className="text-muted-foreground mt-2">Security roles, audit traceability and long-term maintainability practices.</p></div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss ERP Integration</Link>
          </Button>
      </div>
    </Section>
  );
}
