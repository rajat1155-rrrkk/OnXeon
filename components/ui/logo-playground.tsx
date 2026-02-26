"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Goal = "crm" | "erp" | "integration" | "self-hosted";
type Cloud = "aws" | "azure" | "gcp" | "hybrid";
type Urgency = "pilot" | "quarter" | "critical";
type Affordability = "enterprise" | "affordable" | "balanced";
type ToolChoice =
  | "plane"
  | "openproject"
  | "jira"
  | "salesforce"
  | "zoho"
  | "suitecrm"
  | "odoo-crm"
  | "sap"
  | "erpnext"
  | "odoo-erp"
  | "jitsi"
  | "bigbluebutton"
  | "moodle"
  | "nextcloud"
  | "inv-selfhosted"
  | "dealer-management"
  | "parking-management";

type Plan = {
  title: string;
  stack: string[];
  phases: string[];
  costBand: string;
  timeline: string;
  modeNote: string;
};

function buildPlan(
  goal: Goal,
  cloud: Cloud,
  urgency: Urgency,
  hasLegacy: boolean,
  affordability: Affordability,
  toolChoice: ToolChoice,
): Plan {
  const cloudLabel = cloud === "hybrid" ? "Hybrid Cloud" : cloud.toUpperCase();
  const prefersAffordable = affordability === "affordable";
  const balanced = affordability === "balanced";
  const costBand =
    affordability === "affordable"
      ? "Lower licensing, higher ownership"
      : affordability === "enterprise"
        ? "Higher licensing, lower change friction"
        : "Moderate licensing with targeted savings";
  const modeNote =
    affordability === "enterprise"
      ? "Enterprise-grade OEM-first stack prioritized for standardization and compliance."
      : affordability === "affordable"
        ? "Cost-efficient stack prioritized with self-hosted/open-source components."
        : "Balanced stack combining enterprise platforms with affordable self-hosted components.";

  const selectedToolLabel: Record<ToolChoice, string> = {
    plane: "Plane",
    openproject: "OpenProject",
    jira: prefersAffordable ? "OpenProject (Jira alternative)" : "Jira",
    salesforce: prefersAffordable ? "Odoo CRM (Salesforce alternative)" : "Salesforce",
    zoho: prefersAffordable ? "SuiteCRM (Zoho alternative)" : "Zoho CRM",
    suitecrm: "SuiteCRM",
    "odoo-crm": "Odoo CRM",
    sap: prefersAffordable ? "ERPNext (SAP alternative)" : "SAP",
    erpnext: "ERPNext",
    "odoo-erp": "Odoo ERP",
    jitsi: "Jitsi Meet",
    bigbluebutton: "BigBlueButton",
    moodle: "Moodle LMS",
    nextcloud: "Nextcloud",
    "inv-selfhosted": "Self-Hosted Inventory",
    "dealer-management": "Dealer Management Platform",
    "parking-management": "Parking Management Platform",
  };

  if (goal === "crm") {
    return {
      title: "CRM Implementation Blueprint",
      stack: [
        selectedToolLabel[toolChoice],
        "Integration Layer",
        cloudLabel,
        hasLegacy ? "Legacy Adapter" : "API Connectors",
      ],
      phases: [
        "Discovery and process mapping",
        "CRM configuration and data model",
        "Integration and automation rollout",
        "User training and controlled go-live",
      ],
      costBand,
      timeline: urgency === "pilot" ? "4-6 weeks" : urgency === "quarter" ? "8-12 weeks" : "2-4 weeks",
      modeNote,
    };
  }

  if (goal === "erp") {
    return {
      title: "ERP Integration Blueprint",
      stack: [
        selectedToolLabel[toolChoice],
        "Data Sync Services",
        "PostgreSQL",
        cloudLabel,
      ],
      phases: [
        "System audit and interface design",
        "Master data and process alignment",
        "Integration build and testing",
        "Cutover with validation monitoring",
      ],
      costBand,
      timeline: urgency === "pilot" ? "6-8 weeks" : urgency === "quarter" ? "10-14 weeks" : "4-6 weeks",
      modeNote,
    };
  }

  if (goal === "self-hosted") {
    return {
      title: "Self-Hosted Modernization Blueprint",
      stack: [
        selectedToolLabel[toolChoice],
        "Docker",
        "PostgreSQL",
        balanced ? "Optional Salesforce/SAP Bridge" : cloudLabel,
      ],
      phases: [
        "SaaS replacement planning",
        "Infrastructure and security baseline",
        "Migration and integration handover",
        "Operational runbook and support setup",
      ],
      costBand,
      timeline: urgency === "pilot" ? "4-6 weeks" : urgency === "quarter" ? "8-10 weeks" : "3-5 weeks",
      modeNote,
    };
  }

  return {
    title: "Platform Integration Blueprint",
    stack: [
      balanced
        ? "Salesforce/SAP + Odoo/ERPNext Mix"
        : prefersAffordable
          ? "Open CRM + Open ERP"
          : "CRM + ERP (Enterprise)",
      selectedToolLabel[toolChoice],
      "API Gateway",
      "Event / Queue Layer",
      cloudLabel,
    ],
    phases: [
      "Integration architecture definition",
      "API contracts and orchestration",
      "End-to-end flow testing",
      "Observability and long-term support",
    ],
    costBand,
    timeline: urgency === "pilot" ? "5-7 weeks" : urgency === "quarter" ? "9-12 weeks" : "3-5 weeks",
    modeNote,
  };
}

