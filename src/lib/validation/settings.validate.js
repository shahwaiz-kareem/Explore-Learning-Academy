import { z } from "zod";

export const settingsSchema = z.object({
  feePerMonth: z
    .number({ invalid_type_error: "Fee must be a number" })
    .positive("Fee must be a positive number")
    .min(1, "Fee must be at least 1"),
  maxStudents: z
    .number({ invalid_type_error: "Max students must be a number" })
    .int("Must be an integer")
    .positive("Must be a positive number")
    .min(1, "Must be at least 1"),
  duration: z
    .number({ invalid_type_error: "Duration must be a number" })
    .positive("Duration must be a positive number")
    .min(1, "Duration must be at least 1 month"),
  shiftTiming1: z.string().nonempty("Shift timing 1 is required"),
  shiftTiming2: z.string().nonempty("Shift timing 2 is required"),
});
