import { ReactNode } from "react";
import Link from "next/link";

import {
  footerColumns,
  footerCopyright,
  footerPolicies,
} from "@/config/navigation";
import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "OnXeon",
  columns = footerColumns,
  copyright = footerCopyright,
  policies = footerPolicies,
  showModeToggle = true,
  className,
}: FooterProps) {
  const columnClass =
    "group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(250,252,249,0.94))] p-5 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/18 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]";
  const footerItemClass =
    "group/item relative block w-full overflow-hidden rounded-xl border border-transparent bg-white/72 px-3 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/18 hover:bg-white/92 hover:text-foreground dark:bg-white/5 dark:hover:bg-white/8";
  const policyClass =
    "text-muted-foreground transition-colors duration-200 hover:text-foreground";

  return (
    <footer className={cn("relative w-full overflow-hidden bg-background px-3 pb-3 md:px-4 md:pb-4", className)}>
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
      <div className="max-w-container relative z-10 mx-auto">
        <Footer className="relative mt-5 overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,251,247,0.9))] px-3 pt-10 shadow-[0_24px_52px_-38px_hsl(var(--foreground)/0.16)] backdrop-blur-xl dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.9),rgba(21,25,23,0.92))] md:mt-6 md:px-4 md:pt-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -top-24 left-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-brand/8 blur-3xl" />
          <FooterContent>
            <FooterColumn className={cn("col-span-1 sm:col-span-2 md:col-span-1", columnClass)}>
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-white/80 shadow-[0_12px_24px_-20px_hsl(var(--foreground)/0.2)] dark:bg-white/6">
                  {logo}
                </span>
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-foreground/92">{name}</h3>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    Strategic Delivery
                  </p>
                </div>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                Enterprise implementation, integration and self-hosted delivery for organisations that value clarity,
                control and long-term composure.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/contact#book"
                  className="inline-flex items-center rounded-full border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,249,245,0.92))] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/25 hover:text-brand dark:bg-[linear-gradient(180deg,rgba(31,35,32,0.94),rgba(24,28,25,0.92))]"
                >
                  Arrange A Call
                </Link>
                <Link
                  href="/services/onxeon-services"
                  className="inline-flex items-center rounded-full border border-border/70 bg-white/75 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/18 hover:text-foreground dark:bg-white/5"
                >
                  Review Capabilities
                </Link>
              </div>
            </FooterColumn>
            {columns.map((column) => (
              <FooterColumn key={column.title} className={columnClass}>
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
                <h3 className="pt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {column.title}
                </h3>
                <div className="grid gap-2">
                  {column.links.map((link) => (
                    <Link
                      key={`${column.title}-${link.href}`}
                      href={link.href}
                      className={footerItemClass}
                    >
                      <span className="relative z-10">{link.text}</span>
                    </Link>
                  ))}
                </div>
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom className="mt-5 rounded-[1.25rem] border-t border-border/70 bg-white/60 px-4 py-3 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05)] backdrop-blur-sm dark:bg-white/5 md:mt-6">
            <div>{copyright}</div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start md:justify-end md:gap-4">
              {policies.map((policy) => (
                <Link key={policy.href} href={policy.href} className={policyClass}>
                  {policy.text}
                </Link>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
