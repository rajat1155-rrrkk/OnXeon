import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Custom Development — OnXeon" },
  description: "Custom development for enterprise extensions, automations and internal platforms.",
};

export default function CustomDevelopmentPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Custom Development</h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto">Build targeted software where standard platform features are not enough.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Extensions & Automations</h2><p className="text-muted-foreground mt-2">Business-specific workflows, custom UI and platform extensions.</p></div>
          <div className="rounded-xl border p-6 bg-card"><h2 className="font-semibold">Internal Tools</h2><p className="text-muted-foreground mt-2">Lightweight internal applications integrated with your existing systems.</p></div>
        </div>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Discuss Custom Build</Link>
          </Button>
      </div>
    </Section>
  );
}
