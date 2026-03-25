import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question: "What kinds of engagements does OnXeon typically support?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            We usually support enterprise implementation programmes, integration
            workstreams, self-hosted modernisation, and post-launch stewardship.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            That can range from early advisory work through to delivery
            execution, handover, and ongoing operational support.
          </p>
        </>
      ),
    },
    {
      question: "Do you only implement enterprise SaaS platforms?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            No. We work across enterprise SaaS platforms such as Salesforce,
            SAP, ServiceNow, and cloud providers, but we also support
            carefully selected self-hosted alternatives when they are a better
            fit for cost, control, or operating model.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            The recommendation should follow the business reality, not the other
            way around.
          </p>
        </>
      ),
    },
    {
      question: "When does a self-hosted option make sense?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Self-hosted options are often worth evaluating when licence cost,
            data residency, platform flexibility, or long-term ownership matter
            more than buying into a large vendor ecosystem.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            They are not always the right answer, but they can be a strong fit
            when the organisation can support the operating model properly.
          </p>
        </>
      ),
    },
    {
      question: "How do you approach integrations and handover?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            We prioritise integration clarity early: ownership, contracts, data
            flows, failure handling, and operational visibility all need to be
            thought through before go-live.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Handover usually includes documentation, operating guidance,
            support patterns, and enough structure for internal teams to keep
            moving without dependency on guesswork.
          </p>
        </>
      ),
    },
    {
      question: "Can OnXeon work alongside an internal team or incumbent vendor?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Yes. Many engagements work best when we operate as an advisory and
          delivery layer around internal stakeholders, platform owners, or
          specialist vendors rather than replacing them.
        </p>
      ),
    },
    {
      question: "How do we start the conversation?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            The easiest starting point is a short conversation around your
            current systems, delivery pressure, and the decision or programme
            you need to move forward.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            If that sounds helpful, get in touch via{" "}
            <Link href={siteConfig.links.email} className="underline underline-offset-2">
              the contact page
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
