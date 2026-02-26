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
  homeUrl = "/",
  mobileLinks = [
    { text: "Services", href: "/services" },
    { text: "Solutions", href: "/solutions" },
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
              isScrolled ? "translate-y-1" : "translate-y-0",
            )}
          >
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 before:absolute before:inset-y-0 before:left-[-65%] before:w-[44%] before:skew-x-[-18deg] before:bg-white/35 dark:before:bg-white/15 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[125%] hover:before:opacity-100"
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
