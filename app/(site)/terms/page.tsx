import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service — OnXeon" },
  description:
    "Terms of Service for OnXeon covering use of website, service engagements, responsibilities, and legal terms.",
};

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-8 shadow-[0_24px_54px_-40px_hsl(var(--foreground)/0.16)] transition-all duration-500 hover:shadow-[0_30px_62px_-44px_hsl(var(--foreground)/0.2)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))] md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl dark:bg-brand/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent dark:via-white/20" />
          <div className="relative z-10 space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
              Legal Terms
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: February 26, 2026</p>
            <Link
              href="/contact#book"
              className="inline-flex items-center rounded-full border border-brand/25 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/45 hover:text-brand dark:bg-white/5"
            >
              Contact On Terms
            </Link>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing this website or engaging OnXeon services, you agree to
            these Terms of Service. If you do not agree, you should not use our
            website or services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Services</h2>
          <p className="text-muted-foreground">
            OnXeon provides enterprise implementation, system integration,
            open-source deployment, and support services. Specific project scope,
            deliverables, timelines, and fees are defined in separate proposals,
            statements of work, or service agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Use of the Website</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>You may use this website only for lawful business purposes.</li>
            <li>
              You agree not to interfere with website operation, security, or
              availability.
            </li>
            <li>
              You agree not to attempt unauthorized access to systems or data.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Client Responsibilities</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              Provide accurate information and timely access needed for delivery.
            </li>
            <li>
              Review and approve milestones within agreed project timelines.
            </li>
            <li>
              Maintain appropriate licenses and rights for third-party software.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
          <p className="text-muted-foreground">
            Unless otherwise agreed in writing, each party retains ownership of
            its pre-existing intellectual property. Project-specific ownership,
            licensing, and usage rights are governed by the applicable service
            agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Confidentiality</h2>
          <p className="text-muted-foreground">
            Both parties agree to protect confidential information shared during
            engagements and use it only for approved business purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Fees and Payment</h2>
          <p className="text-muted-foreground">
            Fees, billing schedules, and payment terms are set in project
            agreements. Late payment may result in service delays or suspension
            where permitted by law and contract.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Warranties and Disclaimers</h2>
          <p className="text-muted-foreground">
            Services are provided using reasonable professional care. Except as
            expressly stated in a signed agreement, services and website content
            are provided &quot;as is&quot; without additional warranties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            To the maximum extent allowed by law, OnXeon is not liable for
            indirect, incidental, special, consequential, or punitive damages.
            Total liability is limited as specified in the governing service
            agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">10. Termination</h2>
          <p className="text-muted-foreground">
            Either party may terminate engagements according to the termination
            terms in the applicable contract. Provisions that by nature survive
            termination will continue to apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">11. Changes to These Terms</h2>
          <p className="text-muted-foreground">
            We may update these Terms of Service from time to time. Updated
            versions will be posted on this page with a revised date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">12. Contact</h2>
          <p className="text-muted-foreground">
            For terms-related inquiries, please use the{" "}
            <Link href="/contact#book" className="text-foreground underline underline-offset-4">
              contact inquiry form
            </Link>
            .
          </p>
          <p className="text-muted-foreground">
            These terms provide a general website-level baseline and should be reviewed with qualified legal counsel to
            confirm suitability for your jurisdiction, delivery model and contractual approach.
          </p>
        </section>
      </div>
    </Section>
  );
}
