import { type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTA({
  title = "Start building",
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Started",
      variant: "default",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <div className="group/title relative inline-flex items-center justify-center">
          <span className="pointer-events-none absolute -inset-x-8 -inset-y-3 rounded-full bg-brand/10 opacity-0 blur-2xl transition-all duration-500 group-hover/title:opacity-100" />
          <span className="pointer-events-none absolute inset-y-[32%] left-[-58%] w-[36%] -skew-x-12 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 transition-all duration-500 group-hover/title:left-[128%] group-hover/title:opacity-100 dark:via-white/25" />
          <span className="pointer-events-none absolute inset-y-[50%] left-[-45%] w-[20%] -translate-y-1/2 rounded-full bg-brand/30 opacity-0 blur-md transition-all duration-300 group-hover/title:left-[118%] group-hover/title:opacity-100" />
          <h2 className="relative z-10 max-w-[640px] text-3xl leading-tight font-semibold transition-all duration-300 group-hover/title:-translate-y-0.5 group-hover/title:tracking-[0.01em] sm:text-5xl sm:leading-tight">
            {title}
          </h2>
        </div>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
                className="group/btn mobile-premium-tap relative isolate overflow-hidden rounded-full border border-border/70 px-6 shadow-[0_10px_24px_-16px_hsl(var(--foreground)/0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-brand/45 hover:shadow-[0_14px_28px_-18px_hsl(var(--brand)/0.6)] before:absolute before:inset-y-0 before:left-[-58%] before:w-[40%] before:skew-x-[-18deg] before:rounded-[inherit] before:bg-white/32 dark:before:bg-transparent before:opacity-0 before:transition-all before:duration-700 hover:before:left-[122%] hover:before:opacity-100 dark:hover:before:opacity-0"
              >
                <a href={button.href} className="relative overflow-hidden rounded-[inherit]">
                  <span className="pointer-events-none absolute inset-y-0 left-[-35%] w-6 -skew-x-12 rounded-[inherit] bg-brand/35 opacity-0 blur-sm transition-all duration-300 group-hover/btn:left-[112%] group-hover/btn:opacity-100 dark:opacity-0 dark:group-hover/btn:opacity-0" />
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
