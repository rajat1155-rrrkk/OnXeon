import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
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
  columns = [
    {
      title: "Company",
      links: [
        { text: "About", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "OnXeon Services", href: "/services/onxeon-services" },
        { text: "CRM Solutions", href: "/services/crm-solutions" },
        { text: "ERP Solutions", href: "/services/erp-solutions" },
        { text: "Cloud Solutions", href: "/services/cloud-solutions" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { text: "CRM Platforms", href: "/solutions/crm-platforms" },
        { text: "ERP Systems", href: "/solutions/erp-systems" },
        { text: "Cloud Platforms", href: "/solutions/cloud-platforms" },
        { text: "System Integration", href: "/solutions/system-integration" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Case Studies", href: "/case-studies" },
        { text: "Documentation", href: "/docs" },
        { text: "Contact", href: "/contact#book" },
      ],
    },
  ],
  copyright = "© 2026 OnXeon. All rights reserved.",
  policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  const columnClass =
    "group relative overflow-hidden rounded-xl border border-border/70 bg-card/84 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/15";
  const footerItemClass =
    "group/item relative block w-full overflow-hidden rounded-lg border border-transparent bg-background/70 px-3 py-2 text-muted-foreground text-sm transition-all duration-300 hover:-translate-y-px hover:border-brand/35 hover:bg-brand/12 hover:text-foreground hover:shadow-sm hover:shadow-brand/10";
  const policyClass =
    "text-muted-foreground transition-colors duration-200 hover:text-foreground";

  return (
    <footer className={cn("relative w-full overflow-hidden bg-background px-4 pb-4", className)}>
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      <div className="max-w-container relative z-10 mx-auto">
        <Footer className="relative mt-6 overflow-hidden rounded-2xl border border-border/70 bg-card/45 px-4 pt-14 shadow-[0_14px_40px_-24px_hsl(var(--brand)/0.35)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-brand/5 dark:from-white/5" />
          <div className="pointer-events-none absolute -top-24 left-0 h-64 w-64 rounded-full bg-brand/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-brand/12 blur-3xl" />
          <FooterContent>
            <FooterColumn className={cn("col-span-2 sm:col-span-3 md:col-span-1", columnClass)}>
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent opacity-70" />
              <span className="pointer-events-none absolute -inset-16 rounded-full bg-brand/8 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/80 shadow-sm transition-all duration-500 group-hover:rotate-[6deg] group-hover:scale-105 group-hover:border-brand/55 group-hover:shadow-md group-hover:shadow-brand/25">
                  {logo}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise SaaS implementations, system integrations, and
                affordable self-hosted open-source solutions for startups and
                established businesses.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="/contact#book"
                  className="group/cta relative inline-flex items-center overflow-hidden rounded-md border border-brand/40 bg-brand/14 px-2.5 py-1 text-xs font-medium text-foreground transition-all duration-300 hover:-translate-y-px hover:bg-brand/24 hover:shadow-md hover:shadow-brand/25"
                >
                  <span className="pointer-events-none absolute inset-y-0 left-[-55%] w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 group-hover/cta:left-[125%] group-hover/cta:opacity-100" />
                  Book Consultation
                </a>
                <a
                  href="/services/onxeon-services"
                  className="group/cta-secondary relative inline-flex items-center overflow-hidden rounded-md border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:text-foreground hover:border-brand/40 hover:shadow-sm hover:shadow-brand/15"
                >
                  <span className="pointer-events-none absolute inset-y-0 left-[-52%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/65 to-transparent opacity-0 transition-all duration-700 group-hover/cta-secondary:left-[120%] group-hover/cta-secondary:opacity-100 dark:via-white/20" />
                  Explore Services
                </a>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index} className={columnClass}>
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                <h3 className="text-xs uppercase tracking-[0.08em] text-muted-foreground pt-1 font-semibold transition-colors duration-300 group-hover:text-foreground">
                  {column.title}
                </h3>
                <div className="grid gap-2">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className={footerItemClass}
                    >
                      <span className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover/item:left-[130%] group-hover/item:opacity-100 dark:via-white/20" />
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 bg-gradient-to-r from-transparent via-brand/8 to-transparent" />
                      <span className="pointer-events-none absolute inset-y-1 left-0 w-0 rounded-r-full bg-brand/60 transition-all duration-250 group-hover/item:w-[3px]" />
                      <span className="relative z-10">{link.text}</span>
                    </a>
                  ))}
                </div>
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom className="mt-6 rounded-lg border-t border-border/70 bg-card/55 px-3 py-3 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.08)] backdrop-blur-sm">
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href} className={policyClass}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
