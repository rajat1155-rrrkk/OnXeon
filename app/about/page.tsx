import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-3xl font-semibold">About OnXeon</h1>
      <p>
        OnXeon focuses on enterprise implementations, integrations and open-source solutions.
      </p>
      <p>
        We implement and customize enterprise platforms such as Salesforce and SAP and deploy self-hosted tools where appropriate.
      </p>
      <p>
        Our goal is to build reliable and maintainable systems that support long-term business operations.
      </p>
      <Button variant="default" asChild>
            <Link
        href="/contact"
        
      >
        Contact Us
      </Link>
          </Button>
    </div>
  );
}
