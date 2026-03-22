"use server";

import { appendFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

export type ContactFormState = {
  errors?: Partial<Record<"name" | "email" | "focus" | "message", string>>;
  fields?: {
    company?: string;
    email?: string;
    focus?: string;
    message?: string;
    name?: string;
  };
  status: "idle" | "error" | "success";
  message?: string;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
};

const FOCUS_OPTIONS = new Set([
  "CRM",
  "ERP",
  "System Integration",
  "Self-Hosted",
  "Support & Enhancements",
]);

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactInquiry(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = getFieldValue(formData, "website");
  if (honeypot) {
    return {
      status: "success",
      message: "Thanks. Your inquiry has been received.",
    };
  }

  const fields = {
    company: getFieldValue(formData, "company"),
    email: getFieldValue(formData, "email"),
    focus: getFieldValue(formData, "focus"),
    message: getFieldValue(formData, "message"),
    name: getFieldValue(formData, "name"),
  };

  const errors: ContactFormState["errors"] = {};

  if (fields.name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid work email.";
  }

  if (!FOCUS_OPTIONS.has(fields.focus)) {
    errors.focus = "Please choose a project focus.";
  }

  if (fields.message.length < 20) {
    errors.message = "Please share a little more project context.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
      fields,
    };
  }

  const submission = {
    ...fields,
    createdAt: new Date().toISOString(),
  };

  try {
    const inquiryDirectory = join(tmpdir(), "onxeon-contact");
    await mkdir(inquiryDirectory, { recursive: true });
    await appendFile(join(inquiryDirectory, "inquiries.ndjson"), `${JSON.stringify(submission)}\n`, "utf8");
  } catch (error) {
    console.error("Failed to persist contact inquiry", error);

    return {
      status: "error",
      message: "Your inquiry could not be saved right now. Please try again shortly.",
      fields,
    };
  }

  return {
    status: "success",
    message: "Thanks. Your inquiry has been received and we will review it shortly.",
  };
}
