import type { Metadata } from "next";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Terms — OnXeon" },
  description: "Terms of service for OnXeon.",
};

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto py-24 space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">Terms</h1>
        <p className="text-muted-foreground">
          This is a placeholder terms page. Replace with legal-approved terms before production use.
        </p>
      </div>
    </Section>
  );
}
