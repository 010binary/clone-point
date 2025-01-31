
export interface Transaction {
    transactionId: string;
    paymentDate: string;
    accountNumber: string;
    inputter: string;
    amount: string;
    transactionType: "Deposit" | "Withdrawal";
    glCode: string;
  }
export const tableData:Transaction[]=[
    {
      transactionId: "B02337A",
      paymentDate: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Gift Okon James",
      amount: "NGN 20,000",
      transactionType: "Deposit",
      glCode: "1002"
    },
    {
      transactionId: "B02338B",
      paymentDate: "06/11/2023 9:16 AM",
      accountNumber: "1022022831",
      inputter: "Michael Johnson",
      amount: "NGN 45,000",
      transactionType: "Withdrawal",
      glCode: "1005"
    },
    {
      transactionId: "B02339C",
      paymentDate: "06/11/2023 9:18 AM",
      accountNumber: "1022022842",
      inputter: "Adaobi Chukwu",
      amount: "NGN 12,500",
      transactionType: "Deposit",
      glCode: "1007"
    },
    {
      transactionId: "B02340D",
      paymentDate: "06/11/2023 9:20 AM",
      accountNumber: "1022022853",
      inputter: "Emeka Okafor",
      amount: "NGN 30,000",
      transactionType: "Deposit",
      glCode: "1010"
    },
    {
      transactionId: "B02341E",
      paymentDate: "06/11/2023 9:22 AM",
      accountNumber: "1022022864",
      inputter: "Sarah Adams",
      amount: "NGN 75,000",
      transactionType: "Withdrawal",
      glCode: "1013"
    },
    {
      transactionId: "B02342F",
      paymentDate: "06/11/2023 9:24 AM",
      accountNumber: "1022022875",
      inputter: "David Smith",
      amount: "NGN 50,000",
      transactionType: "Deposit",
      glCode: "1015"
    },
    {
      transactionId: "B02343G",
      paymentDate: "06/11/2023 9:26 AM",
      accountNumber: "1022022886",
      inputter: "Chinyere Nwosu",
      amount: "NGN 90,000",
      transactionType: "Deposit",
      glCode: "1020"
    },
    {
      transactionId: "B02344H",
      paymentDate: "06/11/2023 9:28 AM",
      accountNumber: "1022022897",
      inputter: "John Doe",
      amount: "NGN 15,000",
      transactionType: "Withdrawal",
      glCode: "1022"
    },
    {
      transactionId: "B02345I",
      paymentDate: "06/11/2023 9:30 AM",
      accountNumber: "1022022908",
      inputter: "Mary Johnson",
      amount: "NGN 65,000",
      transactionType: "Deposit",
      glCode: "1025"
    },
    {
      transactionId: "B02346J",
      paymentDate: "06/11/2023 9:32 AM",
      accountNumber: "1022022919",
      inputter: "Oluwaseun Ojo",
      amount: "NGN 80,000",
      transactionType: "Deposit",
      glCode: "1030"
    }
  ]
  