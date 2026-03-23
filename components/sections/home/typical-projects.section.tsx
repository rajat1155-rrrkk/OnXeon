import { typicalProjects } from "@/config/home";
import Link from "next/link";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

export default function HomeTypicalProjectsSection() {
  return (
    <Section className="py-24 md:py-28">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Typical Engagements
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Typical Projects</h2>
          <p className="text-muted-foreground mt-4 text-sm leading-7 sm:text-base">
            CRM and ERP programmes, OEM platform integrations, cloud environments and carefully managed modernisation
            work.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {typicalProjects.map((project) => (
            <div
              key={project.name}
              className="mobile-fx-target group relative overflow-hidden rounded-[1.6rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.975),rgba(250,252,249,0.945))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/14 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
              <div className="relative z-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Programme Shape
                </p>
                <h3 className="text-lg font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-[1px]">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mt-3 leading-6">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button
            variant="default"
            asChild
            className="mobile-premium-tap rounded-full px-6 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/contact#book">Discuss A Comparable Programme</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
