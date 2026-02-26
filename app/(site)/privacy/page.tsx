import type { Metadata } from "next";

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
        <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: February 25, 2026</p>

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
          <h2 className="text-xl font-semibold">12. Contact</h2>
          <p className="text-muted-foreground">
            For privacy-related inquiries, contact us at{" "}
            <a
              href="mailto:Rajat@OnXeon.com"
              className="text-foreground underline underline-offset-4"
            >
              Rajat@OnXeon.com
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
