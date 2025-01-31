export interface interestRateType {
  transactionId: string;
  startDate: string;
  endDate: string;
  accountNumber: string;
  rate: string;
  amount: string;
  type: "Credit" | "Debit";
}

export const interestRateData: interestRateType[] = [
  {
    transactionId: "B02337A",
    startDate: "06/11/2023",
    endDate: "06/12/2023",
    accountNumber: "1022022820",
    rate: "5%",
    amount: "NGN 20,000",
    type: "Credit",
  },
  {
    transactionId: "B02338B",
    startDate: "06/11/2023",
    endDate: "06/13/2023",
    accountNumber: "1022022831",
    rate: "4.5%",
    amount: "NGN 25,500",
    type: "Debit",
  },
  {
    transactionId: "B02339C",
    startDate: "06/11/2023",
    endDate: "06/14/2023",
    accountNumber: "1022022842",
    rate: "6%",
    amount: "NGN 18,700",
    type: "Credit",
  },
  {
    transactionId: "B02340D",
    startDate: "06/11/2023",
    endDate: "06/15/2023",
    accountNumber: "1022022853",
    rate: "5.2%",
    amount: "NGN 30,000",
    type: "Credit",
  },
  {
    transactionId: "B02341E",
    startDate: "06/11/2023",
    endDate: "06/16/2023",
    accountNumber: "1022022864",
    rate: "4.8%",
    amount: "NGN 15,200",
    type: "Debit",
  }
];
