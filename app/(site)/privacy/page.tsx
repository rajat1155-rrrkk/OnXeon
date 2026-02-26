import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — OnXeon" },
  description:
    "Privacy Policy for OnXeon covering information collection, usage, retention, security, and user rights.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto py-24 space-y-8">
        <div className="group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/80 to-card p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25">
          <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-green-300/25 blur-3xl dark:bg-emerald-500/20" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
          <div className="pointer-events-none absolute inset-y-0 left-[-45%] w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-900 group-hover:left-[130%] group-hover:opacity-100 dark:via-white/25" />
          <div className="relative z-10 space-y-3">
            <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: February 25, 2026</p>
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:-translate-y-px hover:border-brand/55 hover:bg-brand/16 hover:text-brand hover:shadow-[0_0_14px_hsl(var(--brand)/0.24)]"
            >
              Policy Clarity First
            </Link>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Overview</h2>
          <p className="text-muted-foreground">
            OnXeon (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides enterprise implementation,
            integration, and support services. This Privacy Policy explains how
            we collect, use, disclose, and protect personal information when you
            use our website or engage our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <p className="text-muted-foreground">
            We may collect the following categories of information:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              Contact details such as name, email address, company name, and
              job title.
            </li>
            <li>
              Communication content, including messages submitted through forms
              or email.
            </li>
            <li>
              Technical and usage data such as browser type, device data, page
              interactions, and approximate location derived from IP address.
            </li>
            <li>
              Project-related information provided during sales or service
              discussions.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            3. How We Use Information
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>To respond to inquiries and provide requested services.</li>
            <li>
              To manage delivery, support, and communication related to client
              projects.
            </li>
            <li>
              To improve website functionality, performance, and user
              experience.
            </li>
            <li>
              To meet legal, security, accounting, and compliance requirements.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Legal Basis (Where Applicable)</h2>
          <p className="text-muted-foreground">
            Where required by law, we process personal data based on one or
            more legal grounds, including consent, contractual necessity,
            legitimate interests, and compliance with legal obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Sharing and Disclosure</h2>
          <p className="text-muted-foreground">
            We do not sell personal information. We may share information with:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              Service providers who support hosting, analytics, communication,
              and operations.
            </li>
            <li>
              Professional advisors (legal, accounting, compliance) where
              necessary.
            </li>
            <li>
              Authorities or regulators when required by law or to protect
              rights and security.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            6. Cookies and Similar Technologies
          </h2>
          <p className="text-muted-foreground">
            We may use cookies and similar technologies for essential site
            operation, analytics, and performance improvements. You can control
            cookies through your browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Data Retention</h2>
          <p className="text-muted-foreground">
            We retain personal information only as long as needed for business
            purposes, legal obligations, dispute resolution, and enforcement of
            agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Data Security</h2>
          <p className="text-muted-foreground">
            We apply reasonable technical and organizational safeguards to
            protect personal data. No method of transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Your Privacy Rights</h2>
          <p className="text-muted-foreground">
            Depending on your location, you may have rights to access, correct,
            delete, or restrict the processing of your personal information.
            You may also have the right to object to certain processing or
            request data portability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">10. International Transfers</h2>
          <p className="text-muted-foreground">
            If data is transferred across jurisdictions, we take reasonable
            steps to use appropriate safeguards consistent with applicable data
            protection laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Updated
            versions will be posted on this page with a revised &quot;Last updated&quot;
            date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            12. Project-Specific Agreements and Communications
          </h2>
          <p className="text-muted-foreground">
            Project-specific contracts or direct written communications (for
            example, signed agreements, proposals, email approvals, or
            messaging confirmations including WhatsApp) may include privacy and
            data-handling terms specific to that engagement.
          </p>
          <p className="text-muted-foreground">
            Where applicable and lawful, those project-specific written terms
            will take precedence for that project over this general Privacy
            Policy.
          </p>
          <p className="text-muted-foreground">
            This includes short written confirmations, including single-line
            messages, where they explicitly define privacy handling for a
            specific project.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">13. Contact</h2>
          <p className="text-muted-foreground">
            For privacy-related inquiries, please use the{" "}
            <a href="/contact#book" className="text-foreground underline underline-offset-4">
              contact inquiry form
            </a>
            .
          </p>
          <p className="text-muted-foreground">
            Note: This policy is a practical template and should be reviewed by
            qualified legal counsel before production use.
          </p>
        </section>
      </div>
    </Section>
  );
}
