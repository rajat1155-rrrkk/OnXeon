import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Cloud Platforms — OnXeon" },
  description:
    "Cloud platform planning across AWS, Azure, GCP and self-hosted infrastructure alternatives.",
};

const cloudChoices = [
  {
    title: "Enterprise Cloud",
    options: ["AWS", "Azure", "GCP"],
    description:
      "For organizations that need managed global services, compliance tooling and broad ecosystem support.",
  },
  {
    title: "Self-Hosted Infrastructure",
    options: ["Docker", "Kubernetes/K3s", "PostgreSQL", "Nextcloud"],
    description:
      "For teams prioritizing lower recurring costs, deployment control and internal data ownership.",
  },
];

const deliveryAreas = [
  "Landing zone and account architecture",
  "Network, identity and secrets model",
  "CI/CD and release automation",
  "Monitoring, backup and incident recovery",
  "Cloud-to-ERP and cloud-to-CRM connectivity",
  "Cost optimization and capacity planning",
];

const productLinks: Record<string, string> = {
  AWS: "/solutions/cloud-platforms",
  Azure: "/solutions/cloud-platforms",
  GCP: "/solutions/cloud-platforms",
  Docker: "/services/cloud-solutions",
  "Kubernetes/K3s": "/services/cloud-solutions",
  PostgreSQL: "/services/cloud-solutions",
  Nextcloud: "/services/cloud-solutions",
};

export default function CloudPlatformsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center">Cloud Platforms</h1>
          <p className="relative z-10 mt-3 text-muted-foreground text-center max-w-3xl mx-auto">
            Platform strategy for enterprise cloud and self-hosted infrastructure, with clear trade-offs for scale,
            security, cost and maintainability.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/18 hover:text-brand after:absolute after:right-2 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-brand/80 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
            >
              Scale Green Compute
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cloudChoices.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <div className="flex flex-wrap gap-2 pt-3">
                {item.options.map((opt) => (
                  <Link
                    key={opt}
                    href={productLinks[opt] || "/services/cloud-solutions"}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-green-300 hover:text-foreground hover:shadow-sm hover:shadow-green-200/30 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/25"
                  >
                    {opt}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <h2 className="text-xl font-semibold">Cloud Engineering Scope</h2>
          <div className="grid gap-2 pt-3 sm:grid-cols-2">
            {deliveryAreas.map((item) => (
              <div key={item} className="rounded-lg border border-border/70 bg-background/70 p-3 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Discuss Cloud Architecture</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services/cloud-solutions">View Cloud Services</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
