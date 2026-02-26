import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: { absolute: "Careers — OnXeon" },
  description:
    "Join OnXeon to work on enterprise implementations, integrations and open-source delivery projects.",
};

const roles = [
  {
    title: "Integration Engineer",
    description:
      "Build and maintain API integrations across CRM, ERP and internal systems.",
  },
  {
    title: "Enterprise Solutions Consultant",
    description:
      "Drive implementation planning, stakeholder alignment and delivery governance.",
  },
  {
    title: "Cloud & Platform Engineer",
    description:
      "Deploy and operate enterprise and self-hosted systems on cloud infrastructure.",
  },
];

export default function CareersPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto py-24 space-y-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">Careers</h1>
          <p className="text-muted-foreground">
            We work on practical enterprise systems with a vendor-neutral,
            engineering-focused approach.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.title} className="h-full">
              <CardHeader>
                <CardTitle>{role.title}</CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="rounded-xl border bg-card p-6 space-y-3">
          <h2 className="text-xl font-semibold">How to Apply</h2>
          <p className="text-muted-foreground">
            Send your profile and relevant project experience to our team.
          </p>
          <Button variant="default" asChild>
            <Link href="mailto:Rajat@OnXeon.com" >
            Apply via Email
          </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
