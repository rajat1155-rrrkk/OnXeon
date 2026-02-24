import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full [&_.max-w-container]:container [&_.max-w-container]:mx-auto [&_.max-w-container]:max-w-6xl [&_.max-w-container]:px-6 [&_.container]:mx-auto [&_.container]:max-w-6xl [&_.container]:px-6">
      <LayoutLines />
      <Navbar />
      <Hero
        title="Enterprise systems implemented right."
        description="We implement, customize and integrate CRM, ERP and cloud platforms with reliable long-term architecture."
        buttons={[
          {
            href: "/contact#book",
            text: "Book a Consultation",
            variant: "default",
          },
          {
            href: "/solutions",
            text: "See Solutions",
            variant: "glow",
          },
        ]}
      />
      <Logos
        className="py-24"
        title="What We Do"
        subtitle="CRM implementation, ERP implementation, system integration, cloud infrastructure, and open-source solutions delivered with practical execution."
        cards={[
          {
            title: "CRM Implementation",
            description:
              "Design and implementation of CRM platforms aligned with real business workflows.",
          },
          {
            title: "ERP Implementation",
            description:
              "Structured ERP rollout and customization for operational consistency.",
          },
          {
            title: "System Integration",
            description:
              "Reliable integrations across CRM, ERP and internal systems.",
          },
          {
            title: "Cloud Infrastructure",
            description:
              "Cloud architecture and deployment foundations for enterprise systems.",
          },
          {
            title: "Open-source Solutions",
            description:
              "Self-hosted alternatives that reduce software costs and increase control.",
          },
        ]}
      />
      <Items
        className="py-24"
        title="Why OnXeon"
        items={[
          {
            title: "Enterprise-grade architecture",
            description:
              "Architecture designed for reliability, scalability and operational clarity.",
            icon: null,
          },
          {
            title: "Vendor-neutral approach",
            description:
              "Platform recommendations based on fit, not vendor lock-in.",
            icon: null,
          },
          {
            title: "Long-term maintainability",
            description:
              "Systems built to be maintainable by internal teams over time.",
            icon: null,
          },
          {
            title: "Self-hosted expertise",
            description:
              "Strong delivery experience with secure self-hosted enterprise tools.",
            icon: null,
          },
        ]}
      />
      <Pricing
        className="py-24"
        title="Typical Projects"
        description="CRM implementations, ERP integrations, data migrations, cloud deployments, and system modernization."
        plans={[
          {
            name: "CRM Implementations",
            description:
              "New CRM setup and process alignment for sales and support teams.",
            price: 0,
            priceLabel: "Contact us",
            priceNote: "",
            cta: {
              variant: "default",
              label: "Discuss Project",
              href: "/contact#book",
            },
            features: [],
            variant: "default",
          },
          {
            name: "ERP Integrations",
            description:
              "ERP connectivity with CRM, finance and internal systems.",
            price: 0,
            priceLabel: "Contact us",
            priceNote: "",
            cta: {
              variant: "default",
              label: "Discuss Project",
              href: "/contact#book",
            },
            features: [],
            variant: "glow-brand",
          },
          {
            name: "Data Migrations",
            description:
              "Planned and validated migration from legacy tools and datasets.",
            price: 0,
            priceLabel: "Contact us",
            priceNote: "",
            cta: {
              variant: "default",
              label: "Discuss Project",
              href: "/contact#book",
            },
            features: [],
            variant: "glow",
          },
          {
            name: "Cloud Deployments",
            description:
              "Production-ready cloud deployment for enterprise applications.",
            price: 0,
            priceLabel: "Contact us",
            priceNote: "",
            cta: {
              variant: "default",
              label: "Discuss Project",
              href: "/contact#book",
            },
            features: [],
            variant: "default",
          },
          {
            name: "System Modernization",
            description:
              "Incremental modernization of existing enterprise workflows.",
            price: 0,
            priceLabel: "Contact us",
            priceNote: "",
            cta: {
              variant: "default",
              label: "Discuss Project",
              href: "/contact#book",
            },
            features: [],
            variant: "default",
          },
        ]}
      />
      <CTA />
      <Footer />
    </main>
  );
}
