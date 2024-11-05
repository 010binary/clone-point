import { z } from "zod";

export const interestSchema = z.object({
  accountId: z.string(),
  description: z.string().min(1, "Description cannot be empty"),
  interestRate: z.number().min(0, "Interest rate cannot be negative"),
  maximumTenure: z
    .number()
    .int()
    .positive("Maximum tenure must be a positive integer"),
  minimumTenure: z
    .number()
    .int()
    .positive("Minimum tenure must be a positive integer"),
  name: z.string().min(1, "Name cannot be empty"),
});
