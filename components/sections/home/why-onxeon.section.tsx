import { whyOnXeonItems } from "@/config/home";

import { Section } from "../../ui/section";

export default function HomeWhyOnXeonSection() {
  return (
    <Section className="py-20 md:py-24">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="group relative inline-flex justify-center">
            <div className="pointer-events-none absolute -inset-x-10 -inset-y-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
            </div>
            <h2 className="relative z-10 text-3xl font-semibold md:text-4xl">Why OnXeon</h2>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-4xl space-y-3 sm:mt-12 sm:space-y-4">
          {whyOnXeonItems.map((item) => (
            <div
              key={item.title}
              className="mobile-fx-target group relative overflow-hidden rounded-xl border border-green-100 bg-gradient-to-b from-green-50/70 to-white px-6 py-5 transition-all duration-500 hover:border-green-300 hover:shadow-lg hover:shadow-green-200/35 dark:border-emerald-900/45 dark:from-emerald-950/45 dark:to-card dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/35"
            >
              <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.28),transparent_45%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.22),transparent_45%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[inset_0_0_0_1px_rgba(74,222,128,0.45)] dark:shadow-[inset_0_0_0_1px_rgba(52,211,153,0.35)]" />
              <div className="pointer-events-none absolute inset-y-0 left-[-42%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100 dark:via-white/35" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-green-500/70 transition-all duration-500 group-hover:scale-125 group-hover:bg-green-500 group-hover:shadow-[0_0_14px_rgba(34,197,94,0.7)] group-hover:animate-pulse dark:bg-emerald-500/70 dark:group-hover:bg-emerald-400 dark:group-hover:shadow-[0_0_14px_rgba(16,185,129,0.7)]" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold transition-transform duration-500 group-hover:translate-x-1">
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
