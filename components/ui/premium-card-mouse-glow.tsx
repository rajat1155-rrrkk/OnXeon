"use client";

import { useEffect } from "react";

export default function PremiumCardMouseGlow() {
  useEffect(() => {
    const selector = ".premium-soft-card";

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const card = target?.closest(selector) as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    };

    const handlePointerLeave = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const card = target?.closest(selector) as HTMLElement | null;
      if (!card) return;
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, true);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave, true);
    };
  }, []);

  return null;
}
