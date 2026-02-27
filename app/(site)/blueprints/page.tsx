import type { Metadata } from "next";
import Link from "next/link";

import ProjectBlueprintsExplorer from "@/components/sections/project-blueprints-explorer";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Project Blueprints — OnXeon" },
  description:
    "Reference blueprints that show the type of enterprise implementation, integration, and self-hosted work OnXeon can deliver.",
};

export default function BlueprintsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-10">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center space-y-4 max-w-3xl mx-auto transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="text-3xl md:text-4xl font-semibold">Project Blueprints</h1>
          <p className="text-muted-foreground">
            Reference examples of the kind of implementations and integrations we can deliver for your environment.
          </p>
          <p className="text-xs text-muted-foreground/90">
            These are illustrative blueprint examples, not claims about specific named client engagements.
          </p>
          <div>
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_16px_hsl(var(--brand)/0.24)]"
            >
              See Xeon Outcomes
            </Link>
          </div>
        </div>
        <ProjectBlueprintsExplorer />
        <div className="text-center">
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Discuss a Similar Scope</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
