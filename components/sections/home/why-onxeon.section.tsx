import { whyOnXeonItems } from "@/config/home";

import { Section } from "../../ui/section";

export default function HomeWhyOnXeonSection() {
  return (
    <Section className="py-20 md:py-24">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Positioning
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Why OnXeon</h2>
          <p className="text-muted-foreground mt-4 text-sm leading-6 sm:text-base">
            We favor clarity, maintainability, and business fit over flashy architecture or vendor-driven complexity.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl space-y-3 sm:mt-12 sm:space-y-4">
          {whyOnXeonItems.map((item) => (
            <div
              key={item.title}
              className="mobile-fx-target group relative overflow-hidden rounded-[1.55rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] px-6 py-6 shadow-[0_18px_40px_-32px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.14),transparent_45%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.12),transparent_45%)]" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-green-500/60 transition-all duration-500 group-hover:scale-125 group-hover:bg-green-500 dark:bg-emerald-500/60 dark:group-hover:bg-emerald-400" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <div className="relative mt-3 md:h-12 md:overflow-hidden">
                    <p className="text-xs text-muted-foreground/80 md:transition-all md:duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0">
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
