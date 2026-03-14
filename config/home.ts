export interface LinkCard {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export interface PlatformItem {
  name: string;
  src: string;
  href: string;
}

export interface TextCard {
  title: string;
  description: string;
}

export interface WhyItem {
  title: string;
  teaser: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  description: string;
}

export const homepageHeroButtons = [
  {
    href: "/contact#book",
    text: "Book a Consultation",
    variant: "default" as const,
  },
  {
    href: "/solutions",
    text: "See Solutions",
    variant: "glow" as const,
  },
];

export const mobileReelCards: LinkCard[] = [
  {
    title: "CRM Implementation",
    description:
      "Salesforce, Zoho and ServiceNow workflows configured for real business operations.",
    href: "/services/crm-solutions",
    tag: "CRM",
  },
  {
    title: "ERP Integration",
    description:
      "SAP, Odoo and ERPNext integration with finance, operations and reporting layers.",
    href: "/services/erp-solutions",
    tag: "ERP",
  },
  {
    title: "System Integration",
    description:
      "API and event-driven integration between CRM, ERP and internal business tools.",
    href: "/solutions/system-integration",
    tag: "Integrations",
  },
  {
    title: "Cloud Deployments",
    description:
      "Production delivery on AWS, Azure and GCP with reliable deployment practices.",
    href: "/solutions/cloud-platforms",
    tag: "Cloud",
  },
  {
    title: "Open Source Stack",
    description:
      "Plane, Nextcloud, PostgreSQL and Docker-based self-hosted alternatives.",
    href: "/services/onxeon-services",
    tag: "Self-Hosted",
  },
  {
    title: "Long-Term Support",
    description:
      "Enhancements, performance improvements and maintainable handover models.",
    href: "/solutions/support-maintenance",
    tag: "Support",
  },
];

export const enterprisePlatforms: PlatformItem[] = [
  {
    name: "Salesforce",
    src: "/logos/Salesforce.png",
    href: "/solutions/crm-platforms",
  },
  {
    name: "SAP",
    src: "/logos/SAP.png",
    href: "/solutions/erp-systems",
  },
  {
    name: "ServiceNow",
    src: "/logos/ServiceNow.jpg",
    href: "/solutions/crm-platforms",
  },
  {
    name: "AWS",
    src: "/logos/AWS.png",
    href: "/solutions/cloud-platforms",
  },
  {
    name: "Azure",
    src: "/logos/Azure.png",
    href: "/solutions/cloud-platforms",
  },
  {
    name: "GCP",
    src: "/logos/GCP.svg",
    href: "/solutions/cloud-platforms",
  },
];

export const selfHostedPlatforms: PlatformItem[] = [
  {
    name: "Plane",
    src: "/logos/Plane.png",
    href: "/services/onxeon-services",
  },
  {
    name: "ERPNext",
    src: "/logos/ERPnext.png",
    href: "/services/erp-solutions",
  },
  {
    name: "Odoo",
    src: "/logos/odoo.png",
    href: "/services/erp-solutions",
  },
  {
    name: "Nextcloud",
    src: "/logos/Nextcloud.png",
    href: "/services/onxeon-services",
  },
  {
    name: "PostgreSQL",
    src: "/logos/Postgresql.png",
    href: "/services/cloud-solutions",
  },
  {
    name: "Docker",
    src: "/logos/Docker.png",
    href: "/services/cloud-solutions",
  },
];

export const whatWeDoHighlights: TextCard[] = [
  {
    title: "Enterprise SaaS Implementations",
    description:
      "Salesforce, SAP and ServiceNow delivery aligned to business process and governance.",
  },
  {
    title: "Affordable Self-Hosted Delivery",
    description:
      "Plane, ERPNext, Odoo and Nextcloud stacks to reduce recurring licensing exposure.",
  },
  {
    title: "Integration + Long-Term Support",
    description:
      "API and workflow integrations with enhancement support after go-live.",
  },
];

export const coreCapabilities: TextCard[] = [
  {
    title: "CRM Implementation",
    description:
      "Design and implementation of Salesforce, Zoho and ServiceNow workflows aligned with business operations.",
  },
  {
    title: "ERP Integration",
    description:
      "Structured SAP and Odoo integration with finance, operations and reporting systems.",
  },
  {
    title: "System Integration",
    description:
      "Reliable API and workflow integration across CRM, ERP and internal tools.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Cloud architecture and deployment on AWS, GCP and Azure for production enterprise systems.",
  },
  {
    title: "Open Source Solutions",
    description:
      "Vendor-neutral and self-hosted alternatives that reduce licensing costs and increase control.",
  },
];

export const whyOnXeonItems: WhyItem[] = [
  {
    title: "Enterprise-grade architecture",
    teaser: "Lower rework risk in production rollouts",
    description:
      "Architecture designed for reliability, scalability and operational clarity.",
  },
  {
    title: "Vendor-neutral approach",
    teaser: "Platform choices based on fit and outcomes",
    description: "Platform recommendations based on fit, not vendor lock-in.",
  },
  {
    title: "Long-term maintainability",
    teaser: "Cleaner handover for internal ownership",
    description: "Systems built to be maintainable by internal teams over time.",
  },
  {
    title: "Self-hosted expertise",
    teaser: "Better control over cost, data and operations",
    description:
      "Strong delivery experience with secure self-hosted enterprise tools.",
  },
];

export const typicalProjects: ProjectItem[] = [
  {
    name: "CRM Implementations",
    description:
      "Salesforce, Zoho and ServiceNow implementation for sales, service and internal operations.",
  },
  {
    name: "ERP Integrations",
    description:
      "SAP and Odoo integration with CRM, finance platforms and internal business systems.",
  },
  {
    name: "OEM Platform Integrations",
    description:
      "Integrate OEM and third-party platforms into your enterprise stack with stable interfaces.",
  },
  {
    name: "Cloud Deployments",
    description:
      "Production-ready deployment and hardening on AWS, GCP and Azure.",
  },
  {
    name: "System Modernization",
    description:
      "Incremental modernization of legacy workflows, integrations and platform architecture.",
  },
];
