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
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand/12 blur-3xl dark:bg-brand/12" />
          <div className="relative z-10 space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Reference Blueprints
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Delivery shapes for teams planning enterprise systems with more clarity upfront.
            </h1>
            <p className="mx-auto max-w-3xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
              A curated set of illustrative implementation models across CRM, ERP, self-hosted systems, integrations
              and operational platforms. They are intended to show delivery approach, not to represent named client
              engagements.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs text-muted-foreground">
              <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 dark:bg-white/5">
                Enterprise, hybrid and self-hosted tracks
              </span>
              <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 dark:bg-white/5">
                Timelines, integrations and delivery model
              </span>
              <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 dark:bg-white/5">
                Built for scoping and planning conversations
              </span>
            </div>
          </div>
          <div>
            <Link
              href="/contact#book"
              className="inline-flex items-center rounded-full border border-brand/25 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/45 hover:text-brand dark:bg-white/5"
            >
              Review Similar Scopes
            </Link>
          </div>
        </div>
        <ProjectBlueprintsExplorer />
        <div className="text-center">
          <Button
            variant="default"
            asChild
            className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/contact#book">Discuss a Similar Scope</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
