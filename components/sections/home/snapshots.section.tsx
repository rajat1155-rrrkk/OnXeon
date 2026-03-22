import Link from "next/link";

import { deliverySnapshots } from "@/config/home";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

export default function HomeSnapshotsSection() {
  return (
    <Section className="py-20 md:py-24">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.22em] uppercase">
            Illustrative Snapshots
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Example delivery narratives, framed with restraint.
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-7 sm:text-base">
            These snapshots are intentionally illustrative. They show the shape of programmes we are built to deliver,
            without presenting unnamed work as formal client case studies.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {deliverySnapshots.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.55rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(251,252,250,0.94))] p-6 shadow-[0_18px_38px_-30px_hsl(var(--foreground)/0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_-34px_hsl(var(--foreground)/0.18)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,32,29,0.92),rgba(21,25,23,0.9))]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Illustrative Case Shape
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.context}</p>
              <div className="mt-5 space-y-3">
                <div className="rounded-[1rem] border border-border/70 bg-white/72 p-4 dark:bg-white/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.outcome}</p>
                </div>
                <div className="rounded-[1rem] border border-border/70 bg-white/72 p-4 dark:bg-white/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Delivery Approach
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.approach}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="default"
            asChild
            className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/case-studies">Review More Illustrative Cases</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
