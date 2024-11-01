import { z } from "zod";

const TransactionDetailsSchema = z.object({
  accountNumber: z.string(), // Must be a string
  amount: z.number(), // Must be a number
  rate: z.number(), // Must be a string
  startDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: "Date must be in 'dd/MM/yyyy' format",
  }), // Must be a string in "dd/MM/yyyy" format
  endDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: "Date must be in 'dd/MM/yyyy' format",
  }),
  transactionId: z.string(), // Must be a string
  type: z.string(), // Must be a string
});

// Exporting for reuse in validation or data parsing
export default TransactionDetailsSchema;
