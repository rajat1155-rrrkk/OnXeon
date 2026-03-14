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

import LaunchUI from "../logos/launch-ui";
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
  logo = <LaunchUI />,
  logoTitle = navigationBranding.logoTitle,
  logoDescription = navigationBranding.logoDescription,
  logoHref = navigationBranding.logoHref,
  introItems = serviceIntroItems,
}: NavigationProps) {
  const navItemClass =
    "group/nav chrome-hover rounded-md border border-transparent";

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
                <NavigationMenuContent className="premium-dropdown-shell">
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="premium-subsection-card premium-nav-card group/feature chrome-hover from-muted/35 to-muted/10 relative flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden shadow-sm shadow-brand/5 select-none focus:shadow-md"
                            href={logoHref}
                          >
                            <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/feature:opacity-100 [background:linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.08)_22%,transparent_42%)] dark:[background:linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.04)_22%,transparent_42%)]" />
                            <span className="pointer-events-none absolute -top-10 -left-[58%] h-24 w-[40%] -skew-x-12 rounded-md bg-white/30 opacity-0 blur-[1px] transition-all duration-900 group-hover/feature:left-[118%] group-hover/feature:opacity-100 dark:bg-white/14" />
                            <span className="pointer-events-none absolute -bottom-7 left-[12%] h-6 w-20 rounded-md border border-white/20 bg-white/8 opacity-0 blur-[0.5px] transition-all duration-700 group-hover/feature:left-[66%] group-hover/feature:opacity-100 dark:border-white/10 dark:bg-white/4" />
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
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
            "premium-subsection-card",
            className,
          )}
          {...props}
        >
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/item:opacity-100 [background:linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.08)_30%,transparent_52%)] dark:[background:linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.04)_30%,transparent_52%)]" />
          <span className="pointer-events-none absolute top-1/2 -left-[55%] h-10 w-[34%] -translate-y-1/2 -skew-x-12 rounded-sm bg-white/30 opacity-0 blur-[1px] transition-all duration-900 group-hover/item:left-[120%] group-hover/item:opacity-100 dark:bg-white/16" />
          <span className="pointer-events-none absolute right-2 bottom-2 h-1.5 w-6 rounded-[2px] border border-white/20 bg-white/10 opacity-0 transition-all duration-500 group-hover/item:w-8 group-hover/item:opacity-100 dark:border-white/10 dark:bg-white/5" />
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
