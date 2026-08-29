import { z } from "zod";

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
];

export const opportunityFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number is too long"),
  companyName: z
    .string()
    .min(2, "Company or project name is required")
    .max(120, "Company name is too long"),
  category: z.enum([
    "Real Estate",
    "Business Investment",
    "SME Growth",
    "Startup & Early-Stage Ventures",
    "Financial Markets",
    "Other Strategic Investment",
  ], {
    errorMap: () => ({ message: "Please select a valid investment category" }),
  }),
  fundingRequired: z
    .string()
    .min(1, "Please specify the capital required (e.g. ₦50,000,000 or $100,000)"),
  websiteUrl: z
    .string()
    .url("Please enter a valid URL (including http:// or https://)")
    .optional()
    .or(z.literal("")),
  description: z
    .string()
    .min(30, "Please provide a brief description of at least 30 characters summarizing the opportunity")
    .max(2500, "Description cannot exceed 2500 characters"),
});

export type OpportunityFormValues = z.infer<typeof opportunityFormSchema>;
