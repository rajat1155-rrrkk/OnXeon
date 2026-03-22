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
          className="group mobile-premium-tap relative gap-1.5 rounded-full border border-border/70 bg-white/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] shadow-[0_12px_24px_-20px_hsl(var(--foreground)/0.18)] transition-all duration-300 hover:border-brand/25 hover:text-brand dark:bg-white/5"
        >
          <span className="capitalize">{theme}</span>
          <span className="inline"> theme</span>
          <ChevronsUpDownIcon className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 rounded-[1.1rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,252,249,0.95))] p-1 backdrop-blur-sm dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(31,35,32,0.94),rgba(24,28,25,0.92))]"
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
      className={`mobile-premium-tap group relative h-8 w-8 overflow-hidden rounded-full border border-border/75 bg-white/75 p-0 shadow-[0_12px_22px_-18px_hsl(var(--foreground)/0.16)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-px hover:border-brand/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand/35 dark:bg-white/5 ${className ?? ""}`}
      onClick={() => setTheme(next)}
      aria-label={`Switch theme, current ${active}`}
      title={`Theme: ${active} → ${next}`}
    >
      <Icon className={iconClass} />
    </Button>
  );
}
