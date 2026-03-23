import CTA from "../components/sections/cta/default";
import Hero from "../components/sections/hero/default";
import {
  HomeEngagementSection,
  HomeProofSection,
  HomeSnapshotsSection,
  HomeTypicalProjectsSection,
  HomeWhatWeDoSection,
  HomeWhyOnXeonSection,
} from "../components/sections/home";
import { LayoutLines } from "../components/ui/layout-lines";
import MobileScrollEffects from "../components/ui/mobile-scroll-effects";

import { homepageHeroButtons } from "@/config/home";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full [&_.max-w-container]:container [&_.max-w-container]:mx-auto [&_.max-w-container]:max-w-6xl [&_.max-w-container]:px-4 [&_.max-w-container]:sm:px-6 [&_.container]:mx-auto [&_.container]:max-w-6xl [&_.container]:px-4 [&_.container]:sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(170,220,170,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-36 -z-10 h-[34rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),transparent_62%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[54rem] -z-10 h-[46rem] bg-[radial-gradient(circle_at_center,rgba(170,220,170,0.08),transparent_65%)]" />
      <LayoutLines />
      <MobileScrollEffects />
      <Hero
        title="Enterprise systems, delivered with clarity and restraint."
        description="We implement and integrate enterprise platforms such as Salesforce, SAP and ServiceNow, and we deliver carefully considered self-hosted alternatives across CRM, ERP and cloud, with long-term operating clarity in view."
        buttons={homepageHeroButtons}
      />
      <HomeProofSection />
      <HomeWhatWeDoSection />
      <HomeWhyOnXeonSection />
      <HomeEngagementSection />
      <HomeSnapshotsSection />
      <HomeTypicalProjectsSection />
      <CTA title="Discuss Your Next Strategic Build" />
    </main>
  );
}
