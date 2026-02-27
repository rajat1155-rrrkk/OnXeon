"use client";

import { useMemo, useState } from "react";

type Blueprint = {
  id: string;
  title: string;
  category: string;
  track: "Enterprise" | "Self-Hosted" | "Hybrid";
  summary: string;
  environment: string[];
  useCase: string[];
  integrations: string[];
  delivery: string[];
  timeline: string;
};

const blueprints: Blueprint[] = [
  {
    id: "crm-multi-team",
    title: "CRM Operations Blueprint",
    category: "CRM",
    track: "Hybrid",
    summary:
      "Sales, service, and internal workflow design across enterprise SaaS or self-hosted CRM options.",
    environment: ["Salesforce / SuiteCRM", "Workflow Automation", "Role-based Access"],
    useCase: [
      "Multi-team lead-to-service lifecycle",
      "Escalation and SLA management",
      "Pipeline and support reporting",
    ],
    integrations: ["ERP sync", "Email + telephony", "Helpdesk + internal tools"],
    delivery: ["Discovery", "Data model", "Automation rollout", "Training + handover"],
    timeline: "6-12 weeks",
  },
  {
    id: "crm-customer-360",
    title: "Customer 360 Blueprint",
    category: "CRM",
    track: "Enterprise",
    summary:
      "Unified customer records, service history, and engagement workflows for distributed commercial teams.",
    environment: ["Salesforce / ServiceNow", "Workflow Governance", "Role-based Security"],
    useCase: [
      "Shared customer view for sales and support",
      "Automated lifecycle stage transitions",
      "Account health and escalation visibility",
    ],
    integrations: ["ERP customer master", "Marketing platforms", "BI reporting layer"],
    delivery: ["Discovery", "Data contracts", "Automation rollout", "Handover"],
    timeline: "7-12 weeks",
  },
  {
    id: "dealer-management",
    title: "Dealer Management Blueprint",
    category: "Dealer Management",
    track: "Hybrid",
    summary:
      "Dealer onboarding, order tracking, warranty flow, and performance visibility in one connected system.",
    environment: ["Portal + CRM", "ERP-connected pricing", "Audit trails"],
    useCase: [
      "Dealer onboarding and approval workflow",
      "Order lifecycle and fulfillment visibility",
      "Warranty and claims processing",
    ],
    integrations: ["CRM ↔ ERP", "Inventory system", "Finance + invoicing"],
    delivery: ["Process design", "Integration mapping", "Portal rollout", "Hypercare support"],
    timeline: "8-14 weeks",
  },
  {
    id: "dealer-service-network",
    title: "Dealer Service Network Blueprint",
    category: "Dealer Management",
    track: "Enterprise",
    summary:
      "Service ticketing, parts coordination, and SLA governance for distributed dealer networks.",
    environment: ["Dealer service portal", "Workflow engine", "Escalation controls"],
    useCase: [
      "Warranty request lifecycle",
      "Dealer service queue balancing",
      "Parts and labor approval workflows",
    ],
    integrations: ["ERP parts inventory", "Finance settlement", "Support analytics"],
    delivery: ["Service mapping", "Automation setup", "Integration QA", "Post-go-live support"],
    timeline: "7-12 weeks",
  },
  {
    id: "inventory-management",
    title: "Inventory Control Blueprint",
    category: "Inventory",
    track: "Self-Hosted",
    summary:
      "Inventory planning and stock movement visibility with reliable data flows between operations and finance.",
    environment: ["ERPNext / Odoo", "Barcode-ready ops", "Warehouse dashboards"],
    useCase: [
      "Inbound/outbound stock control",
      "Reorder and threshold automation",
      "Multi-location stock synchronization",
    ],
    integrations: ["ERP + POS", "Vendor systems", "Accounting reconciliation"],
    delivery: ["Baseline audit", "Workflow setup", "Live data migration", "Monitoring setup"],
    timeline: "6-10 weeks",
  },
  {
    id: "inventory-demand-planning",
    title: "Demand Planning Blueprint",
    category: "Inventory",
    track: "Hybrid",
    summary:
      "Demand-aware inventory planning with reorder automation and stock balancing across locations.",
    environment: ["Planning rules engine", "Warehouse visibility", "Threshold governance"],
    useCase: [
      "Demand-driven reorder recommendations",
      "Aging stock reduction",
      "Cross-location transfer optimization",
    ],
    integrations: ["Sales demand feeds", "Procurement systems", "Finance reconciliation"],
    delivery: ["Data baseline", "Policy setup", "Pilot rollout", "Operations handover"],
    timeline: "7-11 weeks",
  },
  {
    id: "manufacturing-execution",
    title: "Manufacturing Execution Blueprint",
    category: "Manufacturing",
    track: "Hybrid",
    summary:
      "Production planning, quality checkpoints, and traceability workflows across factory operations.",
    environment: ["ERP + production modules", "Shop-floor event capture", "Quality controls"],
    useCase: [
      "Work order orchestration",
      "Quality issue escalation and traceability",
      "Output and downtime analytics",
    ],
    integrations: ["Supplier systems", "Inventory and finance", "BI dashboards"],
    delivery: ["Process mapping", "System design", "Pilot rollout", "Stabilization"],
    timeline: "8-14 weeks",
  },
  {
    id: "manufacturing-quality-ops",
    title: "Manufacturing Quality Ops Blueprint",
    category: "Manufacturing",
    track: "Enterprise",
    summary:
      "Quality inspection workflows and corrective action tracking for production reliability.",
    environment: ["Inspection workflows", "Non-conformance tracking", "Audit trail controls"],
    useCase: [
      "Quality checkpoint automation",
      "Defect classification and corrective actions",
      "Supplier quality performance visibility",
    ],
    integrations: ["ERP quality module", "Supplier portals", "Operations reporting"],
    delivery: ["Quality model design", "Workflow rollout", "Integration test cycles", "Team enablement"],
    timeline: "6-12 weeks",
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management Blueprint",
    category: "Restaurant",
    track: "Self-Hosted",
    summary:
      "Operations blueprint covering outlet workflows, procurement, and customer systems in one architecture.",
    environment: ["POS integration", "Kitchen workflow mapping", "Branch controls"],
    useCase: [
      "Menu + pricing governance",
      "Procurement and consumption tracking",
      "Customer feedback + loyalty flow",
    ],
    integrations: ["POS + inventory", "Delivery aggregators", "Finance reports"],
    delivery: ["Outlet process mapping", "System configuration", "Integration launch", "Ops runbook"],
    timeline: "5-9 weeks",
  },
  {
    id: "restaurant-multi-outlet",
    title: "Multi-Outlet Operations Blueprint",
    category: "Restaurant",
    track: "Hybrid",
    summary:
      "Standardized workflows across outlets for procurement, production, and customer service.",
    environment: ["Outlet orchestration layer", "Recipe/stock controls", "Operations dashboards"],
    useCase: [
      "Centralized menu and pricing updates",
      "Outlet-level wastage tracking",
      "Service consistency monitoring",
    ],
    integrations: ["POS + inventory", "Delivery channels", "Finance reporting"],
    delivery: ["Process baseline", "Rollout templates", "Branch activation", "Optimization support"],
    timeline: "6-10 weeks",
  },
  {
    id: "ecommerce-operations",
    title: "E-Commerce Operations Blueprint",
    category: "E-Commerce",
    track: "Hybrid",
    summary:
      "Order lifecycle, fulfillment, returns, and customer operations in one connected architecture.",
    environment: ["Commerce backend", "Warehouse and returns workflow", "Ops dashboarding"],
    useCase: [
      "Order-to-fulfillment orchestration",
      "Returns/refunds governance",
      "Customer support SLA workflows",
    ],
    integrations: ["Payment and logistics", "CRM + ERP sync", "Analytics and attribution"],
    delivery: ["Baseline audit", "Flow design", "Integration rollout", "Ops handover"],
    timeline: "6-11 weeks",
  },
  {
    id: "ecommerce-marketplace-sync",
    title: "Marketplace Sync Blueprint",
    category: "E-Commerce",
    track: "Self-Hosted",
    summary:
      "Unified catalog, order, and returns workflow across direct store and marketplace channels.",
    environment: ["Commerce middleware", "Catalog governance", "Returns operations"],
    useCase: [
      "Multi-channel listing synchronization",
      "Order exception handling",
      "Returns and refund automation",
    ],
    integrations: ["Marketplace APIs", "ERP/warehouse", "Support desk tooling"],
    delivery: ["Integration mapping", "Workflow implementation", "Staging validation", "Go-live support"],
    timeline: "6-10 weeks",
  },
  {
    id: "parking-management",
    title: "Parking Operations Blueprint",
    category: "Parking",
    track: "Self-Hosted",
    summary:
      "Parking access, occupancy visibility, and payment system coordination for facility operations.",
    environment: ["Entry/exit event stream", "Operator dashboard", "Incident logs"],
    useCase: [
      "Slot occupancy tracking",
      "Access control and exception handling",
      "Payment and settlement traceability",
    ],
    integrations: ["Gate systems", "Payment gateway", "Facility ERP / billing"],
    delivery: ["System blueprint", "API/event setup", "Operational testing", "Support model"],
    timeline: "6-11 weeks",
  },
  {
    id: "parking-enterprise-campus",
    title: "Enterprise Campus Parking Blueprint",
    category: "Parking",
    track: "Hybrid",
    summary:
      "Parking orchestration for staff, visitors, and contractors with policy-based access control.",
    environment: ["Access policy engine", "Occupancy analytics", "Incident workflow controls"],
    useCase: [
      "Zone and permit allocation",
      "Visitor pre-booking and validation",
      "Peak-time congestion mitigation",
    ],
    integrations: ["Entry/exit hardware", "Payment stack", "Facility systems"],
    delivery: ["Policy definition", "Integration setup", "Operational validation", "Support handoff"],
    timeline: "7-12 weeks",
  },
  {
    id: "field-service-operations",
    title: "Field Service Blueprint",
    category: "Field Service",
    track: "Enterprise",
    summary:
      "Dispatch, work orders, technician workflows, and SLA tracking for distributed field teams.",
    environment: ["Ticket and dispatch engine", "Technician mobile workflows", "Service controls"],
    useCase: [
      "Intake-to-dispatch orchestration",
      "Work order execution and proof-of-service",
      "SLA adherence and escalation handling",
    ],
    integrations: ["CRM service desk", "ERP inventory", "Customer notifications"],
    delivery: ["Service design", "Workflow setup", "Integration testing", "Hypercare"],
    timeline: "6-12 weeks",
  },
  {
    id: "field-service-installation",
    title: "Field Installation Blueprint",
    category: "Field Service",
    track: "Hybrid",
    summary:
      "Installation planning, technician dispatch, and customer verification workflows for rollout teams.",
    environment: ["Dispatch planner", "Mobile checklist workflows", "SLA status monitoring"],
    useCase: [
      "Installation slot and route planning",
      "On-site completion verification",
      "Post-install support ticket automation",
    ],
    integrations: ["CRM opportunity/order", "Inventory availability", "Customer communication"],
    delivery: ["Workflow design", "Mobile rollout", "Integration testing", "Operational handover"],
    timeline: "6-11 weeks",
  },
  {
    id: "lms-rollout",
    title: "LMS Rollout Blueprint",
    category: "LMS",
    track: "Self-Hosted",
    summary:
      "Learning platform architecture for onboarding, assessment, and reporting across internal teams.",
    environment: ["Moodle / custom LMS", "Role-based course paths", "Compliance tracking"],
    useCase: [
      "Employee onboarding journeys",
      "Certification workflows",
      "Department-level learning analytics",
    ],
    integrations: ["HR system", "SSO/identity", "Notification systems"],
    delivery: ["Learning model design", "Platform setup", "Content migration", "Ops handover"],
    timeline: "4-8 weeks",
  },
  {
    id: "lms-franchise-learning",
    title: "Franchise Learning Blueprint",
    category: "LMS",
    track: "Hybrid",
    summary:
      "Certification and training operations for distributed franchise or partner teams.",
    environment: ["Learning governance", "Role-based tracks", "Certification rules"],
    useCase: [
      "Partner onboarding programs",
      "Certification renewal workflows",
      "Regional compliance reporting",
    ],
    integrations: ["HR systems", "Identity providers", "Notification channels"],
    delivery: ["Program blueprint", "Platform setup", "Content migration", "Enablement support"],
    timeline: "5-9 weeks",
  },
  {
    id: "hrms-operations",
    title: "HRMS Operations Blueprint",
    category: "HRMS",
    track: "Self-Hosted",
    summary:
      "Employee lifecycle, approvals, attendance, and internal service workflows for growing teams.",
    environment: ["Self-hosted HRMS stack", "Policy and role controls", "Audit-ready operations"],
    useCase: [
      "Onboarding and offboarding automation",
      "Leave and attendance management",
      "HR ticketing and request approvals",
    ],
    integrations: ["Payroll systems", "Identity provider", "Internal communication tools"],
    delivery: ["Requirements baseline", "Configuration", "Data migration", "Team enablement"],
    timeline: "5-9 weeks",
  },
  {
    id: "hrms-performance-cycle",
    title: "HR Performance Cycle Blueprint",
    category: "HRMS",
    track: "Enterprise",
    summary:
      "Goal setting, reviews, and appraisal workflows integrated with employee operations systems.",
    environment: ["Performance workflow layer", "Review cycle controls", "Manager dashboards"],
    useCase: [
      "Goal and KPI alignment workflows",
      "Review cycle orchestration",
      "Compensation recommendation tracking",
    ],
    integrations: ["Core HRMS", "Payroll systems", "Analytics dashboards"],
    delivery: ["Cycle design", "Configuration rollout", "Policy validation", "Handover and support"],
    timeline: "5-10 weeks",
  },
  {
    id: "whatsapp-social-ai",
    title: "WhatsApp + Social AI Automation Blueprint",
    category: "Automation",
    track: "Hybrid",
    summary:
      "Customer communication and content operations blueprint combining WhatsApp automation, social channels, and AI-assisted content workflows.",
    environment: [
      "WhatsApp Business API",
      "Social publishing hub",
      "Content approval workflow",
    ],
    useCase: [
      "Lead capture and follow-up sequences on WhatsApp",
      "Campaign-to-chat journey from social posts and ads",
      "AI-assisted drafting for timely, trend-aware content",
    ],
    integrations: [
      "CRM contact and pipeline sync",
      "Meta, LinkedIn and scheduling tools",
      "Analytics + attribution reporting",
    ],
    delivery: [
      "Channel and message architecture",
      "Automation + compliance setup",
      "AI content workflow with human approval",
      "Performance monitoring and optimization",
    ],
    timeline: "4-9 weeks",
  },
  {
    id: "marketing-ops-automation",
    title: "Marketing Ops Automation Blueprint",
    category: "Automation",
    track: "Self-Hosted",
    summary:
      "Campaign operations automation for content approvals, publishing, and lead routing.",
    environment: ["Campaign workflow engine", "Content pipeline", "Approval controls"],
    useCase: [
      "Campaign launch sequence automation",
      "Content review and publish governance",
      "Lead routing and response SLA tracking",
    ],
    integrations: ["CRM pipeline", "Social schedulers", "Attribution reporting"],
    delivery: ["Automation mapping", "Workflow implementation", "Pilot campaigns", "Optimization cadence"],
    timeline: "4-8 weeks",
  },
  {
    id: "healthcare-operations",
    title: "Healthcare Ops Blueprint",
    category: "Healthcare",
    track: "Enterprise",
    summary:
      "Patient operations and administrative workflows for clinics and distributed care teams.",
    environment: ["Appointment and intake workflows", "Access controls", "Operational dashboards"],
    useCase: [
      "Patient intake and follow-up lifecycle",
      "Provider scheduling workflows",
      "Referral and billing process coordination",
    ],
    integrations: ["Billing systems", "Communication tools", "Reporting layer"],
    delivery: ["Workflow discovery", "Architecture mapping", "Controlled rollout", "Handover"],
    timeline: "7-13 weeks",
  },
  {
    id: "healthcare-care-coordination",
    title: "Care Coordination Blueprint",
    category: "Healthcare",
    track: "Hybrid",
    summary:
      "Patient follow-up, care program tracking, and provider coordination workflows.",
    environment: ["Care workflow controls", "Case management", "Operational dashboards"],
    useCase: [
      "Program enrollment and follow-up cadence",
      "Provider-to-provider handoff process",
      "Patient communication tracking",
    ],
    integrations: ["Scheduling systems", "Billing stack", "Notification channels"],
    delivery: ["Journey mapping", "Workflow setup", "Integration testing", "Operational enablement"],
    timeline: "6-11 weeks",
  },
  {
    id: "finance-collections",
    title: "Finance & Collections Blueprint",
    category: "Finance Ops",
    track: "Enterprise",
    summary:
      "Billing, collections, dunning workflows, and reconciliation visibility for finance teams.",
    environment: ["Finance operations hub", "Approval rules", "Exception tracking"],
    useCase: [
      "Collections sequencing and reminders",
      "Dispute and exception management",
      "Cashflow and aging visibility",
    ],
    integrations: ["ERP finance", "CRM account context", "Payment gateways"],
    delivery: ["Discovery", "Process modeling", "System rollout", "Support ramp-up"],
    timeline: "6-10 weeks",
  },
  {
    id: "finance-procure-to-pay",
    title: "Procure-to-Pay Blueprint",
    category: "Finance Ops",
    track: "Hybrid",
    summary:
      "End-to-end procurement approvals, invoicing, and payment operations with strong controls.",
    environment: ["P2P workflow orchestration", "Approval policy model", "Audit-friendly operations"],
    useCase: [
      "Purchase request to PO lifecycle",
      "Invoice matching and exception handling",
      "Payment scheduling and reconciliation",
    ],
    integrations: ["ERP finance", "Vendor management", "Bank/payment connectors"],
    delivery: ["Control design", "Workflow rollout", "Data validation", "Finance team handover"],
    timeline: "6-11 weeks",
  },
  {
    id: "unity-games",
    title: "Unity 2D/3D Games Blueprint",
    category: "Games",
    track: "Hybrid",
    summary:
      "Game product blueprint covering Unity 2D/3D implementation, backend services, analytics, and content operations.",
    environment: [
      "Unity 2D/3D (mobile/web/desktop target)",
      "Backend services + player profile layer",
      "Live-ops content pipeline",
    ],
    useCase: [
      "Core gameplay loop and progression design",
      "Leaderboard, rewards, and retention workflows",
      "In-game event campaigns and release cadence",
    ],
    integrations: [
      "Auth + social sign-in",
      "Analytics and attribution stack",
      "Payment / store and CRM sync",
    ],
    delivery: [
      "Architecture and gameplay scope definition",
      "Feature + backend integration rollout",
      "QA/performance pass and release planning",
      "Post-launch operations and iteration",
    ],
    timeline: "8-16 weeks",
  },
  {
    id: "unity-live-ops",
    title: "Unity LiveOps Blueprint",
    category: "Games",
    track: "Enterprise",
    summary:
      "Live game operations design for events, progression tuning, and retention workflows.",
    environment: ["LiveOps control panel", "Telemetry-driven balancing", "Campaign scheduling"],
    useCase: [
      "Seasonal event orchestration",
      "Dynamic rewards and progression",
      "Retention and engagement optimization",
    ],
    integrations: ["Analytics platform", "Auth/identity", "Store/payment integrations"],
    delivery: ["LiveOps strategy", "Tooling setup", "Event rollout", "Iteration support"],
    timeline: "7-14 weeks",
  },
  {
    id: "warehouse-operations-core",
    title: "Warehouse Operations Core Blueprint",
    category: "Warehouse Management",
    track: "Self-Hosted",
    summary:
      "Inbound, picking, packing, and dispatch workflows with real-time stock visibility.",
    environment: [
      "Web control panel + Desktop ops console + Mobile scanner app",
      "Barcode/QR workflows",
      "Warehouse KPI dashboards",
    ],
    useCase: [
      "Putaway and bin allocation",
      "Pick-pack-ship orchestration",
      "Stock discrepancy management",
    ],
    integrations: ["ERP inventory sync", "Carrier APIs", "Procurement systems"],
    delivery: ["Process baseline", "Workflow setup", "Go-live rollout", "Team handover"],
    timeline: "6-11 weeks",
  },
  {
    id: "warehouse-slotting-automation",
    title: "Warehouse Slotting & Automation Blueprint",
    category: "Warehouse Management",
    track: "Hybrid",
    summary:
      "Slotting strategy and replenishment automation for high-volume warehouse operations.",
    environment: [
      "Web planning workspace + Desktop supervision console + Mobile tasking app",
      "Replenishment rule engine",
      "Live operations monitoring",
    ],
    useCase: [
      "Dynamic slotting and zoning",
      "Task wave planning",
      "Replenishment triggers",
    ],
    integrations: ["Demand forecasting", "Warehouse hardware", "Finance reconciliation"],
    delivery: ["Data modeling", "Rules rollout", "Pilot execution", "Optimization phase"],
    timeline: "7-12 weeks",
  },
  {
    id: "hospital-operations",
    title: "Hospital Operations Blueprint",
    category: "Hospital Management",
    track: "Enterprise",
    summary:
      "Centralized hospital operations across admissions, departments, and discharge workflows.",
    environment: [
      "Web admin portal + Desktop station console + Mobile staff app",
      "Department workflow governance",
      "Operational command dashboards",
    ],
    useCase: [
      "Admissions-to-discharge lifecycle",
      "Bed and ward management",
      "Inter-department coordination",
    ],
    integrations: ["Billing systems", "Lab and imaging systems", "Notification channels"],
    delivery: ["Workflow discovery", "System configuration", "Department rollout", "Handover"],
    timeline: "8-14 weeks",
  },
  {
    id: "hospital-resource-planning",
    title: "Hospital Resource Planning Blueprint",
    category: "Hospital Management",
    track: "Hybrid",
    summary:
      "Capacity planning and scheduling for staff, rooms, equipment, and service windows.",
    environment: [
      "Web planning suite + Desktop operations dashboard + Mobile coordinator app",
      "Resource calendar engine",
      "Utilization analytics",
    ],
    useCase: [
      "Doctor/room/equipment scheduling",
      "Bottleneck and wait-time reduction",
      "Capacity and utilization reporting",
    ],
    integrations: ["HR rostering", "Patient workflows", "Finance and procurement"],
    delivery: ["Planning baseline", "Scheduling model setup", "Pilot rollout", "Operations support"],
    timeline: "7-12 weeks",
  },
  {
    id: "patient-care-journey",
    title: "Patient Care Journey Blueprint",
    category: "Patient Management",
    track: "Enterprise",
    summary:
      "End-to-end patient lifecycle workflows for intake, consultations, treatment, and follow-up.",
    environment: [
      "Web patient portal + Desktop care team console + Mobile patient app",
      "Care pathway workflows",
      "Consent and audit controls",
    ],
    useCase: [
      "Digital intake and triage",
      "Treatment pathway tracking",
      "Follow-up and adherence workflows",
    ],
    integrations: ["Hospital systems", "Lab and diagnostic feeds", "Communication tools"],
    delivery: ["Journey mapping", "Workflow rollout", "Validation", "Care-team enablement"],
    timeline: "7-13 weeks",
  },
  {
    id: "patient-remote-monitoring",
    title: "Patient Remote Monitoring Blueprint",
    category: "Patient Management",
    track: "Hybrid",
    summary:
      "Remote monitoring operations with alerts, escalation paths, and outcomes tracking.",
    environment: [
      "Web monitoring hub + Desktop clinical dashboard + Mobile patient and nurse apps",
      "Alert and escalation engine",
      "Outcome reporting layer",
    ],
    useCase: [
      "Vitals threshold alerting",
      "Nurse intervention workflows",
      "Care-plan compliance tracking",
    ],
    integrations: ["Device feeds", "Care management systems", "Analytics platform"],
    delivery: ["Protocol setup", "Alert workflow config", "Pilot cohort rollout", "Iteration support"],
    timeline: "6-11 weeks",
  },
  {
    id: "pharmacy-dispensing",
    title: "Pharmacy Dispensing Blueprint",
    category: "Medicines Management",
    track: "Self-Hosted",
    summary:
      "Prescription validation, dispensing, and stock controls for pharmacy operations.",
    environment: [
      "Web pharmacy portal + Desktop billing/dispensing console + Mobile stock app",
      "Prescription verification flow",
      "Dispensing and inventory controls",
    ],
    useCase: [
      "Prescription-to-dispense workflow",
      "Substitute and approval logic",
      "Batch and expiry traceability",
    ],
    integrations: ["Patient management", "Billing systems", "Supplier procurement"],
    delivery: ["Process setup", "Rule configuration", "Operational rollout", "Training"],
    timeline: "5-10 weeks",
  },
  {
    id: "pharmacy-supply-chain",
    title: "Pharmacy Supply Chain Blueprint",
    category: "Medicines Management",
    track: "Hybrid",
    summary:
      "Medicine procurement, cold-chain controls, and demand planning for multi-location pharmacies.",
    environment: [
      "Web planning portal + Desktop operations console + Mobile receiving app",
      "Supplier and lot tracking",
      "Expiry and compliance dashboards",
    ],
    useCase: [
      "Demand-based replenishment",
      "Cold-chain exception handling",
      "Inter-branch medicine transfer",
    ],
    integrations: ["Supplier systems", "Inventory and finance", "Compliance reporting"],
    delivery: ["Supply baseline", "Automation setup", "Branch rollout", "Continuous support"],
    timeline: "6-11 weeks",
  },
  {
    id: "doctor-practice-workflow",
    title: "Doctor Practice Workflow Blueprint",
    category: "Doctor Management",
    track: "Enterprise",
    summary:
      "Doctor scheduling, consultation workflow, and performance visibility for care networks.",
    environment: [
      "Web practice admin + Desktop consultation support + Mobile doctor app",
      "Scheduling and roster logic",
      "Consultation workflow controls",
    ],
    useCase: [
      "Shift and availability planning",
      "Consultation queue optimization",
      "Doctor productivity and service metrics",
    ],
    integrations: ["Patient systems", "Billing and claims", "Communication stack"],
    delivery: ["Operating model design", "Workflow setup", "Pilot deployment", "Handover"],
    timeline: "6-11 weeks",
  },
  {
    id: "doctor-network-credentialing",
    title: "Doctor Network Credentialing Blueprint",
    category: "Doctor Management",
    track: "Hybrid",
    summary:
      "Credentialing, compliance renewals, and onboarding workflows for doctor networks.",
    environment: [
      "Web credentialing portal + Desktop compliance dashboard + Mobile renewal app",
      "Document lifecycle automation",
      "Compliance tracking and reminders",
    ],
    useCase: [
      "Onboarding and credential verification",
      "License renewal tracking",
      "Compliance exception handling",
    ],
    integrations: ["HR and legal systems", "Hospital operations", "Notification services"],
    delivery: ["Policy mapping", "Workflow rollout", "Validation checks", "Support model"],
    timeline: "5-9 weeks",
  },
  {
    id: "research-project-ops",
    title: "Research Project Operations Blueprint",
    category: "Research Management",
    track: "Self-Hosted",
    summary:
      "Research lifecycle management across proposals, milestones, reviews, and publication workflows.",
    environment: [
      "Web research workspace + Desktop analyst console + Mobile collaborator app",
      "Milestone and review engine",
      "Documentation and audit trails",
    ],
    useCase: [
      "Proposal-to-approval workflow",
      "Project milestone governance",
      "Publication and artifact tracking",
    ],
    integrations: ["Document repositories", "Identity/SSO", "Funding and finance systems"],
    delivery: ["Workflow design", "Platform setup", "Research team onboarding", "Governance handover"],
    timeline: "6-10 weeks",
  },
  {
    id: "research-lab-coordination",
    title: "Research Lab Coordination Blueprint",
    category: "Research Management",
    track: "Hybrid",
    summary:
      "Lab scheduling, experiment tracking, and cross-team collaboration operations.",
    environment: [
      "Web lab planner + Desktop experiment console + Mobile field/lab app",
      "Resource booking workflows",
      "Experiment and data traceability",
    ],
    useCase: [
      "Lab equipment scheduling",
      "Experiment protocol compliance",
      "Cross-team findings handoff",
    ],
    integrations: ["LIMS/ELN tools", "Storage systems", "Reporting and dashboards"],
    delivery: ["Coordination model", "Workflow rollout", "Pilot labs", "Operations support"],
    timeline: "7-12 weeks",
  },
  {
    id: "ab-testing-growth",
    title: "A/B Testing Growth Blueprint",
    category: "A/B Testing Management",
    track: "Hybrid",
    summary:
      "Experimentation platform for product, growth, and conversion optimization programs.",
    environment: [
      "Web experiment studio + Desktop analyst console + Mobile executive insights app",
      "Experiment governance rules",
      "Decision analytics dashboards",
    ],
    useCase: [
      "Hypothesis and test queue management",
      "Variant rollout and segmentation",
      "Results analysis and decision tracking",
    ],
    integrations: ["Analytics/CDP stack", "Web/mobile apps", "CRM and campaign tools"],
    delivery: ["Experiment framework setup", "Instrumentation rollout", "Pilot experiments", "Scale-up playbook"],
    timeline: "5-9 weeks",
  },
  {
    id: "ab-testing-platform-ops",
    title: "A/B Testing Platform Ops Blueprint",
    category: "A/B Testing Management",
    track: "Enterprise",
    summary:
      "Enterprise experimentation operations with guardrails, approvals, and release governance.",
    environment: [
      "Web governance portal + Desktop operations control + Mobile release monitor app",
      "Rollout safety controls",
      "Audit-ready experimentation registry",
    ],
    useCase: [
      "Approval gates for high-impact tests",
      "Traffic allocation controls",
      "Experiment archive and learning reuse",
    ],
    integrations: ["Release management", "Monitoring and observability", "Data warehouse"],
    delivery: ["Governance design", "Ops implementation", "Rollout rehearsal", "Steady-state support"],
    timeline: "6-10 weeks",
  },
  {
    id: "retail-pos-operations",
    title: "Retail POS Operations Blueprint",
    category: "Retail Management",
    track: "Hybrid",
    summary:
      "Store operations across billing, stock, returns, and branch-level performance reporting.",
    environment: [
      "Web HQ portal + Desktop checkout console + Mobile store supervisor app",
      "POS workflow controls",
      "Branch performance dashboards",
    ],
    useCase: [
      "Billing and discount governance",
      "Store inventory reconciliation",
      "Return and exchange automation",
    ],
    integrations: ["ERP finance", "Inventory systems", "Loyalty and CRM"],
    delivery: ["Store process mapping", "System rollout", "Staff onboarding", "Post-launch support"],
    timeline: "6-10 weeks",
  },
  {
    id: "retail-franchise-control",
    title: "Retail Franchise Control Blueprint",
    category: "Retail Management",
    track: "Enterprise",
    summary:
      "Franchise governance for pricing, procurement, and audit-ready operational controls.",
    environment: [
      "Web governance portal + Desktop audit console + Mobile field audit app",
      "Policy and approvals engine",
      "Franchise compliance analytics",
    ],
    useCase: [
      "Franchise policy enforcement",
      "Regional procurement coordination",
      "Compliance and exception tracking",
    ],
    integrations: ["Vendor systems", "Finance and ERP", "Audit workflows"],
    delivery: ["Governance blueprint", "Workflow setup", "Regional rollout", "Support handover"],
    timeline: "7-12 weeks",
  },
  {
    id: "dealer-dms-operations",
    title: "Dealer DMS Blueprint",
    category: "Dealer DMS",
    track: "Enterprise",
    summary:
      "Dealer management system for lead handling, vehicle lifecycle, and service coordination.",
    environment: [
      "Web dealer portal + Desktop operations console + Mobile sales app",
      "DMS workflow orchestration",
      "Dealer KPI dashboards",
    ],
    useCase: [
      "Lead-to-delivery lifecycle",
      "Vehicle stock and booking workflows",
      "Service and warranty coordination",
    ],
    integrations: ["CRM and ERP", "Finance and insurance", "Service systems"],
    delivery: ["DMS process design", "System implementation", "Pilot dealerships", "Scale rollout"],
    timeline: "8-14 weeks",
  },
  {
    id: "dealer-dms-network",
    title: "Multi-Brand Dealer Network Blueprint",
    category: "Dealer DMS",
    track: "Hybrid",
    summary:
      "Central operations model for multi-brand, multi-region dealership networks.",
    environment: [
      "Web network command center + Desktop branch console + Mobile regional manager app",
      "Cross-brand controls",
      "Regional benchmark reporting",
    ],
    useCase: [
      "Cross-brand sales governance",
      "Regional performance benchmarking",
      "Escalation and service quality tracking",
    ],
    integrations: ["OEM systems", "ERP and BI", "Support and ticketing"],
    delivery: ["Network model setup", "Integration rollout", "Regional onboarding", "Stabilization"],
    timeline: "8-13 weeks",
  },
  {
    id: "parking-smart-city",
    title: "Smart City Parking Blueprint",
    category: "Smart Mobility",
    track: "Hybrid",
    summary:
      "City-scale parking and mobility operations with occupancy, pricing, and enforcement workflows.",
    environment: [
      "Web city operations portal + Desktop control room + Mobile enforcement app",
      "Real-time occupancy engine",
      "Policy and enforcement workflows",
    ],
    useCase: [
      "Zone occupancy optimization",
      "Dynamic pricing policies",
      "Violation capture and resolution",
    ],
    integrations: ["IoT sensors", "Payment gateways", "Municipal systems"],
    delivery: ["Policy modeling", "Platform rollout", "Pilot zones", "Operational scale-up"],
    timeline: "8-14 weeks",
  },
  {
    id: "fleet-mobility-ops",
    title: "Fleet Mobility Operations Blueprint",
    category: "Smart Mobility",
    track: "Self-Hosted",
    summary:
      "Fleet dispatch and route orchestration with utilization and maintenance visibility.",
    environment: [
      "Web fleet planning portal + Desktop dispatch console + Mobile driver app",
      "Route planning engine",
      "Fleet performance dashboards",
    ],
    useCase: [
      "Route and assignment optimization",
      "Maintenance scheduling workflows",
      "Utilization and downtime monitoring",
    ],
    integrations: ["Telematics", "Fuel/expense systems", "ERP and finance"],
    delivery: ["Fleet baseline", "Workflow setup", "Dispatch rollout", "Continuous support"],
    timeline: "6-11 weeks",
  },
  {
    id: "construction-project-ops",
    title: "Construction Project Ops Blueprint",
    category: "Construction Management",
    track: "Enterprise",
    summary:
      "Project planning, contractor workflows, site reporting, and cost tracking for construction programs.",
    environment: [
      "Web PM portal + Desktop planning console + Mobile site engineer app",
      "Milestone and issue workflows",
      "Budget and progress dashboards",
    ],
    useCase: [
      "Project milestone governance",
      "Contractor coordination and approvals",
      "Site issue and risk management",
    ],
    integrations: ["Procurement", "Finance and ERP", "Document systems"],
    delivery: ["Program setup", "Workflow implementation", "Site rollout", "Handover"],
    timeline: "8-15 weeks",
  },
  {
    id: "construction-materials-flow",
    title: "Construction Materials Flow Blueprint",
    category: "Construction Management",
    track: "Hybrid",
    summary:
      "Materials planning and site-level usage tracking to reduce delays and leakage.",
    environment: [
      "Web procurement planner + Desktop inventory console + Mobile site stock app",
      "Material request workflows",
      "Consumption and variance analytics",
    ],
    useCase: [
      "Material demand planning",
      "Site-level issue/return workflows",
      "Leakage and variance control",
    ],
    integrations: ["Warehouse", "Vendor systems", "Project finance"],
    delivery: ["Flow mapping", "Automation rollout", "Site pilots", "Optimization"],
    timeline: "6-11 weeks",
  },
  {
    id: "education-school-erp",
    title: "School ERP Blueprint",
    category: "Education Management",
    track: "Self-Hosted",
    summary:
      "Academic, administrative, and parent communication workflows in a unified school system.",
    environment: [
      "Web admin portal + Desktop office console + Mobile parent/teacher app",
      "Academic and finance workflows",
      "Attendance and communication controls",
    ],
    useCase: [
      "Admissions and enrollment workflows",
      "Attendance and timetable management",
      "Fee and communication automation",
    ],
    integrations: ["Payment systems", "LMS modules", "Notification channels"],
    delivery: ["Requirements baseline", "Platform setup", "Term rollout", "Support handover"],
    timeline: "6-10 weeks",
  },
  {
    id: "education-university-ops",
    title: "University Operations Blueprint",
    category: "Education Management",
    track: "Enterprise",
    summary:
      "Departmental and campus-level workflows for student lifecycle and administrative control.",
    environment: [
      "Web campus portal + Desktop registrar console + Mobile student app",
      "Program and department workflows",
      "Student lifecycle dashboards",
    ],
    useCase: [
      "Course and semester planning",
      "Student service request workflows",
      "Academic and finance coordination",
    ],
    integrations: ["Identity and SSO", "Finance systems", "Learning platforms"],
    delivery: ["Operating model design", "Implementation rollout", "Campus onboarding", "Stabilization"],
    timeline: "8-14 weeks",
  },
  {
    id: "manufacturing-maintenance-cmms",
    title: "CMMS Maintenance Blueprint",
    category: "Maintenance Management",
    track: "Self-Hosted",
    summary:
      "Asset maintenance operations with preventive schedules, work orders, and downtime analysis.",
    environment: [
      "Web maintenance portal + Desktop planner console + Mobile technician app",
      "Preventive maintenance rules",
      "Asset and downtime dashboards",
    ],
    useCase: [
      "Preventive maintenance scheduling",
      "Breakdown response workflows",
      "Spare parts and downtime tracking",
    ],
    integrations: ["Inventory and procurement", "Production systems", "Finance"],
    delivery: ["Asset audit", "Workflow setup", "Pilot line rollout", "Ops handover"],
    timeline: "6-11 weeks",
  },
  {
    id: "facility-maintenance-ops",
    title: "Facility Maintenance Blueprint",
    category: "Maintenance Management",
    track: "Hybrid",
    summary:
      "Facility service requests, SLA governance, and contractor coordination workflows.",
    environment: [
      "Web facility command center + Desktop operations console + Mobile field app",
      "Service request orchestration",
      "SLA and contractor performance dashboards",
    ],
    useCase: [
      "Ticket intake and assignment",
      "SLA breach prevention workflows",
      "Contractor compliance tracking",
    ],
    integrations: ["Access control", "Procurement", "Finance and billing"],
    delivery: ["Service model setup", "Workflow rollout", "Site activation", "Continuous support"],
    timeline: "6-10 weeks",
  },
];

