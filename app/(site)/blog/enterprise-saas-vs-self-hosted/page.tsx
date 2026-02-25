import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Enterprise SaaS vs Self-Hosted — OnXeon Blog" },
  description:
    "Compare SaaS and self-hosted enterprise platform decisions across cost, control, operations and maintainability.",
};

export default function EnterpriseSaaSVsSelfHostedPage() {
  return (
    <Section>
      <article className="max-w-4xl mx-auto py-24 space-y-8">
        <header className="space-y-4">
          <p className="text-sm text-muted-foreground">OnXeon Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Choosing Between Enterprise SaaS and Self-Hosted Platforms</h1>
          <p className="text-muted-foreground">A practical comparison framework for operations, cost structure and long-term flexibility.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">When SaaS Wins</h2><p className="text-muted-foreground mt-2">Fast onboarding, managed updates and lower initial ops overhead.</p></section>
          <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">When Self-Hosted Wins</h2><p className="text-muted-foreground mt-2">Deeper control, data residency, cost predictability and customization freedom.</p></section>
        </div>
        <section className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60"><h2 className="font-semibold">Decision Checklist</h2><p className="text-muted-foreground mt-2">Evaluate security needs, integration depth, regulatory constraints, internal team capability and three-year TCO.</p></section>
        <Button variant="default" asChild>
            <Link href="/contact#book" >Evaluate Your Platform Choice</Link>
          </Button>
      </article>
    </Section>
  );
}
