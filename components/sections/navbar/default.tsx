"use client";

import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

import {
  navbarActions,
  navbarMobileLinks,
  navbarMobileServiceItems,
  navbarMobileSolutionItems,
} from "@/config/navigation";
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

export default function Navbar({
  logo = <LaunchUI />,
  name = "OnXeon",
  homeUrl = "/",
  mobileLinks = navbarMobileLinks,
  actions = navbarActions,
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
          "fade-bottom pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden border-b bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-[4px] backdrop-saturate-135 backdrop-contrast-105 transition-all duration-300 dark:from-white/[0.05] dark:via-white/[0.02]",
          isScrolled
            ? "border-white/44 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_36px_rgba(0,0,0,0.07),0_0_0_1px_rgba(255,255,255,0.18)] dark:border-white/20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_18px_36px_rgba(0,0,0,0.24),0_0_0_1px_rgba(255,255,255,0.08)]"
            : "border-white/20 dark:border-white/10",
        )}
      >
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(118%_55%_at_12%_10%,rgba(255,255,255,0.3),transparent_58%),radial-gradient(84%_48%_at_78%_8%,rgba(255,255,255,0.18),transparent_62%),radial-gradient(52%_24%_at_48%_0%,rgba(255,255,255,0.14),transparent_68%)] dark:opacity-45" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/25" />
        <div className="absolute -top-6 left-[8%] h-16 w-48 rotate-[-2deg] rounded-full bg-white/20 blur-xl dark:bg-white/10" />
        <div className="absolute -top-6 right-[12%] h-14 w-44 rotate-[2deg] rounded-full bg-white/16 blur-xl dark:bg-white/8" />
      </div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent
          className={cn(
            "relative rounded-xl px-2 transition-all duration-300",
            isScrolled ? "py-3 md:py-4.5" : "py-2.5 md:py-4",
          )}
        >
          <NavbarLeft
            className={cn(
              "transition-transform duration-300",
              isScrolled ? "md:translate-y-1" : "translate-y-0",
            )}
          >
            <Link
              href={homeUrl}
              className="group relative flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/92"
            >
              <span className="transition-transform duration-300 group-hover:scale-[1.03]">
                {logo}
              </span>
              <span className="hidden h-4 w-px bg-border/80 md:block" />
              <span className="tracking-[0.22em]">{name}</span>
            </Link>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight
            className={cn(
              "transition-transform duration-300",
              isScrolled ? "md:translate-y-1" : "translate-y-0",
            )}
          >
            <ThemeCycleButton className="mr-1 md:mr-2" />
            {actions.map((action) =>
              action.isButton ? (
                <Button
                  key={`${action.text}-${action.href}`}
                  variant={action.variant || "default"}
                  className="mobile-premium-tap relative isolate overflow-hidden rounded-full border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,245,0.92))] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-[0_12px_24px_-18px_hsl(var(--foreground)/0.22)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand hover:shadow-[0_16px_30px_-22px_hsl(var(--foreground)/0.22)] dark:bg-[linear-gradient(180deg,rgba(31,35,32,0.94),rgba(24,28,25,0.92))]"
                  asChild
                >
                  <Link href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </Link>
                </Button>
              ) : (
                <Button
                  key={`${action.text}-${action.href}`}
                  variant="ghost"
                  size="lg"
                  className="relative hidden rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/78 md:inline-flex transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                  asChild
                >
                  <Link href={action.href}>
                    {action.text}
                  </Link>
                </Button>
              ),
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 rounded-full border border-border/70 bg-white/70 shadow-[0_10px_20px_-16px_hsl(var(--foreground)/0.18)] md:hidden dark:bg-white/5"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm">
                <nav className="grid gap-4 text-base font-medium">
                  <Link
                    href={homeUrl}
                    className="group/item relative flex items-center gap-2 rounded-[1.25rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/90 shadow-[0_16px_30px_-24px_hsl(var(--foreground)/0.18)] transition-all duration-300 active:scale-[0.99] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
                  >
                    <span>{name}</span>
                  </Link>
                  {mobilePrimaryLinks.map((link) => (
                    <Link
                      key={`${link.text}-${link.href}`}
                      href={link.href}
                      className="mobile-premium-tap group/item relative overflow-hidden rounded-[1.1rem] border border-border/70 bg-white/70 px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:border-brand/25 hover:text-foreground active:scale-[0.99] dark:bg-white/5"
                    >
                      {link.text}
                    </Link>
                  ))}
                  <div className="rounded-[1.25rem] border border-border/70 bg-white/70 p-3 dark:bg-white/5">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileSection((prev) =>
                          prev === "services" ? null : "services",
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-1 py-1 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground active:scale-[0.99]"
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
                      {navbarMobileServiceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="mobile-premium-tap group/item relative overflow-hidden rounded-xl border border-transparent px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-brand/18 hover:bg-white/80 hover:text-foreground active:scale-[0.99] dark:hover:bg-white/6"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.25rem] border border-border/70 bg-white/70 p-3 dark:bg-white/5">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileSection((prev) =>
                          prev === "solutions" ? null : "solutions",
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-1 py-1 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground active:scale-[0.99]"
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
                      {navbarMobileSolutionItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="mobile-premium-tap group/item relative overflow-hidden rounded-xl border border-transparent px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-brand/18 hover:bg-white/80 hover:text-foreground active:scale-[0.99] dark:hover:bg-white/6"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact#book"
                    className="mobile-premium-tap mt-1 inline-flex items-center justify-center rounded-full border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,245,0.92))] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-200 hover:border-brand/25 hover:text-brand dark:bg-[linear-gradient(180deg,rgba(31,35,32,0.94),rgba(24,28,25,0.92))]"
                  >
                    Schedule A Call
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
