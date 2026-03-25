import { User, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Illustrative Engagement Models",
  description = "Typical ways organisations work with OnXeon. Scope, timing, and commercials are ultimately shaped around your operating environment.",
  plans = [
    {
      name: "Advisory Sprint",
      description: "For teams clarifying platform direction, delivery shape, and migration risk.",
      price: "Custom",
      priceNote: "Usually used to frame decisions, priorities, and a credible execution path.",
      cta: {
        variant: "glow",
        label: "Arrange A Call",
        href: "/contact#book",
      },
      features: [
        "Discovery workshops and stakeholder alignment",
        "Architecture and platform-fit guidance",
        "Phasing, risk, and operating model recommendations",
      ],
      variant: "default",
      className: "hidden lg:flex",
    },
    {
      name: "Implementation Programme",
      icon: <User className="size-4" />,
      description: "For organisations executing CRM, ERP, cloud, or integration initiatives.",
      price: "Scoped",
      priceNote: "Structured around project complexity, internal capacity, and programme cadence.",
      cta: {
        variant: "default",
        label: "Discuss A Programme",
        href: "/contact#book",
      },
      features: [
        "Implementation leadership and delivery oversight",
        "Configuration, integration, and rollout coordination",
        "Documentation, enablement, and operational handover",
      ],
      variant: "glow-brand",
    },
    {
      name: "Stewardship Retainer",
      icon: <Users className="size-4" />,
      description: "For teams that need calm ongoing support after go-live or between major initiatives.",
      price: "Ongoing",
      priceNote: "Best suited to iterative optimisation, issue stewardship, and roadmap continuity.",
      cta: {
        variant: "default",
        label: "Review Support Options",
        href: "/contact#book",
      },
      features: [
        "Change requests, advisory input, and release support",
        "Integration stewardship and platform enhancements",
        "Continuity across vendor, internal, and platform teams",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                originalPrice={plan.originalPrice}
                promotionText={plan.promotionText}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
