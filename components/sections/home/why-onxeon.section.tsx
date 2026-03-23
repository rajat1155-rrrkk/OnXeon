import { whyOnXeonItems } from "@/config/home";

import { Section } from "../../ui/section";

export default function HomeWhyOnXeonSection() {
  return (
    <Section className="py-24 md:py-28">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Why Clients Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Why OnXeon</h2>
          <p className="text-muted-foreground mt-4 text-sm leading-7 sm:text-base">
            We prioritise clarity, maintainability and business fit over unnecessary complexity, louder-than-needed
            process or fashionable architecture.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl space-y-4 sm:mt-14 sm:space-y-5">
          {whyOnXeonItems.map((item) => (
            <div
              key={item.title}
              className="mobile-fx-target group relative overflow-hidden rounded-[1.6rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.975),rgba(250,252,249,0.945))] px-6 py-6 shadow-[0_18px_40px_-32px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/14 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-white/78 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-[0_12px_24px_-22px_hsl(var(--foreground)/0.14)] dark:bg-white/5">
                  Fit
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <div className="relative mt-3 md:h-12 md:overflow-hidden">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground/80 md:transition-all md:duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0">
                      {item.teaser}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground md:absolute md:inset-x-0 md:top-0 md:mt-0 md:translate-y-2 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