export default function LogoPlayground() {
  const [affordability, setAffordability] = useState<Affordability>("affordable");
  const [goal, setGoal] = useState<Goal>("integration");
  const [toolChoice, setToolChoice] = useState<ToolChoice>("plane");
  const [cloud, setCloud] = useState<Cloud>("aws");
  const [urgency, setUrgency] = useState<Urgency>("quarter");
  const [hasLegacy, setHasLegacy] = useState(true);

  const plan = useMemo(
    () => buildPlan(goal, cloud, urgency, hasLegacy, affordability, toolChoice),
    [goal, cloud, urgency, hasLegacy, affordability, toolChoice],
  );

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-green-100 bg-gradient-to-b from-green-50/90 to-card dark:border-emerald-900/40 dark:from-emerald-950/45 dark:to-card">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/70 to-transparent dark:via-emerald-400/60" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="absolute inset-0 grid grid-cols-12">
        <div className="col-span-4 border-r border-green-100 bg-white/94 p-3 dark:border-emerald-900/40 dark:bg-card/88">
          <p className="text-xs font-semibold tracking-wide text-foreground">Architecture Configurator</p>
          <p className="mt-1 text-xs text-muted-foreground">Get a practical implementation blueprint</p>

          <div className="mt-3 space-y-2 text-[11px]">
            <label className="block">
              <span className="mb-1 block text-muted-foreground">Affordability Strategy</span>
              <select
                value={affordability}
                onChange={(e) => setAffordability(e.target.value as Affordability)}
                className="w-full rounded-md border border-green-200 bg-white px-2 py-1 text-foreground dark:border-emerald-800/60 dark:bg-card"
              >
                <option value="balanced">Balanced (Enterprise + Self-Hosted)</option>
                <option value="enterprise">Enterprise Systems First</option>
                <option value="affordable">Affordable Self-Hosted First</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-muted-foreground">Preferred Tool / System</span>
              <select
                value={toolChoice}
                onChange={(e) => setToolChoice(e.target.value as ToolChoice)}
                className="w-full rounded-md border border-green-200 bg-white px-2 py-1 text-foreground dark:border-emerald-800/60 dark:bg-card"
              >
                <optgroup label="PM / Work Management">
                  <option value="plane">Plane (self-hosted)</option>
                  <option value="openproject">OpenProject (self-hosted)</option>
                  <option value="jira">Jira</option>
                </optgroup>
                <optgroup label="CRM">
                  <option value="salesforce">Salesforce</option>
                  <option value="zoho">Zoho CRM</option>
                  <option value="suitecrm">SuiteCRM (self-hosted)</option>
                  <option value="odoo-crm">Odoo CRM</option>
                </optgroup>
                <optgroup label="ERP">
                  <option value="sap">SAP</option>
                  <option value="erpnext">ERPNext (self-hosted)</option>
                  <option value="odoo-erp">Odoo ERP</option>
                </optgroup>
                <optgroup label="Video / Collaboration">
                  <option value="jitsi">Jitsi Meet (self-hosted)</option>
                  <option value="bigbluebutton">BigBlueButton (self-hosted)</option>
                  <option value="nextcloud">Nextcloud (self-hosted)</option>
                </optgroup>
                <optgroup label="Industry / Other">
                  <option value="moodle">Moodle LMS (self-hosted)</option>
                  <option value="inv-selfhosted">Inventory Management (self-hosted)</option>
                  <option value="dealer-management">Dealer Management</option>
                  <option value="parking-management">Parking Management</option>
                </optgroup>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-muted-foreground">Primary Goal</span>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as Goal)}
                className="w-full rounded-md border border-green-200 bg-white px-2 py-1 text-foreground dark:border-emerald-800/60 dark:bg-card"
              >
                <option value="integration">System Integration</option>
                <option value="crm">CRM Implementation</option>
                <option value="erp">ERP Integration</option>
                <option value="self-hosted">Self-Hosted Migration</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-muted-foreground">Deployment Preference</span>
              <select
                value={cloud}
                onChange={(e) => setCloud(e.target.value as Cloud)}
                className="w-full rounded-md border border-green-200 bg-white px-2 py-1 text-foreground dark:border-emerald-800/60 dark:bg-card"
              >
                <option value="aws">AWS</option>
                <option value="azure">Azure</option>
                <option value="gcp">GCP</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-muted-foreground">Timeline Urgency</span>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as Urgency)}
                className="w-full rounded-md border border-green-200 bg-white px-2 py-1 text-foreground dark:border-emerald-800/60 dark:bg-card"
              >
                <option value="pilot">Pilot</option>
                <option value="quarter">This quarter</option>
                <option value="critical">Critical fast-track</option>
              </select>
            </label>

            <label className="flex items-center gap-2 rounded-md border border-green-100 bg-white px-2 py-1 dark:border-emerald-900/40 dark:bg-card">
              <input
                type="checkbox"
                checked={hasLegacy}
                onChange={(e) => setHasLegacy(e.target.checked)}
                className="h-3.5 w-3.5"
              />
              <span className="text-muted-foreground">Include legacy systems</span>
            </label>
          </div>
        </div>

        <div className="relative col-span-8 p-3">
          <div className="rounded-lg border border-green-200 bg-white/96 p-3 dark:border-emerald-800/60 dark:bg-card/92">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">{plan.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Suggested timeline: <span className="font-medium text-foreground">{plan.timeline}</span> · Cost profile: <span className="font-medium text-foreground">{plan.costBand}</span>
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">{plan.modeNote}</p>
              </div>
              <Link
                href="/contact#book"
                className="rounded-md border border-green-200 bg-white px-2 py-1 text-[11px] font-medium text-muted-foreground transition hover:border-green-300 hover:text-foreground dark:border-emerald-800/60 dark:bg-card"
              >
                Book Consultation
              </Link>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-md border border-green-100 bg-green-50/55 p-2 dark:border-emerald-900/40 dark:bg-emerald-900/15">
                <p className="text-[11px] font-semibold text-foreground">Recommended Stack</p>
                <ul className="mt-2 space-y-1 text-[11px] text-muted-foreground">
                  {plan.stack.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-green-100 bg-white p-2 dark:border-emerald-900/40 dark:bg-card">
                <p className="text-[11px] font-semibold text-foreground">Delivery Phases</p>
                <ol className="mt-2 space-y-1 text-[11px] text-muted-foreground">
                  {plan.phases.map((phase, idx) => (
                    <li key={phase}>{idx + 1}. {phase}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2 text-[11px]">
            {plan.stack.map((item, idx) => (
              <div
                key={item}
                className="group relative rounded-md border border-green-100 bg-white px-2 py-2 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md hover:shadow-green-200/35 dark:border-emerald-900/40 dark:bg-card"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-transparent via-green-100/60 to-transparent dark:via-emerald-500/20" />
                <p className="relative z-10 line-clamp-2">{item}</p>
                {idx < plan.stack.length - 1 && (
                  <span className="pointer-events-none absolute -right-1 top-1/2 -translate-y-1/2 text-green-500/80">→</span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-3 rounded-md border border-green-100 bg-white p-2 text-[11px] text-muted-foreground dark:border-emerald-900/40 dark:bg-card">
            This is a preliminary architecture suggestion. OnXeon validates constraints, data flows, and operating model before implementation.
          </p>
        </div>
      </div>
    </div>
  );
}
