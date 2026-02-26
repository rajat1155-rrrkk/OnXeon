import CTA from "../components/sections/cta/default";
import Hero from "../components/sections/hero/default";
import { Button } from "../components/ui/button";
import { LayoutLines } from "../components/ui/layout-lines";
import { Section } from "../components/ui/section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full [&_.max-w-container]:container [&_.max-w-container]:mx-auto [&_.max-w-container]:max-w-6xl [&_.max-w-container]:px-6 [&_.container]:mx-auto [&_.container]:max-w-6xl [&_.container]:px-6">
      <LayoutLines />
      <Hero
        title="Enterprise systems implemented right."
        description="We implement, customize and integrate CRM, ERP and cloud platforms across Salesforce, SAP, Zoho, Odoo, ServiceNow, AWS, GCP and Azure with reliable long-term architecture."
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
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="group relative inline-flex justify-center">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
              </div>
              <h2 className="relative z-10 text-3xl font-semibold md:text-4xl">
                What We Do
              </h2>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-green-100/80 dark:border-emerald-900/40 bg-card p-6">
            <div className="text-sm text-muted-foreground">
              Platforms and products we implement, integrate and support.
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-green-100/80 dark:border-emerald-900/40 bg-background/70 p-4">
                <h3 className="text-sm font-semibold">Enterprise Platforms</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    {
                      name: "Salesforce",
                      src: "/logos/Salesforce.png",
                      href: "/solutions/crm-platforms",
                    },
                    {
                      name: "SAP",
                      src: "/logos/SAP.png",
                      href: "/solutions/erp-systems",
                    },
                    {
                      name: "ServiceNow",
                      src: "/logos/ServiceNow.jpg",
                      href: "/solutions/crm-platforms",
                    },
                    {
                      name: "AWS",
                      src: "/logos/AWS.png",
                      href: "/solutions/cloud-platforms",
                    },
                    {
                      name: "Azure",
                      src: "/logos/Azure.png",
                      href: "/solutions/cloud-platforms",
                    },
                    {
                      name: "GCP",
                      src: "/logos/GCP.svg",
                      href: "/solutions/cloud-platforms",
                    },
                  ].map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="group relative overflow-hidden flex items-center gap-2 rounded-lg border border-green-100/80 dark:border-emerald-900/40 bg-card px-3 py-2 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-green-300 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-300/30 dark:hover:shadow-emerald-900/40"
                    >
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-green-100/55 to-transparent dark:via-emerald-500/20" />
                      <span className="pointer-events-none absolute -inset-4 rounded-xl bg-green-300/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-emerald-500/20" />
                      <span className="pointer-events-none absolute inset-y-0 left-[-45%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/85 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/40" />
                      <img
                        src={platform.src}
                        alt={`${platform.name} logo`}
                        className="relative z-10 h-5 w-5 rounded-sm object-contain transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-3"
                        loading="lazy"
                      />
                      <span className="relative z-10 text-sm font-medium transition-all duration-300 group-hover:text-foreground group-hover:tracking-wide">
                        {platform.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-green-100/80 dark:border-emerald-900/40 bg-background/70 p-4">
                <h3 className="text-sm font-semibold">
                  Open Source & Self-Hosted
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    {
                      name: "Plane",
                      src: "/logos/Plane.png",
                      href: "/services/onxeon-services",
                    },
                    {
                      name: "ERPNext",
                      src: "/logos/ERPnext.png",
                      href: "/services/erp-solutions",
                    },
                    {
                      name: "Odoo",
                      src: "/logos/odoo.png",
                      href: "/services/erp-solutions",
                    },
                    {
                      name: "Nextcloud",
                      src: "/logos/Nextcloud.png",
                      href: "/services/onxeon-services",
                    },
                    {
                      name: "PostgreSQL",
                      src: "/logos/Postgresql.png",
                      href: "/services/cloud-solutions",
                    },
                    {
                      name: "Docker",
                      src: "/logos/Docker.png",
                      href: "/services/cloud-solutions",
                    },
                  ].map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="group relative overflow-hidden flex items-center gap-2 rounded-lg border border-green-100/80 dark:border-emerald-900/40 bg-card px-3 py-2 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-green-300 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-300/30 dark:hover:shadow-emerald-900/40"
                    >
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-green-100/55 to-transparent dark:via-emerald-500/20" />
                      <span className="pointer-events-none absolute -inset-4 rounded-xl bg-green-300/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-emerald-500/20" />
                      <span className="pointer-events-none absolute inset-y-0 left-[-45%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/85 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/40" />
                      <img
                        src={platform.src}
                        alt={`${platform.name} logo`}
                        className="relative z-10 h-5 w-5 rounded-sm object-contain transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-3"
                        loading="lazy"
                      />
                      <span className="relative z-10 text-sm font-medium transition-all duration-300 group-hover:text-foreground group-hover:tracking-wide">
                        {platform.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">CRM Implementation</h3>
              <p className="text-muted-foreground mt-3">
                Design and implementation of Salesforce, Zoho and ServiceNow
                workflows aligned with business operations.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">ERP Integration</h3>
              <p className="text-muted-foreground mt-3">
                Structured SAP and Odoo integration with finance, operations
                and reporting systems.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">System Integration</h3>
              <p className="text-muted-foreground mt-3">
                Reliable API and workflow integration across CRM, ERP and
                internal tools.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">Cloud Deployment</h3>
              <p className="text-muted-foreground mt-3">
                Cloud architecture and deployment on AWS, GCP and Azure for
                production enterprise systems.
              </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-green-100 dark:border-emerald-900/45 bg-gradient-to-b from-green-50/70 to-white dark:from-emerald-950/45 dark:to-card p-6 transition-colors duration-500 hover:border-green-200 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/60 to-green-50/10 dark:from-emerald-500/15 dark:to-transparent opacity-30 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
              <div className="relative z-10">
              <h3 className="text-lg font-semibold">Open Source Solutions</h3>
              <p className="text-muted-foreground mt-3">
                Vendor-neutral and self-hosted alternatives that reduce
                licensing costs and increase control.
              </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="py-24">
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="group relative inline-flex justify-center">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
              </div>
              <h2 className="relative z-10 text-3xl font-semibold md:text-4xl">
                Why OnXeon
              </h2>
            </div>
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
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="group relative inline-flex justify-center">
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
              </div>
              <h2 className="relative z-10 text-3xl font-semibold md:text-4xl">
                Typical Projects
              </h2>
            </div>
            <p className="text-muted-foreground mt-3">
              CRM and ERP implementations, OEM platform integrations, cloud
              deployments, and modernization programs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "CRM Implementations",
                description:
                  "Salesforce, Zoho and ServiceNow implementation for sales, service and internal operations.",
              },
              {
                name: "ERP Integrations",
                description:
                  "SAP and Odoo integration with CRM, finance platforms and internal business systems.",
              },
              {
                name: "OEM Platform Integrations",
                description:
                  "Integrate OEM and third-party platforms into your enterprise stack with stable interfaces.",
              },
              {
                name: "Cloud Deployments",
                description:
                  "Production-ready deployment and hardening on AWS, GCP and Azure.",
              },
              {
                name: "System Modernization",
                description:
                  "Incremental modernization of legacy workflows, integrations and platform architecture.",
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
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              variant="default"
              asChild
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
            >
              <Link href="/contact#book">Discuss Project</Link>
            </Button>
          </div>
        </div>
      </Section>
      <CTA title="Discuss your next implementation project" />
    </main>
  );
}
