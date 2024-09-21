import { z } from "zod";
export const faqSchema = z.object({
  question: z.string().min(6, "minimum 6 characters are required"),
  answer: z.string().min(6, "minimum 6 characters are required"),
});
