const { z } = require("zod");

export const enrollSchema = z.object({
  name: z.string().min(2, "Name is required"),
  age: z
    .number("Age is required")
    .min(12, "You must be at least 12 years old")
    .max(100),
  education: z.enum(
    ["Grade 9", "Grade 10", "collage", "university", "Graduated"],
    "Education is required"
  ),
  gender: z.enum(["Male", "Female"], "Please select a gender"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  computerSkill: z.enum(
    ["Yes", "No"],
    "Please specify if you know how to use a computer (Basic usage)"
  ),
  laptop: z.enum(
    ["Yes", "No"],
    "Please specify if you have laptop or computer available at your home"
  ),
});
