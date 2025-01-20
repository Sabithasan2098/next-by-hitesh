import { z } from "zod";

export const userValidation = z.object({
  userName: z
    .string()
    .min(2, "User name must be at least 2 characters")
    .max(20, "User name must be no more than 20 characters")
    .regex(/[^a-zA-Z0-9\s]/g, "User name must not contain special characters"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
