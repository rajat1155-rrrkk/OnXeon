import { engagementSteps } from "@/config/home";

import { Section } from "../../ui/section";

export default function HomeEngagementSection() {
  return (
    <Section className="py-20 md:py-24">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Engagement Rhythm
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            A calm delivery model from first conversation to internal ownership.
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-7 sm:text-base">
            The way we work matters as much as the systems we implement. OnXeon engagements are structured to reduce
            ambiguity, surface tradeoffs early and leave teams with more control at the end.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {engagementSteps.map((step, index) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-white/78 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground dark:bg-white/5">
                    {`0${index + 1}`}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {step.title}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
