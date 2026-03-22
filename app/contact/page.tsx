import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
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
      <div className="mx-auto max-w-6xl px-6 py-24">
      <section className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
        <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand/12 blur-3xl dark:bg-brand/12" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
        <div className="relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
            Advisory Call
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
            Start the conversation with context.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            Share your current stack, priorities and constraints. We will review the context, identify the likely delivery path and come back with practical next steps.
          </p>
          <div className="mt-4">
            <Link
              href="/contact#book"
              className="group/xeon relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/18 hover:text-brand before:absolute before:inset-y-0 before:left-[-60%] before:w-[45%] before:-skew-x-12 before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent before:opacity-0 before:transition-all before:duration-500 hover:before:left-[125%] hover:before:opacity-100 dark:before:via-white/30"
            >
              Go To Inquiry Form
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-5 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
            <h2 className="text-lg font-semibold">Direct Contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use the project inquiry flow to share your requirements.
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                variant="default"
                asChild
                className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/contact#book">Start Inquiry</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/services/onxeon-services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-5 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
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
                  className="rounded-full border border-border/70 bg-white/75 px-2.5 py-1 dark:bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          id="book"
          className="group relative overflow-hidden rounded-[1.5rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-5 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:border-brand/20 hover:shadow-[0_22px_44px_-32px_hsl(var(--foreground)/0.16)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-6 lg:col-span-3"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
          <h2 className="text-lg font-semibold">Project Inquiry Form</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Submit details below and we will follow up with next steps. Your inquiry is now handled inside the app
            rather than posting to a dead endpoint.
          </p>

          <ContactForm />
        </div>
      </section>
      </div>
    </Section>
  );
}
