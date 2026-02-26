import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p>
        Contact OnXeon to discuss implementations, integrations or system improvements.
      </p>
      <p className="font-medium">Rajat@OnXeon.com</p>
      <Button variant="default" asChild>
            <Link
        href="mailto:Rajat@OnXeon.com"
        
      >
        Email Us
      </Link>
          </Button>
    </div>
  );
}
