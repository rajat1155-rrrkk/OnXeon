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

export interface ProofItem {
  title: string;
  description: string;
}

export interface SnapshotItem {
  title: string;
  context: string;
  outcome: string;
  approach: string;
}

export const homepageHeroButtons = [
  {
    href: "/contact#book",
    text: "Arrange A Private Consultation",
    variant: "default" as const,
  },
  {
    href: "/solutions",
    text: "Review Solution Paths",
    variant: "glow" as const,
  },
];

export const mobileReelCards: LinkCard[] = [
  {
    title: "CRM Implementation",
    description:
      "Salesforce, Zoho and ServiceNow environments shaped around real operating needs.",
    href: "/services/crm-solutions",
    tag: "CRM",
  },
  {
    title: "ERP Integration",
    description:
      "SAP, Odoo and ERPNext integrated across finance, operations and reporting.",
    href: "/services/erp-solutions",
    tag: "ERP",
  },
  {
    title: "System Integration",
    description:
      "API and event-led integration across CRM, ERP and internal business systems.",
    href: "/solutions/system-integration",
    tag: "Integrations",
  },
  {
    title: "Cloud Deployments",
    description:
      "Production deployment on AWS, Azure and GCP with disciplined operating standards.",
    href: "/solutions/cloud-platforms",
    tag: "Cloud",
  },
  {
    title: "Open Source Stack",
    description:
      "Plane, Nextcloud, PostgreSQL and Docker-based alternatives for greater control.",
    href: "/services/onxeon-services",
    tag: "Self-Hosted",
  },
  {
    title: "Long-Term Support",
    description:
      "Enhancements, stabilisation and support models designed for clean internal ownership.",
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
      "Salesforce, SAP and ServiceNow delivery aligned with business process, governance and adoption.",
  },
  {
    title: "Affordable Self-Hosted Delivery",
    description:
      "Plane, ERPNext, Odoo and Nextcloud stacks for organisations seeking more control and lower recurring cost.",
  },
  {
    title: "Integration And Long-Term Support",
    description:
      "Integration architecture, workflow orchestration and measured support beyond go-live.",
  },
];

export const coreCapabilities: TextCard[] = [
  {
    title: "CRM Implementation",
    description:
      "CRM environments designed around how teams sell, serve and operate day to day.",
  },
  {
    title: "ERP Integration",
    description:
      "ERP integrations structured to support finance, operations and management reporting with clarity.",
  },
  {
    title: "System Integration",
    description:
      "Reliable API and workflow integration across customer platforms, back-office systems and internal tools.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Cloud architecture and deployment on AWS, GCP and Azure for production-grade business systems.",
  },
  {
    title: "Open Source Solutions",
    description:
      "Vendor-neutral and self-hosted alternatives that improve control, reduce recurring spend and keep future options open.",
  },
];

export const whyOnXeonItems: WhyItem[] = [
  {
    title: "Enterprise-grade architecture",
    teaser: "Lower rework risk when programmes move into production",
    description:
      "Architecture shaped for reliability, scalability and operational clarity from the outset.",
  },
  {
    title: "Vendor-neutral approach",
    teaser: "Recommendations grounded in fit, context and outcomes",
    description: "Platform decisions driven by fit, operating reality and long-term value, not vendor preference.",
  },
  {
    title: "Long-term maintainability",
    teaser: "A cleaner handover for internal ownership",
    description: "Systems designed so internal teams can run, extend and govern them with confidence over time.",
  },
  {
    title: "Self-hosted expertise",
    teaser: "Greater control over cost, data posture and operations",
    description:
      "Delivery experience across secure self-hosted platforms for organisations that value control and operational flexibility.",
  },
];

export const typicalProjects: ProjectItem[] = [
  {
    name: "CRM Implementations",
    description:
      "Salesforce, Zoho and ServiceNow programmes for sales, service and internal operating teams.",
  },
  {
    name: "ERP Integrations",
    description:
      "SAP and Odoo integration with CRM, finance platforms and surrounding operational systems.",
  },
  {
    name: "OEM Platform Integrations",
    description:
      "OEM and third-party platform integrations designed with stable contracts and operational resilience.",
  },
  {
    name: "Cloud Deployments",
    description:
      "Production deployment, hardening and environment stewardship on AWS, GCP and Azure.",
  },
  {
    name: "System Modernization",
    description:
      "Measured modernisation of legacy workflows, integrations and platform architecture without needless disruption.",
  },
];

export const proofHighlights: ProofItem[] = [
  {
    title: "Vendor-neutral platform guidance",
    description:
      "Recommendations shaped by operating fit, governance and long-term control rather than a fixed product bias.",
  },
  {
    title: "Delivery from architecture to handover",
    description:
      "Programmes scoped with implementation, integration, rollout and internal ownership in mind from the outset.",
  },
  {
    title: "Enterprise and self-hosted fluency",
    description:
      "Comfort across Salesforce, SAP and ServiceNow as well as self-hosted stacks such as ERPNext, Odoo and Nextcloud.",
  },
];

export const deliverySnapshots: SnapshotItem[] = [
  {
    title: "CRM and ERP operating alignment",
    context: "Illustrative enterprise programme spanning sales workflow, finance visibility and downstream reporting.",
    outcome: "A clearer system-of-record model with fewer manual handoffs between commercial and operations teams.",
    approach: "Discovery, integration mapping, phased rollout and internal handover planning from day one.",
  },
  {
    title: "Self-hosted operational stack",
    context: "Illustrative self-hosted environment for teams seeking lower recurring cost and stronger data control.",
    outcome: "A more controlled platform footprint with cleaner ownership, deployment discipline and upgrade clarity.",
    approach: "Platform selection, infrastructure setup, workflow tailoring and long-term operating guidance.",
  },
  {
    title: "System modernisation without disruption",
    context: "Illustrative modernisation brief where legacy processes had to evolve without destabilising operations.",
    outcome: "A steadier transition path with staged change, integration continuity and more confident internal adoption.",
    approach: "Process audit, target architecture, measured migration planning and post-launch stabilisation.",
  },
];
