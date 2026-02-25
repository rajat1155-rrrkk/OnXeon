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
  homeUrl = siteConfig.url,
  mobileLinks = [
    { text: "Getting Started", href: siteConfig.url },
    { text: "Components", href: siteConfig.url },
    { text: "Documentation", href: siteConfig.url },
  ],
  actions = [
    { text: "Sign in", href: siteConfig.url, isButton: false },
    {
      text: "Get Started",
      href: siteConfig.url,
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div
        className={cn(
          "fade-bottom pointer-events-none absolute inset-x-0 top-0 h-40 border-b bg-gradient-to-b from-white/[0.16] via-white/[0.08] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-1px_0_rgba(255,255,255,0.18),0_12px_28px_rgba(0,0,0,0.07)] backdrop-blur-md backdrop-saturate-200 backdrop-contrast-125 backdrop-brightness-105 transition-all duration-300 dark:from-white/[0.08] dark:via-white/[0.03] dark:backdrop-brightness-110",
          isScrolled
            ? "border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),inset_0_-1px_0_rgba(255,255,255,0.25),0_16px_32px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.35)] dark:border-white/28 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.10),0_16px_32px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.10)]"
            : "border-white/35 dark:border-white/15",
        )}
      />
      <div className="max-w-container relative mx-auto">
        <NavbarComponent
          className={cn(
            "transition-all duration-300",
            isScrolled ? "py-5" : "py-4",
          )}
        >
          <NavbarLeft
            className={cn(
              "transition-transform duration-300",
              isScrolled ? "translate-y-1" : "translate-y-0",
            )}
          >
            <a
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {logo}
              {name}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight
            className={cn(
              "transition-transform duration-300",
              isScrolled ? "translate-y-1" : "translate-y-0",
            )}
          >
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-200/35 dark:hover:shadow-emerald-900/35 before:absolute before:inset-y-0 before:left-[-65%] before:w-[44%] before:skew-x-[-18deg] before:bg-white/35 dark:before:bg-white/15 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[125%] hover:before:opacity-100"
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
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
