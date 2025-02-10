import * as Yup from 'yup';

export interface individualCustomerType {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
}

export const individualCustomerData: individualCustomerType[] = [
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    },
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    },
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    },
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    },
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    },
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    },
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    },
    {
      firstName: "Blessed",
      middleName: "Okenette",
      lastName: "Okon",
      phoneNumber: "09087654321",
    }  
];

export interface AddressType {
  address1: string;
  city: string;
  country: string;
  homePhone: string;
  lga: string;
  proofOfAddressBase64String: string;
  residentialStatus: string;
  state: string;
}

export interface CustomerDetailType {
  accountType: string;
  title: string;
  bvn: string;
  citizenship: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  levelOfEducation: string;
  middleName: string;
  mobilePhone: string;
}

export interface EmploymentType {
  cacDocumentBase64String: string;
  currentEmployer: string;
  employmentStatus: string;
  netMonthlyIncome: string;
  officeAddress: string;
  officeEmail: string;
  passportPhotographBase64String: string;
  pensionNumber: string;
  sector: string;
  taxNumber: string;
  signature: string;
}

export interface IdentificationType {
  backOfIdCardLinkBase64String: string;
  expirationDate: string;
  frontOfIdCardImageBase64String: string;
  identificationNumber: string;
  identificationType: string;
  issueDate: string;
  other: string;
}

export interface NextOfKinType {
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  relationship: string;
  title: string;
}

export interface ICInitialValuesType {
  address: AddressType;
  customerDetail: CustomerDetailType;
  customerType: string;
  employment: EmploymentType;
  identification: IdentificationType;
  nextOfKin: NextOfKinType;
}

export const ICInitialValues: ICInitialValuesType = {
  address: {
    address1: '',
    city: '',
    country: '',
    homePhone: '',
    lga: '',
    proofOfAddressBase64String: '',
    residentialStatus: '',
    state: '',
  },
  customerDetail: {
    accountType: '',
    title: '',
    bvn: '',
    citizenship: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    gender: '',
    lastName: '',
    levelOfEducation: '',
    middleName: '',
    mobilePhone: '',
  },
  customerType: 'IC',
  employment: {
    cacDocumentBase64String: '',
    currentEmployer: '',
    employmentStatus: '',
    netMonthlyIncome: '',
    officeAddress: '',
    officeEmail: '',
    passportPhotographBase64String: '',
    pensionNumber: '',
    sector: '',
    taxNumber: '',
    signature: '',
  },
  identification: {
    backOfIdCardLinkBase64String: '',
    expirationDate: '',
    frontOfIdCardImageBase64String: '',
    identificationNumber: '',
    identificationType: '',
    issueDate: '',
    other: '',
  },
  nextOfKin: {
    address: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    relationship: '',
    title: '',
  },
};


export const ICvalidationSchema = Yup.object({
  address: Yup.object({
    address1: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    homePhone: Yup.string().required('Home phone is required'),
    lga: Yup.string().required('LGA is required'),
    proofOfAddressBase64String: Yup.string().required('Proof of address is required'),
    residentialStatus: Yup.string().required('Residential status is required'),
    state: Yup.string().required('State is required'),
  }),
  customerDetail: Yup.object({
    accountType: Yup.string().required('Account type is required'),
    title: Yup.string().required('Title is required'),
    bvn: Yup.string().required('BVN is required'),
    citizenship: Yup.string().required('Citizenship is required'),
    dateOfBirth: Yup.string().required('Date of birth is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    firstName: Yup.string().required('First name is required'),
    gender: Yup.string().required('Gender is required'),
    lastName: Yup.string().required('Last name is required'),
    levelOfEducation: Yup.string().required('Level of education is required'),
    middleName: Yup.string().required('Middle name is required'),
    mobilePhone: Yup.string().required('Mobile phone is required'),
  }),
  customerType: Yup.string().required('Customer type is required'),
  employment: Yup.object({
    cacDocumentBase64String: Yup.string().required('CAC document is required'),
    currentEmployer: Yup.string().required('Current employer is required'),
    employmentStatus: Yup.string().required('Employment status is required'),
    netMonthlyIncome: Yup.string().required('Net monthly income is required'),
    officeAddress: Yup.string().required('Office address is required'),
    officeEmail: Yup.string().email('Invalid email').required('Office email is required'),
    passportPhotographBase64String: Yup.string().required('Passport photograph is required'),
    pensionNumber: Yup.string().required('Pension number is required'),
    sector: Yup.string().required('Sector is required'),
    taxNumber: Yup.string().required('Tax number is required'),
    signature: Yup.string().required('Signature is required'),
  }),
  identification: Yup.object({
    backOfIdCardLinkBase64String: Yup.string().required('Back of ID card is required'),
    expirationDate: Yup.string().required('Expiration date is required'),
    frontOfIdCardImageBase64String: Yup.string().required('Front of ID card is required'),
    identificationNumber: Yup.string().required('Identification number is required'),
    identificationType: Yup.string().required('Identification type is required'),
    issueDate: Yup.string().required('Issue date is required'),
    other: Yup.string().required('Other identification details are required'),
  }),
  nextOfKin: Yup.object({
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phone: Yup.string().required('Phone is required'),
    relationship: Yup.string().required('Relationship is required'),
    title: Yup.string().required('Title is required'),
  }),
});
