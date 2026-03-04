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
      <div className="relative mx-auto max-w-6xl space-y-10 py-24">
        <div className="pointer-events-none absolute -top-12 left-[8%] h-44 w-44 rounded-full bg-white/45 blur-3xl dark:bg-white/12" />
        <div className="pointer-events-none absolute top-20 right-[7%] h-56 w-56 rounded-full bg-brand/18 blur-3xl dark:bg-brand/14" />
        <div className="group chrome-hover relative mx-auto max-w-3xl space-y-4 overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card via-card/96 to-card/90 p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-brand/20 premium-dropdown-shell">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand/20 blur-3xl dark:bg-brand/14" />
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
              className="chrome-hover inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_16px_hsl(var(--brand)/0.24)]"
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
            className="chrome-hover relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/35 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Discuss a Similar Scope</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