export default function ProjectBlueprintsExplorer() {
  const [activeTrack, setActiveTrack] = useState<"All" | Blueprint["track"]>("All");
  const [activeCategory, setActiveCategory] = useState(blueprints[0].category);
  const [activeId, setActiveId] = useState(blueprints[0].id);
  const [panelKey, setPanelKey] = useState(0);

  const tracks: Array<"All" | Blueprint["track"]> = [
    "All",
    "Enterprise",
    "Self-Hosted",
    "Hybrid",
  ];
  const trackFiltered = useMemo(
    () => blueprints.filter((b) => activeTrack === "All" || b.track === activeTrack),
    [activeTrack],
  );
  const categories = useMemo(
    () => Array.from(new Set(trackFiltered.map((b) => b.category))),
    [trackFiltered],
  );

  const filteredBlueprints = useMemo(
    () =>
      trackFiltered.filter(
        (b) => categories.includes(activeCategory) && b.category === activeCategory,
      ),
    [activeCategory, categories, trackFiltered],
  );
  const active =
    trackFiltered.find((b) => b.id === activeId) ?? filteredBlueprints[0] ?? trackFiltered[0];

  const setByTrack = (track: "All" | Blueprint["track"]) => {
    setActiveTrack(track);
    const firstByTrack =
      blueprints.find((b) => (track === "All" ? true : b.track === track)) ?? blueprints[0];
    setActiveCategory(firstByTrack.category);
    setActiveId(firstByTrack.id);
    setPanelKey((k) => k + 1);
  };

  const setByCategory = (category: string) => {
    const first = blueprints.find((b) => b.category === category);
    if (!first) return;
    setActiveCategory(category);
    setActiveId(first.id);
    setPanelKey((k) => k + 1);
  };

  const setActiveBlueprint = (id: string) => {
    setActiveId(id);
    setPanelKey((k) => k + 1);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        {tracks.map((track) => {
          const selected = activeTrack === track;
          const count =
            track === "All" ? blueprints.length : blueprints.filter((b) => b.track === track).length;
          return (
            <button
              key={track}
              type="button"
              onClick={() => setByTrack(track)}
              className={`mobile-premium-tap rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
                selected
                  ? "border-brand/45 bg-brand/12 text-foreground shadow-sm shadow-brand/20"
                  : "border-border/70 bg-card/70 text-muted-foreground hover:border-brand/35 hover:text-foreground"
              }`}
            >
              {track} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const selected = activeCategory === category;
          const count = trackFiltered.filter((b) => b.category === category).length;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setByCategory(category)}
              className={`mobile-premium-tap rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
                selected
                  ? "border-brand/45 bg-brand/12 text-foreground shadow-sm shadow-brand/20"
                  : "border-border/70 bg-card/70 text-muted-foreground hover:border-brand/35 hover:text-foreground"
              }`}
            >
              {category} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filteredBlueprints.map((item) => {
          const selected = active.id === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveBlueprint(item.id)}
              className={`group text-left rounded-xl border p-4 transition-all duration-300 ${
                selected
                  ? "border-brand/45 bg-brand/10 shadow-md shadow-brand/15"
                  : "border-border/70 bg-card/80 hover:border-brand/35 hover:bg-brand/8"
              }`}
            >
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Open Blueprint
              </p>
            </button>
          );
        })}
      </div>

      <div
        key={panelKey}
        className="animate-appear group relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-b from-green-50/70 to-card p-6 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/30 dark:border-emerald-900/40 dark:from-emerald-950/35 dark:to-card dark:hover:shadow-emerald-900/25"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
        <div className="pointer-events-none absolute -top-16 right-3 h-28 w-28 rounded-full bg-green-300/20 blur-2xl dark:bg-emerald-500/20" />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {active.category} Blueprint
          </p>

          <h2 className="mt-3 text-2xl font-semibold">{active.title}</h2>
          <p className="mt-2 text-muted-foreground">{active.summary}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Environment
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {active.environment.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Use Cases
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {active.useCase.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Integration Layer
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {active.integrations.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Delivery Model
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {active.delivery.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Typical timeline: <span className="font-medium text-foreground">{active.timeline}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
