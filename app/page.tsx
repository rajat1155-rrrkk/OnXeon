import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Navbar from "../components/sections/navbar/default";
import { Button } from "../components/ui/button";
import { LayoutLines } from "../components/ui/layout-lines";
import { Section } from "../components/ui/section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full [&_.max-w-container]:container [&_.max-w-container]:mx-auto [&_.max-w-container]:max-w-6xl [&_.max-w-container]:px-6 [&_.container]:mx-auto [&_.container]:max-w-6xl [&_.container]:px-6">
      <LayoutLines />
      <Navbar />
      <Hero
        title="Enterprise systems implemented right."
        description="We implement, customize and integrate CRM, ERP and cloud platforms with reliable long-term architecture."
        buttons={[
          {
            href: "/contact#book",
            text: "Book a Consultation",
            variant: "default",
          },
          {
            href: "/solutions",
            text: "See Solutions",
            variant: "glow",
          },
        ]}
      />
      <Section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">What We Do</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">CRM Implementation</h3>
              <p className="text-muted-foreground mt-3">
                Design and implementation of CRM platforms aligned with real
                business workflows.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">ERP Integration</h3>
              <p className="text-muted-foreground mt-3">
                Structured ERP integration and customization for operational
                consistency.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">System Integration</h3>
              <p className="text-muted-foreground mt-3">
                Reliable integrations across CRM, ERP and internal systems.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">Cloud Deployment</h3>
              <p className="text-muted-foreground mt-3">
                Cloud architecture and deployment foundations for enterprise
                systems.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">Open Source Solutions</h3>
              <p className="text-muted-foreground mt-3">
                Self-hosted alternatives that reduce software costs and increase
                control.
              </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Why OnXeon</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Enterprise-grade architecture",
                description:
                  "Architecture designed for reliability, scalability and operational clarity.",
              },
              {
                title: "Vendor-neutral approach",
                description:
                  "Platform recommendations based on fit, not vendor lock-in.",
              },
              {
                title: "Long-term maintainability",
                description:
                  "Systems built to be maintainable by internal teams over time.",
              },
              {
                title: "Self-hosted expertise",
                description:
                  "Strong delivery experience with secure self-hosted enterprise tools.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
                <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Typical Projects
            </h2>
            <p className="text-muted-foreground mt-3">
              CRM implementations, ERP integrations, data migrations, cloud
              deployments, and system modernization.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "CRM Implementations",
                description:
                  "New CRM setup and process alignment for sales and support teams.",
              },
              {
                name: "ERP Integrations",
                description:
                  "ERP connectivity with CRM, finance and internal systems.",
              },
              {
                name: "Data Migrations",
                description:
                  "Planned and validated migration from legacy tools and datasets.",
              },
              {
                name: "Cloud Deployments",
                description:
                  "Production-ready cloud deployment for enterprise applications.",
              },
              {
                name: "System Modernization",
                description:
                  "Incremental modernization of existing enterprise workflows.",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
                <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-muted-foreground mt-3">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <Button
                      variant="default"
                      asChild
                      className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
                    >
                      <Link href="/contact#book">Discuss Project</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CTA title="Discuss your next implementation project" />
      <Footer />
    </main>
  );
}
