"use client";

import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import { Button, buttonVariants } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import Navigation from "../../ui/navigation";
import { ThemeCycleButton } from "../../ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

const mobileServiceItems = [
  { title: "OnXeon Services", href: "/services/onxeon-services" },
  { title: "CRM Solutions", href: "/services/crm-solutions" },
  { title: "ERP Solutions", href: "/services/erp-solutions" },
  { title: "Cloud Solutions", href: "/services/cloud-solutions" },
  { title: "Services Overview", href: "/services" },
];

const mobileSolutionItems = [
  { title: "CRM Platforms", href: "/solutions/crm-platforms" },
  { title: "ERP Systems", href: "/solutions/erp-systems" },
  { title: "Cloud Platforms", href: "/solutions/cloud-platforms" },
  { title: "System Integration", href: "/solutions/system-integration" },
  { title: "Custom Development", href: "/solutions/custom-development" },
  { title: "Support & Maintenance", href: "/solutions/support-maintenance" },
];

export default function Navbar({
  logo = <LaunchUI />,
  name = "OnXeon",
  homeUrl = "/",
  mobileLinks = [
    { text: "Services", href: "/services" },
    { text: "Solutions", href: "/solutions" },
    { text: "Blueprints", href: "/blueprints" },
    { text: "About", href: "/about" },
  ],
  actions = [
    {
      text: "Get Started",
      href: "/contact#book",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<"services" | "solutions" | null>("services");
  const mobilePrimaryLinks = mobileLinks.filter((link) => {
    const text = link.text.toLowerCase();
    return text !== "services" && text !== "solutions";
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 -mb-3 px-3 pb-3 md:-mb-4 md:px-4 md:pb-4", className)}>
      <div
        className={cn(
          "fade-bottom pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden border-b bg-gradient-to-b from-white/[0.1] via-white/[0.05] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(255,255,255,0.2),0_14px_30px_rgba(0,0,0,0.06)] backdrop-blur-[3px] backdrop-saturate-135 backdrop-contrast-110 backdrop-brightness-102 transition-all duration-300 dark:from-white/[0.05] dark:via-white/[0.024] dark:backdrop-brightness-108",
          isScrolled
            ? "border-white/48 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-1px_0_rgba(255,255,255,0.24),0_18px_34px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.26)] dark:border-white/24 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-1px_0_rgba(255,255,255,0.13),0_18px_34px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.09)]"
            : "border-white/22 dark:border-white/10",
        )}
      >
        <div className="absolute inset-0 opacity-75 [background:radial-gradient(125%_58%_at_10%_10%,rgba(255,255,255,0.34),transparent_56%),radial-gradient(90%_50%_at_76%_8%,rgba(255,255,255,0.24),transparent_62%),radial-gradient(75%_38%_at_52%_0%,rgba(255,255,255,0.20),transparent_58%),radial-gradient(55%_30%_at_35%_4%,rgba(255,255,255,0.16),transparent_70%)] dark:opacity-52" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" />
        <div className="absolute -top-7 left-[6%] h-20 w-56 rotate-[-3deg] rounded-full bg-white/28 blur-xl dark:bg-white/13" />
        <div className="absolute -top-7 right-[11%] h-16 w-52 rotate-[2.8deg] rounded-full bg-white/22 blur-xl dark:bg-white/11" />
        <div className="absolute top-2 left-[34%] h-10 w-28 rotate-[-1.5deg] rounded-full bg-white/16 blur-lg dark:bg-white/8" />
        <div className="absolute right-[26%] top-[10px] h-[1px] w-16 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/30" />
      </div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent
          className={cn(
            "relative rounded-xl px-2 transition-all duration-300",
            isScrolled ? "py-3 md:py-5" : "py-2.5 md:py-4",
          )}
        >
          <NavbarLeft
            className={cn(
              "transition-transform duration-300",
              isScrolled ? "md:translate-y-1" : "translate-y-0",
            )}
          >
            <a
              href={homeUrl}
              className="group relative flex items-center gap-2 text-xl font-bold"
            >
              <span className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]">
                {logo}
              </span>
              {name}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight
            className={cn(
              "transition-transform duration-300",
              isScrolled ? "md:translate-y-1" : "translate-y-0",
            )}
          >
            <ThemeCycleButton className="mr-1 md:mr-2" />
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  className="mobile-premium-tap group/nav-cta relative isolate overflow-hidden rounded-full border border-border/70 px-4 shadow-[0_10px_24px_-16px_hsl(var(--foreground)/0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:shadow-[0_14px_28px_-18px_hsl(var(--brand)/0.6)] before:absolute before:inset-y-0 before:left-[-58%] before:w-[40%] before:skew-x-[-18deg] before:rounded-[inherit] before:bg-white/32 dark:before:bg-white/12 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[122%] hover:before:opacity-100"
                  asChild
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  size="lg"
                  className="relative hidden overflow-hidden text-sm md:inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-200/25 dark:hover:shadow-emerald-900/30 before:absolute before:inset-y-0 before:left-[-65%] before:w-[44%] before:skew-x-[-18deg] before:bg-white/25 dark:before:bg-white/10 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[125%] hover:before:opacity-100"
                  asChild
                >
                  <a href={action.href}>
                    {action.text}
                  </a>
                </Button>
              ),
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm">
                <nav className="grid gap-4 text-base font-medium">
                  <a
                    href={homeUrl}
                    className="group/item relative flex items-center gap-2 rounded-lg border border-border/70 bg-card/65 px-3 py-2.5 text-lg font-semibold transition-all duration-300 active:scale-[0.99]"
                  >
                    <span>{name}</span>
                  </a>
                  {mobilePrimaryLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="mobile-premium-tap group/item relative overflow-hidden rounded-lg border border-border/70 bg-card/60 px-3 py-2.5 text-muted-foreground transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-foreground active:scale-[0.99]"
                    >
                      <span className="pointer-events-none absolute inset-y-0 left-[-55%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-active/item:left-[130%] group-active/item:opacity-100 dark:via-white/20" />
                      {link.text}
                    </a>
                  ))}
                  <div className="rounded-lg border border-border/70 bg-card/55 p-3">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileSection((prev) =>
                          prev === "services" ? null : "services",
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-1 py-1 text-left text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground active:scale-[0.99]"
                    >
                      Services
                      <span
                        className={cn(
                          "text-[10px] transition-transform duration-300",
                          openMobileSection === "services" ? "rotate-180" : "rotate-0",
                        )}
                      >
                        ▼
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-300",
                        openMobileSection === "services"
                          ? "mt-2 max-h-80 gap-1 opacity-100"
                          : "max-h-0 gap-0 opacity-0",
                      )}
                    >
                      {mobileServiceItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="mobile-premium-tap group/item relative overflow-hidden rounded-md border border-transparent px-2 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-brand/30 hover:bg-brand/10 hover:text-foreground active:scale-[0.99]"
                        >
                          <span className="pointer-events-none absolute inset-y-0 left-0 w-0 rounded-r-full bg-brand/60 transition-all duration-300 group-hover/item:w-[3px]" />
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-card/55 p-3">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileSection((prev) =>
                          prev === "solutions" ? null : "solutions",
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-1 py-1 text-left text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground active:scale-[0.99]"
                    >
                      Solutions
                      <span
                        className={cn(
                          "text-[10px] transition-transform duration-300",
                          openMobileSection === "solutions" ? "rotate-180" : "rotate-0",
                        )}
                      >
                        ▼
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-300",
                        openMobileSection === "solutions"
                          ? "mt-2 max-h-96 gap-1 opacity-100"
                          : "max-h-0 gap-0 opacity-0",
                      )}
                    >
                      {mobileSolutionItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="mobile-premium-tap group/item relative overflow-hidden rounded-md border border-transparent px-2 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-brand/30 hover:bg-brand/10 hover:text-foreground active:scale-[0.99]"
                        >
                          <span className="pointer-events-none absolute inset-y-0 left-0 w-0 rounded-r-full bg-brand/60 transition-all duration-300 group-hover/item:w-[3px]" />
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                  <a
                    href="/contact#book"
                    className="mobile-premium-tap mt-1 inline-flex items-center justify-center rounded-lg border border-brand/40 bg-brand/12 px-3 py-2 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-brand/18 hover:shadow-sm hover:shadow-brand/20"
                  >
                    Book a Consultation
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
