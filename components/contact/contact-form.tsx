"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import {
  initialContactFormState,
  submitContactInquiry,
} from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="default"
      disabled={pending}
      className="rounded-full px-5 shadow-[0_16px_30px_-20px_hsl(var(--brand)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
    >
      {pending ? "Sending Inquiry..." : "Send Inquiry"}
    </Button>
  );
}

function fieldClassName(error?: string) {
  return cn(
    "h-11 rounded-xl border border-border/80 bg-background/80 px-3 text-sm outline-none transition",
    "focus:border-brand/40 dark:bg-background/70",
    error && "border-red-300 focus:border-red-400 dark:border-red-700 dark:focus:border-red-600",
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactInquiry,
    initialContactFormState,
  );

  const fields = state.fields ?? {};

  return (
    <form action={formAction} className="mt-5 grid gap-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {state.message ? (
        <div
          className={cn(
            "rounded-2xl border px-4 py-3 text-sm",
            state.status === "success"
              ? "border-brand/20 bg-brand/10 text-foreground"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300",
          )}
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            name="name"
            required
            defaultValue={fields.name}
            aria-invalid={Boolean(state.errors?.name)}
            className={fieldClassName(state.errors?.name)}
          />
          {state.errors?.name ? (
            <span className="text-xs text-red-600 dark:text-red-400">{state.errors.name}</span>
          ) : null}
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Work Email</span>
          <input
            type="email"
            name="email"
            required
            defaultValue={fields.email}
            aria-invalid={Boolean(state.errors?.email)}
            className={fieldClassName(state.errors?.email)}
          />
          {state.errors?.email ? (
            <span className="text-xs text-red-600 dark:text-red-400">{state.errors.email}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Company</span>
          <input
            type="text"
            name="company"
            defaultValue={fields.company}
            className={fieldClassName()}
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-medium">Primary Focus</span>
          <select
            name="focus"
            required
            defaultValue={fields.focus || "CRM"}
            aria-invalid={Boolean(state.errors?.focus)}
            className={cn(fieldClassName(state.errors?.focus), "pr-8")}
          >
            <option value="CRM">CRM</option>
            <option value="ERP">ERP</option>
            <option value="System Integration">System Integration</option>
            <option value="Self-Hosted">Self-Hosted</option>
            <option value="Support & Enhancements">Support & Enhancements</option>
          </select>
          {state.errors?.focus ? (
            <span className="text-xs text-red-600 dark:text-red-400">{state.errors.focus}</span>
          ) : null}
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-sm font-medium">Project Details</span>
        <textarea
          name="message"
          rows={5}
          required
          defaultValue={fields.message}
          placeholder="Share systems involved, target timeline, and expected outcomes."
          aria-invalid={Boolean(state.errors?.message)}
          className={cn(
            "rounded-2xl border border-border/80 bg-background/80 px-3 py-3 text-sm outline-none transition",
            "focus:border-brand/40 dark:bg-background/70",
            state.errors?.message &&
              "border-red-300 focus:border-red-400 dark:border-red-700 dark:focus:border-red-600",
          )}
        />
        {state.errors?.message ? (
          <span className="text-xs text-red-600 dark:text-red-400">{state.errors.message}</span>
        ) : null}
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <SubmitButton />
        <p className="text-xs text-muted-foreground">
          Typical response time: 1 business day.
        </p>
      </div>
    </form>
  );
}
