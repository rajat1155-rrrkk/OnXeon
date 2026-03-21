import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Enterprise Implementation Blog — OnXeon" },
  description:
    "Practical guides on enterprise SaaS implementation, CRM and ERP integrations, cloud architecture, and affordable self-hosted alternatives.",
  keywords: [
    "enterprise implementation blog",
    "Salesforce integration",
    "SAP integration",
    "self-hosted alternatives",
    "CRM ERP integration patterns",
    "enterprise migration planning",
    "cloud architecture",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Enterprise Implementation Blog — OnXeon",
    description:
      "Practical guides on enterprise SaaS and affordable self-hosted delivery across CRM, ERP and cloud.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Implementation Blog — OnXeon",
    description:
      "Practical guides on enterprise SaaS and affordable self-hosted delivery across CRM, ERP and cloud.",
  },
};

const featuredPost = {
  title: "Enterprise Implementation Strategy: A Practical Rollout Framework",
  description:
    "A step-by-step approach to scope, sequence and deliver CRM and ERP implementations with lower operational risk.",
  href: "/blog/enterprise-implementation-strategy",
  tag: "Implementation Strategy",
};

const recentPosts = [
  {
    title: "Choosing Between Enterprise SaaS and Self-Hosted Platforms",
    description:
      "A practical framework for deciding when to adopt vendor platforms versus open-source alternatives.",
    href: "/blog/enterprise-saas-vs-self-hosted",
    tag: "Platform Strategy",
  },
  {
    title: "Integration Patterns for CRM and ERP Systems",
    description:
      "Approaches for reliability, observability and maintainability in enterprise integrations.",
    href: "/blog/crm-erp-integration-patterns",
    tag: "Integrations",
  },
  {
    title: "Planning a Low-Risk Enterprise Migration",
    description:
      "How to sequence discovery, rollout and handover for stable migration outcomes.",
    href: "/blog/low-risk-enterprise-migration",
    tag: "Migration",
  },
  {
    title: "Salesforce + SAP Data Flow Design for Reliable Operations",
    description:
      "Data ownership, event flow and reconciliation patterns for cross-platform enterprise systems.",
    href: "/blog/salesforce-sap-data-flow-design",
    tag: "Salesforce + SAP",
  },
  {
    title: "Operating Self-Hosted Platforms in Production",
    description:
      "How teams run tools like Plane, ERPNext and Nextcloud with secure, maintainable infrastructure.",
    href: "/blog/self-hosted-platform-operations",
    tag: "Self-Hosted Ops",
  },
  {
    title: "Building Long-Term Maintainable Enterprise Integrations",
    description:
      "Contract versioning, observability and handover practices that keep integrations healthy over time.",
    href: "/blog/maintainable-enterprise-integrations",
    tag: "Maintainability",
  },
  {
    title: "ServiceNow Workflow Design for Enterprise Teams",
    description:
      "Designing ServiceNow workflows that stay aligned with ERP, support and internal operations.",
    href: "/blog/servicenow-enterprise-workflows",
    tag: "ServiceNow",
  },
  {
    title: "Cost Modeling for Self-Hosted CRM and ERP",
    description:
      "A practical method to compare SaaS licensing and self-hosted operational cost over time.",
    href: "/blog/self-hosted-crm-erp-cost-models",
    tag: "Cost Optimization",
  },
];

