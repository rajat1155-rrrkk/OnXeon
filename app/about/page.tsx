import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "About — OnXeon" },
  description:
    "About OnXeon: enterprise SaaS implementation plus affordable self-hosted modernization expertise.",
};

export default function AboutPage() {
  const focusLinks: Record<string, string> = {
    Salesforce: "/solutions/crm-platforms",
    SAP: "/solutions/erp-systems",
    "System Integrations": "/solutions/system-integration",
    "Self-Hosted Platforms": "/services/onxeon-services",
    "Open Source Solutions": "/services/onxeon-services",
    "Enhancements & Support": "/services/onxeon-services",
  };

  return (
    <Section>
      <div className="max-w-6xl mx-auto px-6 py-24">
      <section className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25">
        <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
        <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/25" />
        <div className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            About OnXeon
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
            Enterprise implementations, built for long-term operations.
          </h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            OnXeon delivers practical systems across CRM, ERP and cloud for teams using enterprise SaaS platforms and
            teams choosing affordable self-hosted alternatives. We combine implementation rigor with vendor-neutral
            recommendations based on fit, cost and long-term maintainability.
          </p>
          <div className="mt-4">
            <Link
              href="/contact#book"
              className="group/xeon inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:scale-[1.02] hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_18px_hsl(var(--brand)/0.26)]"
            >
              Built For Velocity
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.24),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.2),transparent_46%)]" />
          <h2 className="text-lg font-semibold">How We Work</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• Discovery-first planning aligned with real workflows</li>
            <li>• Structured implementation with measurable milestones</li>
            <li>• Integration-first architecture across systems and teams</li>
            <li>• Long-term maintainability, handover, and support</li>
          </ul>
        </div>
        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.24),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.2),transparent_46%)]" />
          <h2 className="text-lg font-semibold">Core Focus Areas</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {[
              "Salesforce",
              "SAP",
              "System Integrations",
              "Self-Hosted Platforms",
              "Open Source Solutions",
              "Enhancements & Support",
            ].map((item) => (
              <Link
                key={item}
                href={focusLinks[item] || "/services"}
                className="rounded-full border border-green-200/80 bg-green-50/70 px-2.5 py-1 dark:border-emerald-800/60 dark:bg-emerald-900/20"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            We support startups and established businesses with delivery models
            that fit budget, timeline, and technical complexity.
          </p>
        </div>
      </section>

      <section className="group relative mt-8 overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 md:p-8 transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
        <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/20" />
        <h2 className="text-xl font-semibold">Build with OnXeon</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          If you are planning a CRM rollout, ERP integration, or migration to
          self-hosted systems, we can help define a realistic execution path.
        </p>
        <div className="mt-4 flex gap-2">
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Book Consultation</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-200/35 dark:hover:shadow-emerald-900/35 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/40 dark:before:bg-white/10 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/services/onxeon-services">Explore Services</Link>
          </Button>
        </div>
      </section>
      </div>
    </Section>
  );
}
