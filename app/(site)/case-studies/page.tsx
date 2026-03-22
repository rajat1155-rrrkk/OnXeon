import type { Metadata } from "next";
import Link from "next/link";

import { deliverySnapshots } from "@/config/home";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Illustrative Case Studies — OnXeon" },
  description:
    "Illustrative case-study style snapshots showing how OnXeon approaches enterprise implementation, integration and self-hosted delivery.",
};

export default function CaseStudiesPage() {
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
              Illustrative Case Studies
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Case-study style references designed to show delivery thinking with honesty.
            </h1>
            <p className="mx-auto max-w-3xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
              These are illustrative programme snapshots rather than named-client stories. They show the level of
              clarity, structure and operational judgment OnXeon brings to enterprise and self-hosted delivery.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {deliverySnapshots.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Illustrative Snapshot
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.context}</p>

              <div className="mt-5 space-y-3">
                <div className="rounded-[1rem] border border-border/70 bg-white/72 p-4 dark:bg-white/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Outcome Shape
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.outcome}</p>
                </div>
                <div className="rounded-[1rem] border border-border/70 bg-white/72 p-4 dark:bg-white/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Delivery Approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.approach}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            asChild
            className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/contact#book">Discuss A Comparable Programme</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
