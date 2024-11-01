import { z } from "zod";
import TransactionDetailsSchema from "../schemas/add-ser-schema";

export type TellerCreation = z.infer<typeof TransactionDetailsSchema>;
