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
      <div className="max-w-6xl mx-auto py-24 space-y-12">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/25" />
          <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold">Enterprise Implementation Blog</h1>
            <p className="text-muted-foreground">
              Practical guides for enterprise SaaS implementation and affordable self-hosted alternatives across CRM,
              ERP, cloud and system integration.
            </p>
            <div className="pt-1">
              <Link
                href="/contact#book"
                className="group/xeon relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/16 hover:text-brand after:absolute after:right-2 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-brand/70 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
              >
                Spark New Ideas
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs text-muted-foreground">
              <span className="rounded-full border border-green-200/80 bg-green-50/70 px-3 py-1 dark:border-emerald-800/60 dark:bg-emerald-900/20">8+ Articles</span>
              <span className="rounded-full border border-green-200/80 bg-green-50/70 px-3 py-1 dark:border-emerald-800/60 dark:bg-emerald-900/20">CRM / ERP / Cloud</span>
              <span className="rounded-full border border-green-200/80 bg-green-50/70 px-3 py-1 dark:border-emerald-800/60 dark:bg-emerald-900/20">SaaS + Self-Hosted</span>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 dark:border-emerald-900/40 bg-card p-6 space-y-3 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/40 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Featured • {featuredPost.tag}</p>
          <h2 className="relative z-10 text-2xl font-semibold">{featuredPost.title}</h2>
          <p className="relative z-10 text-muted-foreground">{featuredPost.description}</p>
          <div className="relative z-10">
            <Button
              variant="default"
              asChild
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
            >
              <Link href={featuredPost.href}>Read Featured Article</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Link key={post.title} href={post.href}>
                <Card className="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
                  <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/35 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
                  <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
                  <CardHeader>
                    <div className="inline-flex w-fit rounded-full border border-green-200/80 bg-green-50/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground dark:border-emerald-800/60 dark:bg-emerald-900/20">
                      {post.tag}
                    </div>
                    <CardTitle className="relative z-10">{post.title}</CardTitle>
                    <CardDescription className="relative z-10">{post.description}</CardDescription>
                    <div className="pt-1 text-xs font-medium text-foreground/80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand">
                      {"Read article ->"}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Read by Track</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {tracks.map((track) => (
              <Card key={track.title} className="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200/35 hover:border-green-300 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/30">
                <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-100/0 to-green-100/0 transition-all duration-500 group-hover:from-green-100/35 group-hover:to-transparent dark:group-hover:from-emerald-500/12" />
                <div className="pointer-events-none absolute inset-y-0 left-[-55%] w-[48%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent opacity-0 transition-all duration-900 group-hover:left-[135%] group-hover:opacity-100" />
                <CardHeader className="space-y-3">
                  <CardTitle>{track.title}</CardTitle>
                  <CardDescription>{track.description}</CardDescription>
                  <div className="space-y-2">
                    {track.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm text-foreground transition-all duration-300 hover:-translate-y-px hover:border-green-300 hover:text-brand hover:shadow-sm hover:shadow-green-200/30 dark:hover:border-emerald-700/60 dark:hover:shadow-emerald-900/25"
                      >
                        {`${item.text} ->`}
                      </Link>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center pt-2 space-y-3">
          <p className="text-muted-foreground text-sm">
            Need a deep-dive article on your stack? We can publish practical implementation notes for your use case.
          </p>
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Request a Topic</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
