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
    "group relative rounded-xl border border-border/70 bg-card/70 p-4 transition-all duration-300 hover:border-brand/40 hover:shadow-sm";
  const footerItemClass =
    "group/item relative block w-full overflow-hidden rounded-md border border-transparent bg-background/60 px-3 py-2 text-muted-foreground text-sm transition-all duration-250 hover:border-brand/35 hover:bg-brand/10 hover:text-foreground";
  const policyClass =
    "text-muted-foreground transition-colors duration-200 hover:text-foreground";

  return (
    <footer className={cn("relative w-full overflow-hidden bg-background px-4", className)}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-brand/10 to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[60%] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="max-w-container relative z-10 mx-auto">
        <Footer className="pt-14">
          <FooterContent>
            <FooterColumn className={cn("col-span-2 sm:col-span-3 md:col-span-1", columnClass)}>
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise implementations, system integrations, and
                self-hosted open-source solutions for startups and established
                businesses.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="/contact#book"
                  className="inline-flex items-center rounded-md border border-brand/35 bg-brand/10 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-brand/20"
                >
                  Book Consultation
                </a>
                <a
                  href="/services/onxeon-services"
                  className="inline-flex items-center rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Explore Services
                </a>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index} className={columnClass}>
                <h3 className="text-md pt-1 font-semibold hover:text-foreground transition-colors duration-300">
                  {column.title}
                </h3>
                <div className="grid gap-2">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className={footerItemClass}
                    >
                      <span className="pointer-events-none absolute inset-y-1 left-0 w-0 rounded-r-full bg-brand/60 transition-all duration-250 group-hover/item:w-[3px]" />
                      {link.text}
                    </a>
                  ))}
                </div>
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
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
