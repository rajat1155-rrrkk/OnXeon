import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Github from "../../logos/github";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import LogoPlayground from "../../ui/logo-playground";
import { Mockup, MockupFrame } from "../../ui/mockup";
import { Section } from "../../ui/section";

const heroHighlights = [
  "Enterprise delivery leadership",
  "Vendor-neutral architecture counsel",
  "Maintainability designed in from day one",
];

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Build reliable enterprise systems with OnXeon",
  description = "Implementation, customization, and integration for CRM, ERP, and cloud platforms.",
  mockup = <LogoPlayground />,
  badge = (
    <Badge
      variant="outline"
      className="group/badge animate-appear relative inline-flex max-w-full flex-wrap items-center justify-center gap-2 overflow-hidden rounded-full border border-brand/18 bg-white/82 px-3 py-2 text-center shadow-[0_14px_34px_-28px_hsl(var(--foreground)/0.16)] backdrop-blur-xl sm:flex-nowrap dark:bg-card/78"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full border border-white/45 opacity-80 dark:border-white/8" />
      <span className="text-muted-foreground text-[11px] tracking-[0.12em] uppercase sm:text-xs">
        Advisory And Delivery
      </span>
      <Link
        href="/contact#book"
        className="group/xeon mobile-premium-tap relative z-10 inline-flex items-center gap-1.5 rounded-full border border-brand/14 bg-brand/6 px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-foreground transition-all duration-300 group-hover/badge:border-brand/24 group-hover/badge:bg-brand/9 group-hover/badge:text-brand"
      >
        Schedule A Call
        <ArrowRightIcon className="size-3 transition-transform duration-300 group-hover/xeon:translate-x-1 group-hover/xeon:scale-110" />
      </Link>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Started",
      variant: "default",
    },
    {
      href: siteConfig.links.github,
      text: "Contact Us",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-16 pt-18 sm:pt-24 sm:gap-28">
        <div className="relative flex flex-col items-center gap-8 text-center sm:gap-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[34rem] -translate-x-1/2 rounded-full bg-brand/5 blur-3xl dark:bg-brand/7" />
          {badge !== false && badge}
          <div className="relative z-10 max-w-5xl">
            <p className="animate-appear text-muted-foreground mb-5 text-[11px] font-semibold tracking-[0.3em] uppercase sm:text-xs">
              Enterprise Delivery With Measured Craft
            </p>
            <h1 className="animate-appear from-foreground via-foreground to-foreground/78 relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-[1] font-semibold tracking-[-0.05em] text-balance text-transparent sm:text-6xl sm:leading-[1] md:text-8xl md:leading-[1]">
              {title}
            </h1>
          </div>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[760px] text-balance leading-7 opacity-0 delay-100 sm:text-[1.15rem] sm:leading-8">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex w-full flex-col justify-center gap-3 opacity-0 delay-300 sm:w-auto sm:flex-row sm:gap-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                  className="mobile-premium-tap group/hero-btn relative w-full overflow-hidden rounded-full border border-border/70 px-7 shadow-[0_12px_28px_-20px_hsl(var(--foreground)/0.22)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/24 hover:shadow-[0_18px_34px_-24px_hsl(var(--brand)/0.22)] before:absolute before:inset-y-0 before:left-[-58%] before:w-[40%] before:skew-x-[-18deg] before:bg-white/20 dark:before:bg-white/8 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[122%] hover:before:opacity-100 sm:w-auto"
                >
                  <Link href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </Link>
                </Button>
              ))}
            </div>
          )}
          <div className="animate-appear relative z-10 grid w-full max-w-4xl gap-4 opacity-0 delay-500 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.45rem] border border-white/72 bg-white/76 px-5 py-6 text-left shadow-[0_16px_32px_-28px_hsl(var(--foreground)/0.12)] backdrop-blur-xl dark:border-white/8 dark:bg-card/68"
              >
                <div className="mb-5 h-px w-10 bg-gradient-to-r from-brand/35 to-transparent" />
                <p className="text-sm leading-6 text-foreground/84">{item}</p>
              </div>
            ))}
          </div>
          {mockup !== false && (
            <div className="relative w-full pt-16">
              <div className="absolute inset-x-[16%] top-20 h-36 rounded-full bg-brand/6 blur-3xl dark:bg-brand/8" />
              <div className="animate-appear relative overflow-hidden rounded-[2rem] border border-white/68 bg-white/68 p-3 opacity-0 shadow-[0_28px_54px_-40px_hsl(var(--foreground)/0.18)] backdrop-blur-xl delay-700 dark:border-white/8 dark:bg-card/60">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/12" />
                <MockupFrame
                  className="relative"
                  size="small"
                >
                  <Mockup
                    type="responsive"
                    className="bg-background/90 w-full rounded-[1.35rem] border-0"
                  >
                    {mockup}
                  </Mockup>
                </MockupFrame>
              </div>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000 [mask-image:radial-gradient(circle_at_center,black_42%,transparent_78%)]"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
