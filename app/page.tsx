import CTA from "../components/sections/cta/default";
import Hero from "../components/sections/hero/default";
import {
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
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(170,220,170,0.18),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 h-[32rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),transparent_60%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_60%)]" />
      <LayoutLines />
      <MobileScrollEffects />
      <Hero
        title="Enterprise and self-hosted systems, done right."
        description="We implement and integrate enterprise SaaS platforms such as Salesforce, SAP and ServiceNow, and we deliver affordable self-hosted alternatives across CRM, ERP and cloud using open-source tools."
        buttons={homepageHeroButtons}
      />
      <HomeWhatWeDoSection />
      <HomeWhyOnXeonSection />
      <HomeTypicalProjectsSection />
      <CTA title="Discuss your next implementation project" />
    </main>
  );
}
