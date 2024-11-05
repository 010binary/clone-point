export interface AccountData {
  id: string | number;
  netMonthlyIncome: number;
  status: string; // adjust based on possible statuses
  orgKey: string;
  accountNumber: string;
  customer: Customer;
  accountOwner: string; // adjust as needed
  accountType: string; // adjust based on account types
  pndStatus: string;
  notes: string | null;
  signatories: Signatory[];
  accountBalance: number;
  mandate: string | null;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface Customer {
  id: number;
  customerType: string; // adjust based on types
  orgKey: string;
  customerDetail: CustomerDetail;
  identification: Identification;
  address: Address;
  nextOfKin: NextOfKin;
  employment: Employment;
  directorIds: number[] | null;
  customerCode: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface CustomerDetail {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  businessName: string | null;
  mobilePhone: string;
  accountType: string; // adjust as needed
  gender: string;
  email: string;
  citizenship: string;
  levelOfEducation: string; // adjust as needed
  dateOfBirth: string; // ISO date string
  registrationYear: string | null;
  numberOfEmployees: number;
  businessType: string | null;
  notes: string | null;
  bvn: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface Identification {
  id: number;
  identificationType: string; // adjust as needed
  other: string;
  identificationNumber: string;
  issueDate: string; // ISO date string
  expirationDate: string; // ISO date string
  frontOfIdCardImageBase64String: string; // image URL or base64 string
  backOfIdCardLinkBase64String: string; // image URL or base64 string
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface Address {
  id: number;
  address1: string;
  residentialStatus: string; // adjust as needed
  state: string;
  city: string;
  lga: string;
  country: string;
  officePhone: string | null;
  email: string | null;
  proofOfAddressBase64String: string; // image URL or base64 string
  homePhone: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface NextOfKin {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  relationship: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface Employment {
  id: number;
  employmentStatus: string;
  netMonthlyIncome: number;
  currentEmployer: string;
  sector: string;
  officeEmail: string;
  taxNumber: string;
  pensionNumber: string;
  officeAddress: string;
  cacDocumentBase64String: string; // image URL or base64 string
  passportPhotographBase64String: string; // image URL or base64 string
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface Signatory {
  id: number;
  customerType: string;
  orgKey: string;
  customerDetail: CustomerDetail;
  identification: Identification;
  address: Address;
  nextOfKin: NextOfKin;
  employment: Employment;
  directorIds: number[] | null;
  customerCode: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}
