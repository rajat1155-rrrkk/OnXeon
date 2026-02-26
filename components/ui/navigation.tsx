"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
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
  menuItems = [
    {
      title: "Services",
      content: "default",
    },
    {
      title: "Solutions",
      content: "components",
    },
    {
      title: "About",
      isLink: true,
      href: "/about",
    },
    {
      title: "Contact",
      isLink: true,
      href: "/contact#book",
    },
  ],
  components = [
    {
      title: "CRM Platforms",
      href: "/solutions/crm-platforms",
      description:
        "Salesforce, Zoho, HubSpot and custom CRM implementations.",
    },
    {
      title: "ERP Systems",
      href: "/solutions/erp-systems",
      description: "ERPNext, SAP integrations and business workflows.",
    },
    {
      title: "Cloud Platforms",
      href: "/solutions/cloud-platforms",
      description: "AWS, Azure and modern cloud deployments.",
    },
    {
      title: "System Integration",
      href: "/solutions/system-integration",
      description: "Connect enterprise tools and automate workflows.",
    },
    {
      title: "Custom Development",
      href: "/solutions/custom-development",
      description: "Tailored software solutions for business needs.",
    },
    {
      title: "Support & Maintenance",
      href: "/solutions/support-maintenance",
      description: "Ongoing support and system optimization.",
    },
  ],
  logo = <LaunchUI />,
  logoTitle = "OnXeon Services",
  logoDescription =
    "Enterprise implementation, integration and support services for modern businesses.",
  logoHref = "/services/onxeon-services",
  introItems = [
    {
      title: "OnXeon Services",
      href: "/services/onxeon-services",
      description:
        "Explore delivery models for implementation, integration and long-term support.",
    },
    {
      title: "CRM Solutions",
      href: "/services/crm-solutions",
      description:
        "Implementation and customization of CRM platforms.",
    },
    {
      title: "ERP Solutions",
      href: "/services/erp-solutions",
      description: "Deployment and integration of ERP systems.",
    },
    {
      title: "Cloud Solutions",
      href: "/services/cloud-solutions",
      description: "Cloud infrastructure and platform services.",
    },
    {
      title: "Services Overview",
      href: "/services",
      description: "See all service tracks and project engagement options.",
    },
  ],
}: NavigationProps) {
  const navItemClass =
    "group/nav relative overflow-hidden rounded-md border border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand/8 hover:shadow-md hover:shadow-brand/15 before:absolute before:inset-y-0 before:left-[-65%] before:w-[44%] before:skew-x-[-18deg] before:bg-white/30 dark:before:bg-white/12 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[125%] hover:before:opacity-100";

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
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
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/35 to-muted/10 flex h-full w-full flex-col justify-end rounded-md border border-border/70 bg-linear-to-b p-6 no-underline outline-hidden shadow-sm shadow-brand/5 transition-all duration-300 select-none focus:shadow-md hover:border-brand/35 hover:shadow-lg hover:shadow-brand/15"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
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
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "group/item relative block space-y-1 rounded-md border border-transparent p-3 leading-none no-underline outline-hidden transition-all duration-300 select-none hover:border-brand/30 hover:bg-brand/8 hover:text-accent-foreground hover:shadow-sm hover:shadow-brand/15 focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <span className="pointer-events-none absolute inset-y-0 left-0 w-0 rounded-r-full bg-brand/60 transition-all duration-300 group-hover/item:w-[3px]" />
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
