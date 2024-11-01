/* eslint-disable @typescript-eslint/no-explicit-any */
interface Address {
  address1: string;
  city: string;
  country: string;
  homePhone: string;
  lga: string;
  proofOfAddressBase64String: string;
  residentialStatus: "Provided_by_Employer" | string; // Enum or specific string values if applicable
  state: string;
}

interface CustomerDetail {
  accountType: "Current" | "Savings" | string;
  businessName: string;
  bvn: string;
  citizenship: string;
  dateOfBirth: string; // Format: dd-MM-yyyy
  email: string;
  firstName: string;
  gender: "Male" | "Female" | string;
  lastName: string;
  levelOfEducation: "SSCE" | "BSc" | string;
  middleName: string;
  mobilePhone: string;
}

interface Employment {
  cacDocumentBase64String: string;
  currentEmployer: string;
  employmentStatus: "Employed" | "Unemployed" | string;
  netMonthlyIncome: number;
  officeAddress: string;
  officeEmail: string;
  passportPhotographBase64String: string;
  pensionNumber: string;
  sector: "Banking" | "Education" | string;
  taxNumber: string;
}

interface Identification {
  backOfIdCardLinkBase64String: string;
  expirationDate: string; // Format: dd-MM-yyyy
  frontOfIdCardImageBase64String: string;
  identificationNumber: string;
  identificationType: "National_Id" | "Passport" | string;
  issueDate: string; // Format: dd-MM-yyyy
  other: string;
}

interface NextOfKin {
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  relationship: string;
  title: "Mr" | "Mrs" | "Miss" | string;
}

export interface CustomerPayload {
  address: Address;
  customerDetail: CustomerDetail;
  customerType: string;
  employment: Employment;
  identification: Identification;
  nextOfKin: NextOfKin;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  statusCode: string;
  data?: any; // Adjust this based on actual data structure
}
