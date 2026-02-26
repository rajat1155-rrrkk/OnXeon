import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Contact — OnXeon" },
  description:
    "Contact OnXeon for enterprise SaaS implementation, integration, and affordable self-hosted system projects.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto px-6 py-24">
      <section className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25">
        <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
        <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/25" />
        <div className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Contact OnXeon
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
            Discuss your next implementation with our team.
          </h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Share your stack, goals and constraints. We help with enterprise SaaS implementations and affordable
            self-hosted alternatives, then propose a practical engagement model and execution path.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <div className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.24),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.2),transparent_46%)]" />
            <h2 className="text-lg font-semibold">Direct Contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use the project inquiry flow to share your requirements.
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                variant="default"
                asChild
                className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
              >
                <Link href="/contact#book">Start Inquiry</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-200/35 dark:hover:shadow-emerald-900/35 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/40 dark:before:bg-white/10 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
              >
                <Link href="/services/onxeon-services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-green-100/80 bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
            <div className="pointer-events-none absolute left-0 top-3 bottom-3 w-1 origin-top scale-y-0 rounded-full bg-gradient-to-b from-green-400 to-green-600 transition-transform duration-500 group-hover:scale-y-100 dark:from-emerald-400 dark:to-emerald-600" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(34,197,94,0.24),transparent_46%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.2),transparent_46%)]" />
            <h3 className="text-sm font-semibold text-foreground">Typical Topics</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                "CRM Implementation",
                "ERP Integration",
                "Self-Hosted Migration",
                "System Modernization",
                "AI Workflow Enablement",
                "Long-Term Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-green-200/80 bg-green-50/70 px-2.5 py-1 dark:border-emerald-800/60 dark:bg-emerald-900/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden lg:col-span-3 rounded-xl border border-green-100/80 bg-card p-5 md:p-6 transition-all duration-500 hover:border-green-300 dark:border-emerald-900/40 dark:hover:border-emerald-700/60 hover:shadow-lg hover:shadow-green-200/35 dark:hover:shadow-emerald-900/30">
          <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/20" />
          <h2 className="text-lg font-semibold">Project Inquiry Form</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Submit details below and we will follow up with next steps.
          </p>

          <form action="/contact#book" method="post" className="mt-5 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm outline-none transition focus:border-green-300 dark:focus:border-emerald-600"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Work Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm outline-none transition focus:border-green-300 dark:focus:border-emerald-600"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Company</span>
                <input
                  type="text"
                  name="company"
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm outline-none transition focus:border-green-300 dark:focus:border-emerald-600"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Primary Focus</span>
                <select
                  name="focus"
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm outline-none transition focus:border-green-300 dark:focus:border-emerald-600"
                >
                  <option>CRM</option>
                  <option>ERP</option>
                  <option>System Integration</option>
                  <option>Self-Hosted</option>
                  <option>Support & Enhancements</option>
                </select>
              </label>
            </div>

            <label className="grid gap-1.5">
              <span className="text-sm font-medium">Project Details</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Share systems involved, target timeline, and expected outcomes."
                className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-green-300 dark:focus:border-emerald-600"
              />
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                type="submit"
                variant="default"
                className="relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-300/40 dark:hover:shadow-emerald-900/40 before:absolute before:inset-y-0 before:left-[-60%] before:w-1/2 before:skew-x-[-18deg] before:bg-white/45 dark:before:bg-white/20 before:opacity-0 before:transition-all before:duration-700 hover:before:left-[130%] hover:before:opacity-100"
              >
                Send Inquiry
              </Button>
              <p className="text-xs text-muted-foreground">
                Typical response time: 1 business day.
              </p>
            </div>
          </form>
        </div>
      </section>
      </div>
    </Section>
  );
}
