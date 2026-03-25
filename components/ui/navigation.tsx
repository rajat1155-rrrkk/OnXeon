"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import {
  desktopMenuItems,
  navigationBranding,
  serviceIntroItems,
  solutionComponentItems,
} from "@/config/navigation";
import { cn } from "@/lib/utils";

import OnXeonMark from "../logos/onxeon-mark";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = desktopMenuItems,
  components = solutionComponentItems,
  logo = <OnXeonMark />,
  logoTitle = navigationBranding.logoTitle,
  logoDescription = navigationBranding.logoDescription,
  logoHref = navigationBranding.logoHref,
  introItems = serviceIntroItems,
}: NavigationProps) {
  const navItemClass =
    "group/nav rounded-full border border-transparent px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/78 transition-all duration-300 hover:text-foreground";

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={`${item.title}-${item.href ?? "menu"}`}>
            {item.isLink ? (
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), navItemClass)}
                asChild
              >
                <Link href={item.href || ""}>{item.title}</Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger className={navItemClass}>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,252,249,0.95))] shadow-[0_24px_54px_-38px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.96),rgba(21,25,23,0.94))]">
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="group/feature relative flex h-full w-full flex-col justify-end rounded-[1.25rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,252,249,0.94))] p-6 no-underline outline-hidden shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] select-none dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(31,35,32,0.94),rgba(24,28,25,0.92))]"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mb-2 mt-4 text-lg font-medium tracking-[-0.02em]">
                              {logoTitle}
                            </div>
                            <p className="text-sm leading-6 text-muted-foreground">
                              {logoDescription}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro) => (
                        <ListItem key={intro.href} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<typeof Link> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          data-slot="list-item"
          className={cn(
            "group/item premium-nav-card chrome-hover relative block space-y-1 rounded-md border border-border/55 bg-card/55 p-3 leading-none no-underline outline-hidden shadow-[0_10px_20px_-20px_hsl(var(--foreground)/0.4)] select-none hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            "rounded-[1.1rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(250,252,249,0.94))] p-4 shadow-[0_14px_28px_-24px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(31,35,32,0.94),rgba(24,28,25,0.92))]",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium tracking-[-0.01em]">{title}</div>
          <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
