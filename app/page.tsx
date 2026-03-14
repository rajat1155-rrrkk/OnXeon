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
