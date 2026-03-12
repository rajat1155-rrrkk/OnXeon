import Link from "next/link";

export default function LogoPlayground() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-green-100 bg-gradient-to-b from-green-50/90 to-card md:h-[400px] dark:border-emerald-900/40 dark:from-emerald-950/45 dark:to-card">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative z-10 grid h-full gap-3 p-4 md:grid-cols-12">
        <div className="rounded-lg border border-green-200 bg-white/95 p-4 md:col-span-4 dark:border-emerald-800/60 dark:bg-card/92">
          <p className="text-xs font-semibold tracking-wide text-foreground">Architecture Preview</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Safe simplified version of our blueprint preview for stable rendering.
          </p>

          <div className="mt-4 space-y-2 text-[11px] text-muted-foreground">
            <p>Primary goal: System Integration</p>
            <p>Deployment: Hybrid Cloud</p>
            <p>Timeline: This quarter</p>
            <p>Legacy systems: Included</p>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/contact#book"
              className="inline-flex items-center justify-center rounded-md border border-green-200 bg-white px-3 py-2 text-xs font-medium text-foreground transition hover:border-green-300 dark:border-emerald-800/60 dark:bg-card"
            >
              Book Consultation
            </Link>
            <Link
              href="/services/onxeon-services"
              className="inline-flex items-center justify-center rounded-md border border-green-100 bg-green-50/70 px-3 py-2 text-xs font-medium text-muted-foreground transition hover:border-green-300 hover:text-foreground dark:border-emerald-900/40 dark:bg-emerald-900/20"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-green-200 bg-white/96 p-4 md:col-span-8 dark:border-emerald-800/60 dark:bg-card/92">
          <p className="text-sm font-semibold text-foreground">Platform Integration Blueprint</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Suggested timeline: <span className="font-medium text-foreground">9-12 weeks</span> · Cost profile:{" "}
            <span className="font-medium text-foreground">Moderate licensing with targeted savings</span>
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-md border border-green-100 bg-green-50/55 p-3 dark:border-emerald-900/40 dark:bg-emerald-900/15">
              <p className="text-[11px] font-semibold text-foreground">Recommended Stack</p>
              <ul className="mt-2 space-y-1 text-[11px] text-muted-foreground">
                <li>• CRM + ERP Integration Layer</li>
                <li>• API Gateway</li>
                <li>• Event / Queue Layer</li>
                <li>• Hybrid Cloud</li>
              </ul>
            </div>
            <div className="rounded-md border border-green-100 bg-white p-3 dark:border-emerald-900/40 dark:bg-card">
              <p className="text-[11px] font-semibold text-foreground">Delivery Phases</p>
              <ol className="mt-2 space-y-1 text-[11px] text-muted-foreground">
                <li>1. Integration architecture definition</li>
                <li>2. API contracts and orchestration</li>
                <li>3. End-to-end flow testing</li>
                <li>4. Observability and support handover</li>
              </ol>
            </div>
          </div>

          <p className="mt-4 rounded-md border border-green-100 bg-white p-2 text-[11px] text-muted-foreground dark:border-emerald-900/40 dark:bg-card">
            This preview is intentionally simplified to provide a stable, reliable homepage section.
          </p>
        </div>
      </div>
    </div>
  );
}
