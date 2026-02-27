"use client";

import {
  CheckIcon,
  ChevronsUpDownIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="group mobile-premium-tap relative gap-1.5 rounded-md border border-border/70 bg-card/70 px-2.5 py-1 text-xs shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:shadow-brand/20"
        >
          <span className="pointer-events-none absolute inset-y-0 left-[-55%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100 dark:via-white/20" />
          <span className="capitalize">{theme}</span>
          <span className="inline"> theme</span>
          <ChevronsUpDownIcon className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 rounded-xl border-border/70 bg-card/95 p-1 backdrop-blur-sm"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="group/item flex items-center justify-between rounded-lg px-2.5 py-2"
        >
          <span className="inline-flex items-center gap-2">
            <SunIcon className="size-3.5" />
            Light
          </span>
          {theme === "light" && <CheckIcon className="size-3.5 text-brand" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="group/item flex items-center justify-between rounded-lg px-2.5 py-2"
        >
          <span className="inline-flex items-center gap-2">
            <MoonIcon className="size-3.5" />
            Dark
          </span>
          {theme === "dark" && <CheckIcon className="size-3.5 text-brand" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const themeOrder = ["light", "dark"] as const;

export function ThemeCycleButton({
  className,
}: {
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const active = themeOrder.includes(theme as (typeof themeOrder)[number])
    ? (theme as (typeof themeOrder)[number])
    : "light";
  const next = themeOrder[(themeOrder.indexOf(active) + 1) % themeOrder.length];

  const Icon = active === "light" ? SunIcon : MoonIcon;
  const iconClass =
    active === "light"
      ? "size-3.5 text-amber-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
      : "size-3.5 text-indigo-400 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110";

  return (
    <Button
      variant="ghost"
      className={`mobile-premium-tap group relative h-8 w-8 overflow-hidden rounded-full border border-border/75 bg-card/80 p-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-px hover:border-brand/45 hover:bg-brand/10 hover:shadow-[0_8px_20px_-12px_hsl(var(--brand)/0.7)] active:scale-95 focus-visible:ring-2 focus-visible:ring-brand/45 ${className ?? ""}`}
      onClick={() => setTheme(next)}
      aria-label={`Switch theme, current ${active}`}
      title={`Theme: ${active} → ${next}`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_25%,hsl(var(--brand)/0.22),transparent_58%)]" />
      <span className="pointer-events-none absolute inset-y-0 left-[-60%] w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/20" />
      <Icon className={iconClass} />
    </Button>
  );
}
