import { typicalProjects } from "@/config/home";
import Link from "next/link";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

export default function HomeTypicalProjectsSection() {
  return (
    <Section className="py-20 md:py-24">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="group relative inline-flex justify-center">
            <div className="pointer-events-none absolute -inset-x-10 -inset-y-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
            </div>
            <h2 className="relative z-10 text-3xl font-semibold md:text-4xl">Typical Projects</h2>
          </div>
          <p className="text-muted-foreground mt-3">
            CRM and ERP implementations, OEM platform integrations, cloud deployments, and modernization programs.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typicalProjects.map((project) => (
            <div
              key={project.name}
              className="mobile-fx-target group relative overflow-hidden rounded-xl border border-border/70 bg-gradient-to-b from-card/95 to-background/85 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-300/70 hover:shadow-lg hover:shadow-green-200/20 dark:hover:border-emerald-600/60 dark:hover:shadow-emerald-900/30"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300/60 via-green-500/70 to-green-300/60 opacity-70 transition-opacity duration-500 group-hover:opacity-100 dark:from-emerald-500/50 dark:via-emerald-400/70 dark:to-emerald-500/50" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-green-200/35 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-emerald-500/20" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_85%_15%,rgba(34,197,94,0.24),transparent_45%)] dark:bg-[radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.2),transparent_45%)]" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[46%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/25" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold transition-transform duration-500 group-hover:translate-x-[1px]">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mt-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            variant="default"
            asChild
            className="mobile-premium-tap group/project-btn relative overflow-hidden rounded-full border border-border/70 px-6 shadow-[0_10px_24px_-16px_hsl(var(--foreground)/0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:shadow-[0_14px_28px_-18px_hsl(var(--brand)/0.6)] before:absolute before:inset-y-0 before:left-[-58%] before:w-[40%] before:skew-x-[-18deg] before:bg-white/32 dark:before:bg-white/12 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[122%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Discuss Project</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
