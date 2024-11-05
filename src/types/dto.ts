import { z } from "zod";
import { accountSchema } from "../schemas/add-ser-schema";
import { interestSchema } from "../schemas/interest/create-interest-schema";

export type NewInterestCreation = z.infer<typeof interestSchema>;
export type AccountSchema = z.infer<typeof accountSchema>;
