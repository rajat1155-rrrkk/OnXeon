import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Cloud Solutions — OnXeon" },
  description:
    "Cloud architecture services across AWS, Azure, GCP and self-hosted infrastructure stacks.",
};

const enterpriseCloud = [
  {
    name: "AWS",
    detail: "Scalable workloads, observability, IAM, backup and deployment automation.",
  },
  {
    name: "Microsoft Azure",
    detail: "Hybrid enterprise deployments with identity, policy and security baseline controls.",
  },
  {
    name: "Google Cloud (GCP)",
    detail: "Data and application platform architecture with resilient operations.",
  },
];

const selfHostedCloud = [
  {
    name: "Docker + Compose",
    detail: "Practical self-hosted deployments for apps, APIs and internal services.",
  },
  {
    name: "Kubernetes / K3s",
    detail: "Container orchestration for teams needing control without hyperscaler lock-in.",
  },
  {
    name: "Nextcloud + PostgreSQL",
    detail: "Self-hosted collaboration and data layers for secure internal operations.",
  },
];

const cloudWork = [
  "Landing zones and environment strategy",
  "Identity, secrets and network segmentation",
  "CI/CD pipelines and release governance",
  "Monitoring, incident runbooks and backup",
  "Cost control and rightsizing",
  "Migration from on-prem or legacy cloud setups",
];

export default function CloudSolutionsPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-semibold text-center">Cloud Solutions</h1>
          <p className="relative z-10 mt-3 text-muted-foreground text-center max-w-3xl mx-auto">
            Cloud delivery across enterprise hyperscalers and self-hosted infrastructure, balanced for reliability,
            security and long-term cost efficiency.
          </p>
          <div className="relative z-10 mt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:scale-[1.03] hover:border-brand/55 hover:bg-brand/18 hover:text-brand hover:shadow-lg hover:shadow-brand/20"
            >
              Launch Cloud Orbit
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card space-y-4 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="text-xl font-semibold">Enterprise Cloud Platforms</h2>
            <div className="space-y-3">
              {enterpriseCloud.map((item) => (
                <div key={item.name} className="rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card space-y-4 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <h2 className="text-xl font-semibold">Self-Hosted Cloud Stack</h2>
            <div className="space-y-3">
              {selfHostedCloud.map((item) => (
                <div key={item.name} className="rounded-lg border border-border/70 bg-background/70 p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 p-6 bg-card transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <h2 className="text-xl font-semibold">Cloud Delivery Scope</h2>
          <div className="grid gap-2 pt-3 sm:grid-cols-2">
            {cloudWork.map((item) => (
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
            <Link href="/contact#book">Discuss Cloud Project</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/solutions/cloud-platforms">View Cloud Platforms</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
