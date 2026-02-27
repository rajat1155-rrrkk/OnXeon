import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";
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
      className="group/badge animate-appear relative inline-flex max-w-full flex-wrap items-center justify-center gap-2 overflow-hidden border-brand/30 bg-background/80 px-3 py-2 text-center backdrop-blur-sm sm:flex-nowrap"
    >
      <span className="pointer-events-none absolute inset-y-0 left-[-52%] w-[38%] -skew-x-12 bg-gradient-to-r from-transparent via-white/85 to-transparent opacity-0 transition-all duration-500 group-hover/badge:left-[128%] group-hover/badge:opacity-100 dark:via-white/35" />
      <span className="pointer-events-none absolute inset-y-[35%] left-[-28%] h-[30%] w-10 rounded-full bg-brand/50 opacity-0 blur-md transition-all duration-300 group-hover/badge:left-[110%] group-hover/badge:opacity-100" />
      <span className="pointer-events-none absolute inset-0 rounded-full border border-brand/20 opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100" />
      <span className="text-muted-foreground text-xs sm:text-sm">
        Enterprise solutions for modern businesses
      </span>
      <a
        href="/contact#book"
        className="group/xeon mobile-premium-tap relative z-10 inline-flex items-center gap-1.5 rounded-full border border-transparent px-2 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-foreground transition-all duration-300 group-hover/badge:border-brand/40 group-hover/badge:bg-brand/14 group-hover/badge:text-brand group-hover/xeon:shadow-[0_0_18px_hsl(var(--brand)/0.25)]"
      >
        Get Xeoned
        <ArrowRightIcon className="size-3 transition-transform duration-300 group-hover/xeon:translate-x-1 group-hover/xeon:scale-110" />
      </a>
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
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-12 sm:pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
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
                  className="mobile-premium-tap group/hero-btn relative w-full overflow-hidden rounded-full border border-border/70 px-6 shadow-[0_10px_24px_-16px_hsl(var(--foreground)/0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_14px_28px_-18px_hsl(var(--brand)/0.6)] before:absolute before:inset-y-0 before:left-[-58%] before:w-[40%] before:skew-x-[-18deg] before:bg-white/32 dark:before:bg-white/12 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[122%] hover:before:opacity-100 sm:w-auto"
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
