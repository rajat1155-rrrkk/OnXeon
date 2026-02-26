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
                className="group/btn relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/25 before:absolute before:inset-y-0 before:left-[-65%] before:w-[44%] before:skew-x-[-18deg] before:bg-white/35 dark:before:bg-white/15 before:opacity-0 before:transition-all before:duration-500 hover:before:left-[125%] hover:before:opacity-100"
              >
                <a href={button.href}>
                  <span className="pointer-events-none absolute inset-y-0 left-[-35%] w-6 -skew-x-12 bg-brand/35 opacity-0 blur-sm transition-all duration-300 group-hover/btn:left-[112%] group-hover/btn:opacity-100" />
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
