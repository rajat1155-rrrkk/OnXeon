import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Blog — OnXeon" },
  description:
    "Enterprise implementation blog with practical guides on CRM and ERP integrations, cloud deployment architecture, self-hosted open-source solutions, migration planning and long-term support.",
};

const featuredPost = {
  title: "Enterprise Implementation Strategy: A Practical Rollout Framework",
  description:
    "A step-by-step approach to scope, sequence and deliver CRM and ERP implementations with lower operational risk.",
  href: "/blog/enterprise-implementation-strategy",
};

const categories = [
  "CRM Implementation",
  "ERP Integration",
  "Cloud Architecture",
  "Open-Source & Self-Hosted",
  "Migration Planning",
  "Support & Maintainability",
];

const recentPosts = [
  {
    title: "Choosing Between Enterprise SaaS and Self-Hosted Platforms",
    description:
      "A practical framework for deciding when to adopt vendor platforms versus open-source alternatives.",
    href: "/blog/enterprise-saas-vs-self-hosted",
  },
  {
    title: "Integration Patterns for CRM and ERP Systems",
    description:
      "Approaches for reliability, observability and maintainability in enterprise integrations.",
    href: "/blog/crm-erp-integration-patterns",
  },
  {
    title: "Planning a Low-Risk Enterprise Migration",
    description:
      "How to sequence discovery, rollout and handover for stable migration outcomes.",
    href: "/blog/low-risk-enterprise-migration",
  },
  {
    title: "Salesforce + SAP Data Flow Design for Reliable Operations",
    description:
      "Data ownership, event flow and reconciliation patterns for cross-platform enterprise systems.",
    href: "/blog/salesforce-sap-data-flow-design",
  },
  {
    title: "Operating Self-Hosted Platforms in Production",
    description:
      "How teams run tools like Plane, ERPNext and Nextcloud with secure, maintainable infrastructure.",
    href: "/blog/self-hosted-platform-operations",
  },
  {
    title: "Building Long-Term Maintainable Enterprise Integrations",
    description:
      "Contract versioning, observability and handover practices that keep integrations healthy over time.",
    href: "/blog/maintainable-enterprise-integrations",
  },
];

export default function BlogPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Enterprise Implementation Blog
          </h1>
          <p className="text-muted-foreground">
            Practical insights on CRM and ERP implementation, system
            integration, cloud operations and self-hosted platform delivery.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 space-y-3 transition-all duration-300 hover:shadow-md">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/40 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Featured
          </p>
          <h2 className="relative z-10 text-2xl font-semibold">{featuredPost.title}</h2>
          <p className="relative z-10 text-muted-foreground">{featuredPost.description}</p>
          <div className="relative z-10">
            <Button variant="default" asChild>
              <Link href={featuredPost.href}>Read Article</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="group relative inline-flex">
            <div className="pointer-events-none absolute -inset-x-8 -inset-y-3 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
            </div>
            <h2 className="relative z-10 text-2xl font-semibold">Topics We Cover</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category}
                className="group relative overflow-hidden rounded-md border bg-card px-4 py-3 text-sm font-medium transition-all duration-300 hover:border-green-300 dark:hover:border-emerald-700/60 hover:shadow-sm hover:shadow-green-300/25 dark:hover:shadow-emerald-900/30"
              >
                <div className="pointer-events-none absolute inset-y-0 left-[-70%] w-[60%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                <span className="relative z-10">{category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="group relative inline-flex">
            <div className="pointer-events-none absolute -inset-x-8 -inset-y-3 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
            </div>
            <h2 className="relative z-10 text-2xl font-semibold">Recent Articles</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Link key={post.title} href={post.href}>
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/35 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
                  <CardHeader>
                    <CardTitle className="relative z-10">{post.title}</CardTitle>
                    <CardDescription className="relative z-10">{post.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="group relative inline-flex">
            <div className="pointer-events-none absolute -inset-x-8 -inset-y-3 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="h-full w-full rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/15" />
            </div>
            <h2 className="relative z-10 text-2xl font-semibold">Practical Guides</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/35 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
              <CardHeader>
                <CardTitle className="relative z-10">CRM Rollout Checklist</CardTitle>
                <CardDescription className="relative z-10">
                  Scope controls, ownership model, training and go-live
                  readiness checklist.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/35 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
              <CardHeader>
                <CardTitle className="relative z-10">ERP Integration Playbook</CardTitle>
                <CardDescription className="relative z-10">
                  API contracts, mapping rules and exception handling
                  architecture.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-emerald-700/60">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/35 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
              <CardHeader>
                <CardTitle className="relative z-10">Self-Hosted Operations Baseline</CardTitle>
                <CardDescription className="relative z-10">
                  Backup, patching, monitoring and incident response essentials.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="text-center pt-2">
          <Button variant="default" asChild>
            <Link
            href="/contact#book"
            
          >
            Suggest a Topic
          </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
