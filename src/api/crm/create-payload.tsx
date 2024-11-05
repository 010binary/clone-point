import { z } from "zod";

// Address schema with up-to-date validations
const addressSchema = z.object({
  address1: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email address"),
  homePhone: z.string().min(1, "Home phone is required"),
  lga: z.string().min(1, "LGA is required"),
  // officePhone: z.string().min(1, "Office phone is required"),
  proofOfAddressBase64String: z.string().min(1, "Proof of address is required"),
  residentialStatus: z.string().min(1, "Residential status is required"),
  state: z.string().min(1, "State is required"),
});

// Customer detail schema
const customerDetailSchema = z.object({
  title: z.string().min(1, "Title is required"),
  accountType: z.string().min(1, "Account type is required"),
  // businessName: z.string().min(1, "Business name is required"),
  // businessType: z.string().min(1, "Business type is required"),
  bvn: z.string().min(1, "BVN is required"),
  citizenship: z.string().min(1, "Citizenship is required"),
  dateOfBirth: z.string().min(1, "dob is required"),

  // // email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First name is required"),
  gender: z.string().min(1, "Gender is required"),
  lastName: z.string().min(1, "Last name is required"),
  levelOfEducation: z.string().min(1, "Level of education is required"),
  maritalStatus: z.string().min(1, "Marital status is required"),
  middleName: z.string().optional(),
  mobilePhone: z.string().min(1, "Mobile phone is required"),
  // notes: z.string().optional(),
  // numberOfEmployees: z.number().nonnegative(),
  // registrationYear: z
  //   .string()
  //   .regex(/^\d{2}-\d{2}-\d{4}$/, "Date format should be dd-MM-yyyy"),
});

// Employment schema
const employmentSchema = z.object({
  cacDocumentBase64String: z.string().min(1, "CAC document is required"),
  signDocumentBase64String: z.string().min(1, "CAC document is required"),
  state: z.string().min(1, "state is required"),
  currentEmployer: z.string().min(1, "Current employer is required"),
  employmentStatus: z.string().min(1, "Employment status is required"),
  netMonthlyIncome: z.number().nonnegative(),
  officeAddress: z.string().min(1, "Office address is required"),
  officeEmail: z.string().email("Invalid office email address"),
  passportPhotographBase64String: z
    .string()
    .min(1, "Passport photograph is required"),
  pensionNumber: z.string().min(1, "Pension number is required"),
  sector: z.string().min(1, "Sector is required"),
  taxNumber: z.string().min(1, "Tax number is required"),
});

// Identification schema
const identificationSchema = z.object({
  backOfIdCardLinkBase64String: z
    .string()
    .min(1, "Back of ID card is required"),
  expirationDate: z.string().min(1, "expiration is required"),
  frontOfIdCardImageBase64String: z
    .string()
    .min(1, "Front of ID card is required"),
  identificationNumber: z.string().min(1, "Identification number is required"),
  identificationType: z.string().min(1, "Identification type is required"),
  issueDate: z.string().min(1, "issue is required"),
  other: z.string().optional(),
});

// Next of kin schema
const nextOfKinSchema = z.object({
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone number is required"),
  relationship: z.string().min(1, "Relationship is required"),
  title: z.string().min(1, "Title is required"),
});

// Complete payload schema
const payloadSchema = z.object({
  address: addressSchema,
  customerDetail: customerDetailSchema,
  employment: employmentSchema,
  identification: identificationSchema,
  nextOfKin: nextOfKinSchema,
});

export { payloadSchema };
