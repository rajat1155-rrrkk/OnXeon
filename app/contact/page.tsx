import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p>
        Contact OnXeon to discuss implementations, integrations or system improvements.
      </p>
      <p className="font-medium">hello@onxeon.com</p>
      <Link
        href="mailto:hello@onxeon.com"
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Email Us
      </Link>
    </div>
  );
}
