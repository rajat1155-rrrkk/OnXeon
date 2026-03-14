import {
  coreCapabilities,
  enterprisePlatforms,
  mobileReelCards,
  selfHostedPlatforms,
  whatWeDoHighlights,
} from "@/config/home";
import Image from "next/image";
import Link from "next/link";

import { Section } from "../../ui/section";

export default function HomeWhatWeDoSection() {
  return (
    <>
      <Section className="py-10 md:hidden">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mobile-fx-target mb-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Swipe Highlights
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Explore OnXeon in Reels</h2>
          </div>
          <div className="mobile-fx-target -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {mobileReelCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="mobile-premium-tap group relative min-w-[84%] snap-center overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/90 to-card p-5 shadow-sm transition-all duration-500 active:scale-[0.98] dark:border-emerald-900/40 dark:from-emerald-950/45 dark:to-card"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/80 to-transparent dark:via-emerald-400/70" />
                <span className="pointer-events-none absolute -top-8 right-0 h-20 w-20 rounded-full bg-green-300/25 blur-2xl transition-opacity duration-500 group-active:opacity-100 dark:bg-emerald-500/20" />
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(34,197,94,0.2),transparent_50%)] opacity-60 dark:bg-[radial-gradient(circle_at_84%_16%,rgba(16,185,129,0.2),transparent_50%)]" />
                <div className="relative z-10">
                  <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
                    {card.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                  <div className="mt-4 inline-flex items-center text-xs font-semibold text-foreground">
                    View details
                    <span className="ml-1 transition-transform duration-300 group-active:translate-x-1">
                      {"->"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <Section className="py-20 md:py-24">
        <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="group relative inline-flex justify-center">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
              </div>
              <h2 className="relative z-10 text-3xl font-semibold md:text-4xl">What We Do</h2>
            </div>
          </div>
          <p className="mobile-fx-target mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground md:hidden">
            Swipe above for capability previews, then use the sections below for platform depth and delivery confidence.
          </p>
          <div className="mobile-fx-target group/section relative mt-8 hidden overflow-hidden rounded-2xl border border-green-100/80 bg-card p-4 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:hover:shadow-emerald-900/30 md:block sm:mt-10 sm:p-6">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent opacity-70 dark:via-emerald-400/60" />
            <span className="pointer-events-none absolute -top-10 right-8 h-24 w-24 rounded-full bg-green-300/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover/section:opacity-100 dark:bg-emerald-500/20" />
            <div className="text-sm text-muted-foreground">
              Platforms and products we implement, integrate and support.
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="mobile-fx-target rounded-xl border border-green-100/80 bg-background/70 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-green-300/80 hover:shadow-md hover:shadow-green-200/30 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/25">
                <h3 className="text-sm font-semibold">Enterprise Platforms</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {enterprisePlatforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="group/item flex items-center gap-2 rounded-lg border border-green-100/80 bg-card px-2.5 py-2 transition-colors duration-300 hover:border-green-300/80 hover:bg-green-50/40 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:bg-emerald-950/25 sm:px-3"
                    >
                      <Image
                        src={platform.src}
                        alt={`${platform.name} logo`}
                        width={20}
                        height={20}
                        className="h-4 w-4 rounded-sm object-contain sm:h-5 sm:w-5"
                      />
                      <span className="text-xs font-medium sm:text-sm">{platform.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mobile-fx-target rounded-xl border border-green-100/80 bg-background/70 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-green-300/80 hover:shadow-md hover:shadow-green-200/30 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/25">
                <h3 className="text-sm font-semibold">Open Source & Self-Hosted</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {selfHostedPlatforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="group/item flex items-center gap-2 rounded-lg border border-green-100/80 bg-card px-2.5 py-2 transition-colors duration-300 hover:border-green-300/80 hover:bg-green-50/40 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 dark:hover:bg-emerald-950/25 sm:px-3"
                    >
                      <Image
                        src={platform.src}
                        alt={`${platform.name} logo`}
                        width={20}
                        height={20}
                        className="h-4 w-4 rounded-sm object-contain sm:h-5 sm:w-5"
                      />
                      <span className="text-xs font-medium sm:text-sm">{platform.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-3 md:hidden">
            {whatWeDoHighlights.map((item) => (
              <div
                key={item.title}
                className="mobile-fx-target mobile-premium-tap rounded-xl border border-green-100/80 bg-gradient-to-b from-green-50/75 to-card p-4 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 hidden gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid md:grid">
            {coreCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="mobile-fx-target group relative overflow-hidden rounded-xl border border-green-100 bg-gradient-to-b from-green-50/70 to-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg hover:shadow-green-200/35 dark:border-emerald-900/45 dark:from-emerald-950/45 dark:to-card dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/35"
              >
                <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.26),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.2),transparent_46%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 opacity-30 transition-opacity duration-500 group-hover:opacity-70 dark:from-emerald-500/15 dark:to-transparent dark:opacity-40 dark:group-hover:opacity-80" />
                <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100 dark:via-white/30" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold transition-transform duration-500 group-hover:translate-x-[1px]">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mt-3">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
