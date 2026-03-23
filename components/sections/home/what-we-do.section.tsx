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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Swipe Highlights
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">Explore OnXeon in Brief</h2>
          </div>
          <div className="mobile-fx-target -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {mobileReelCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="mobile-premium-tap group relative min-w-[84%] snap-center overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-5 shadow-[0_16px_30px_-26px_hsl(var(--foreground)/0.14)] transition-all duration-300 active:scale-[0.98] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
                <div className="relative z-10">
                  <span className="inline-flex rounded-full border border-border/70 bg-white/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground dark:bg-white/5">
                    {card.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
                  <div className="mt-4 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/76">
                    View Details
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <Section className="py-24 md:py-28">
        <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">How We Deliver</h2>
            <p className="text-muted-foreground mt-4 text-sm leading-6 sm:text-base">
              Delivery across enterprise platforms and carefully chosen self-hosted systems, with the operational discipline expected of long-lived business infrastructure.
            </p>
          </div>
          <p className="mobile-fx-target mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-muted-foreground md:hidden">
            Swipe above for capability previews, then use the sections below for platform depth and delivery confidence.
          </p>
          <div className="mobile-fx-target group/section relative mt-8 hidden overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/78 p-5 shadow-[0_22px_44px_-34px_hsl(var(--foreground)/0.14)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_28px_54px_-38px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-card/66 md:block sm:mt-10 sm:p-7">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent opacity-70 dark:via-emerald-400/60" />
            <span className="pointer-events-none absolute -top-10 right-8 h-24 w-24 rounded-full bg-green-300/18 blur-2xl opacity-0 transition-opacity duration-500 group-hover/section:opacity-100 dark:bg-emerald-500/14" />
            <div className="text-sm text-muted-foreground">
              Platforms and products we implement, integrate and steward over time.
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="mobile-fx-target rounded-[1.35rem] border border-white/68 bg-background/78 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-28px_hsl(var(--foreground)/0.14)] dark:border-white/7">
                <h3 className="text-sm font-semibold">Enterprise Platforms</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {enterprisePlatforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="group/item flex items-center gap-2 rounded-xl border border-white/68 bg-card/82 px-3 py-2.5 transition-all duration-300 hover:-translate-y-px hover:bg-white/98 dark:border-white/7 dark:bg-card/78 sm:px-3"
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
              <div className="mobile-fx-target rounded-[1.35rem] border border-white/68 bg-background/78 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-28px_hsl(var(--foreground)/0.14)] dark:border-white/7">
                <h3 className="text-sm font-semibold">Open-Source And Self-Hosted</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {selfHostedPlatforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="group/item flex items-center gap-2 rounded-xl border border-white/68 bg-card/82 px-3 py-2.5 transition-all duration-300 hover:-translate-y-px hover:bg-white/98 dark:border-white/7 dark:bg-card/78 sm:px-3"
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
                className="mobile-fx-target mobile-premium-tap rounded-[1.25rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-4 shadow-[0_14px_28px_-24px_hsl(var(--foreground)/0.12)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Capability
                </p>
                <h3 className="mt-2 text-sm font-semibold tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 hidden gap-5 sm:mt-14 sm:gap-7 sm:grid-cols-2 lg:grid md:grid">
            {coreCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="mobile-fx-target group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
              >
                <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.14),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.12),transparent_46%)]" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-[1px]">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-6">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
