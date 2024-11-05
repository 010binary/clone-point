interface Identification {
  id: number;
  identificationType: string;
  other: string;
  identificationNumber: string;
  issueDate: string;
  expirationDate: string;
  frontOfIdCardImageBase64String: string;
  backOfIdCardLinkBase64String: string;
  created_at: string;
  updated_at: string;
}

interface CustomerDetail {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  businessName: string | null;
  mobilePhone: string;
  accountType: string;
  gender: string;
  email: string;
  citizenship: string;
  levelOfEducation: string;
  dateOfBirth: string;
  registrationYear: string | null;
  numberOfEmployees: number;
  businessType: string | null;
  notes: string | null;
  bvn: string;
  created_at: string;
  updated_at: string;
}

interface Address {
  id: number;
  address1: string;
  residentialStatus: string;
  state: string;
  city: string;
  lga: string;
  country: string;
  officePhone: string | null;
  email: string | null;
  proofOfAddressBase64String: string;
  homePhone: string;
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
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
  cacDocumentBase64String: string;
  passportPhotographBase64String: string;
  created_at: string;
  updated_at: string;
}

interface Customer {
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
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
}

interface Account {
  id: number;
  netMonthlyIncome: number;
  status: string;
  orgKey: string;
  accountNumber: string;
  customer: Customer;
  accountOwner: string;
  accountType: string;
  pndStatus: string;
  notes: string;
  signatories: Signatory[];
  accountBalance: number;
  mandate: string | null;
  created_at: string;
  updated_at: string;
}

export interface MainEntity {
  id: number;
  name: string;
  description: string;
  minimumTenure: number;
  maximumTenure: number;
  interestRate: number;
  orgId: string;
  account: Account;
  created_at: string;
  updated_at: string;
}
