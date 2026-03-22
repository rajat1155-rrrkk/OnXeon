import Image from "next/image";
import Link from "next/link";

import {
  enterprisePlatforms,
  proofHighlights,
  selfHostedPlatforms,
} from "@/config/home";

import { Section } from "../../ui/section";

export default function HomeProofSection() {
  const featuredPlatforms = [
    enterprisePlatforms[0],
    enterprisePlatforms[1],
    enterprisePlatforms[2],
    selfHostedPlatforms[0],
    selfHostedPlatforms[1],
    selfHostedPlatforms[3],
  ];

  return (
    <Section className="py-16 md:py-20">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,252,248,0.93))] p-6 shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.15)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.9),rgba(21,25,23,0.88))] md:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -top-16 right-8 h-32 w-32 rounded-full bg-brand/10 blur-3xl dark:bg-brand/10" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Delivery Confidence
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Quiet proof for teams making consequential system decisions.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                OnXeon is positioned around composed delivery rather than loud claims: thoughtful platform choices,
                implementation discipline and environments designed to remain manageable after go-live.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {proofHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.25rem] border border-border/70 bg-white/72 p-4 dark:bg-white/5"
                  >
                    <h3 className="text-sm font-semibold tracking-[-0.01em]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border/70 bg-white/72 p-5 dark:bg-white/5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Platform Familiarity
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Representative environments across enterprise and self-hosted delivery.
                  </p>
                </div>
                <Link
                  href="/solutions"
                  className="hidden rounded-full border border-border/70 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-brand/25 hover:text-brand dark:bg-white/6 md:inline-flex"
                >
                  View Solutions
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {featuredPlatforms.map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    className="group flex items-center gap-2 rounded-xl border border-border/70 bg-white/78 px-3 py-3 transition-all duration-300 hover:-translate-y-px hover:border-brand/18 hover:bg-white/95 dark:bg-white/6 dark:hover:bg-white/8"
                  >
                    <Image
                      src={platform.src}
                      alt={`${platform.name} logo`}
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-sm object-contain"
                    />
                    <span className="text-sm font-medium text-foreground/88">{platform.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
