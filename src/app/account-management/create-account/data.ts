import * as Yup from "yup";

export type CustomerSignatory = {
    id: number;
  };
  
  export type AccountDetailsType = {
    accountNumber: string;
    accountOwner: string;
    accountType: string;
    customerId: number;
    mandateBase64String: string;
    customerSignatories: CustomerSignatory[];
    netMonthlyIncome: number;
    notes: string;
    pndStatus: string;
    status: string;
  };

  
  export const AccountDetailsinitialValues: AccountDetailsType = {
    accountNumber: "",
    accountOwner: "Customer_Account",
    accountType: "Fixed_Deposit",
    customerId: 1,
    mandateBase64String: "",
    customerSignatories: [],
    netMonthlyIncome: 1,
    notes: "",
    pndStatus: "Yes",
    status: "Active",
  };


export const AccountDetailsValidationSchema = Yup.object({
  accountNumber: Yup.string()
    // .matches(/^\d{10}$/, "Account number must be 10 digits")
    .required("Account number is required"),
  
  accountOwner: Yup.string()
    // .oneOf(["Customer_Account"], "Invalid account owner")
    .required("Account owner is required"),
  
  accountType: Yup.string()
    // .oneOf(["Fixed_Deposit", "Savings", "Current"], "Invalid account type")
    .required("Account type is required"),
  
  customerId: Yup.number()
    // .min(1, "Customer ID must be greater than 0")
    .required("Customer ID is required"),
  
  mandateBase64String: Yup.string()
    .required("Mandate is required"),
    // .matches(/^data:image\/(png|jpeg|jpg);base64,/, "Invalid base64 image format"),
  
  customerSignatories: Yup.array()
    .of(Yup.object().shape({
      id: Yup.number().min(0, "Signatory ID must be greater than 0").required("Signatory ID is required"),
    }))
    // .min(1, "At least one signatory is required")
    // .required("Signatories are required")
    ,
  
  netMonthlyIncome: Yup.number()
    .min(0, "Net monthly income must be a positive number")
    .required("Net monthly income is required"),
  
  notes: Yup.string().optional(),
  
  pndStatus: Yup.string()
    .oneOf(["Yes", "No"], "Invalid PND status")
    .required("PND status is required"),
  
  status: Yup.string()
    .oneOf(["Active", "Inactive"], "Invalid status")
    .required("Status is required"),
});