const tracks = [
  {
    title: "Enterprise SaaS Delivery",
    description: "Salesforce, SAP and ServiceNow implementation and integration decisions.",
    links: [
      { text: "Enterprise Implementation Strategy", href: "/blog/enterprise-implementation-strategy" },
      { text: "Salesforce + SAP Data Flow Design", href: "/blog/salesforce-sap-data-flow-design" },
      { text: "ServiceNow Workflow Design", href: "/blog/servicenow-enterprise-workflows" },
    ],
  },
  {
    title: "Self-Hosted Alternatives",
    description: "Practical guidance for affordable open-source and self-hosted stacks.",
    links: [
      { text: "Enterprise SaaS vs Self-Hosted", href: "/blog/enterprise-saas-vs-self-hosted" },
      { text: "Operating Self-Hosted Platforms", href: "/blog/self-hosted-platform-operations" },
      { text: "Self-Hosted CRM/ERP Cost Models", href: "/blog/self-hosted-crm-erp-cost-models" },
    ],
  },
  {
    title: "Integration & Migration",
    description: "Patterns for reliable integrations and low-risk migration rollouts.",
    links: [
      { text: "CRM ERP Integration Patterns", href: "/blog/crm-erp-integration-patterns" },
      { text: "Low-Risk Enterprise Migration", href: "/blog/low-risk-enterprise-migration" },
      { text: "Maintainable Enterprise Integrations", href: "/blog/maintainable-enterprise-integrations" },
    ],
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "OnXeon Blog",
  description:
    "Practical guides on enterprise SaaS implementation, CRM/ERP integrations, cloud architecture, and self-hosted alternatives.",
  blogPost: recentPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: post.href,
  })),
};

export default function BlogPage() {
  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="mx-auto max-w-6xl space-y-12 py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] px-8 py-10 text-center shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:px-14 md:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand/10 blur-3xl dark:bg-brand/12" />
          <div className="pointer-events-none absolute -right-10 bottom-4 h-44 w-44 rounded-full bg-brand/8 blur-3xl dark:bg-brand/10" />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              OnXeon Journal
            </p>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">
                Enterprise ideas, written for teams making consequential platform decisions.
              </h1>
              <p className="mx-auto max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
                Practical notes on CRM, ERP, cloud and self-hosted delivery, shaped by the realities of architecture,
                implementation risk and long-term operating cost.
              </p>
            </div>
            <div className="pt-1">
              <Link
                href="/contact#book"
                className="inline-flex items-center rounded-full border border-brand/25 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/45 hover:text-brand dark:bg-white/5"
              >
                Suggest A Topic
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs text-muted-foreground">
              <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 dark:bg-white/5">
                Strategy, delivery and operations
              </span>
              <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 dark:bg-white/5">
                Enterprise SaaS and self-hosted
              </span>
              <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 dark:bg-white/5">
                Written for implementation teams
              </span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-7 shadow-[0_18px_40px_-32px_hsl(var(--foreground)/0.14)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="relative z-10 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Featured Reading • {featuredPost.tag}
            </p>
            <h2 className="max-w-3xl text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              {featuredPost.description}
            </p>
            <div>
              <Button
                variant="default"
                asChild
                className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href={featuredPost.href}>Read The Featured Article</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">Latest Articles</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Link key={post.title} href={post.href}>
                <Card className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
                  <CardHeader>
                    <div className="inline-flex w-fit rounded-full border border-border/70 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground dark:bg-white/5">
                      {post.tag}
                    </div>
                    <CardTitle className="relative z-10 text-xl tracking-[-0.02em]">{post.title}</CardTitle>
                    <CardDescription className="relative z-10 text-sm leading-6">{post.description}</CardDescription>
                    <div className="pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-colors duration-300 group-hover:text-brand">
                      Read Article
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">Read by Track</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {tracks.map((track) => (
              <Card
                key={track.title}
                className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
                <CardHeader className="space-y-3">
                  <CardTitle className="tracking-[-0.02em]">{track.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">{track.description}</CardDescription>
                  <div className="space-y-2">
                    {track.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl border border-border/70 bg-white/70 px-4 py-3 text-sm text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/20 hover:text-brand hover:shadow-[0_16px_28px_-24px_hsl(var(--foreground)/0.16)] dark:bg-white/5"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2 text-center">
          <p className="text-sm text-muted-foreground">
            Need a deeper note on a platform decision, migration path or integration pattern? We can write one with
            your context in mind.
          </p>
          <Button
            variant="default"
            asChild
            className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/contact#book">Request A Topic</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
