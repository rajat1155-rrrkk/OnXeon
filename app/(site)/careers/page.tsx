import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Careers — OnXeon" },
  description:
    "Join OnXeon to work on enterprise implementations, integrations and open-source delivery projects.",
};

const roles = [
  {
    title: "Integration Engineer",
    description:
      "Build and maintain API integrations across CRM, ERP and internal systems.",
  },
  {
    title: "Enterprise Solutions Consultant",
    description:
      "Drive implementation planning, stakeholder alignment and delivery governance.",
  },
  {
    title: "Cloud & Platform Engineer",
    description:
      "Deploy and operate enterprise and self-hosted systems on cloud infrastructure.",
  },
];

export default function CareersPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-10">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 text-center space-y-4 max-w-3xl mx-auto transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/20" />
          <h1 className="text-3xl md:text-4xl font-semibold">Careers</h1>
          <p className="text-muted-foreground">
            We work on practical enterprise systems with a vendor-neutral,
            engineering-focused approach.
          </p>
          <div>
            <Link
              href="/contact#book"
              className="group/xeon inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/18 hover:text-brand hover:shadow-[0_0_16px_hsl(var(--brand)/0.24)]"
            >
              Build Fast Systems
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.title} className="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
              <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.24),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.2),transparent_46%)]" />
              <CardHeader>
                <CardTitle>{role.title}</CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-6 space-y-3 transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/20" />
          <h2 className="text-xl font-semibold">How to Apply</h2>
          <p className="text-muted-foreground">
            Submit your profile and relevant project experience through our
            inquiry form.
          </p>
          <Button
            variant="default"
            asChild
            className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
          >
            <Link href="/contact#book">Submit Application Inquiry</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
