const { z } = require("zod");

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10,14}$/, "Phone number must be between 10 to 14 digits"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .nonempty("Message is required"),
});
