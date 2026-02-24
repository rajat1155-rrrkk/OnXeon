import type { Metadata } from "next";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — OnXeon" },
  description: "Privacy policy for OnXeon.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto py-24 space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This is a placeholder privacy policy. Replace with legal-approved policy content before production use.
        </p>
      </div>
    </Section>
  );
}
