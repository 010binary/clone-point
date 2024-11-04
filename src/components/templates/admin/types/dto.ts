import { z } from "zod";
import TransactionDetailsSchema, {
  accountSchema,
} from "../schemas/add-ser-schema";

export type TellerCreation = z.infer<typeof TransactionDetailsSchema>;
export type AccountSchema = z.infer<typeof accountSchema>;
