"use client";

import { useEffect } from "react";

export default function MobileScrollEffects() {
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    document.documentElement.classList.add("mobile-scroll-fx");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".mobile-fx-target"),
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("mobile-fx-inview");
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.16,
      },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

