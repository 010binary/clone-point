export interface individualCustomerType {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
}

import * as Yup from 'yup';

export type Address = {
  address1: string;
  city: string;
  country: string;
  email: string;
  homePhone: string;
  lga: string;
  officePhone: string;
  proofOfAddressBase64String: string;
  residentialStatus: string;
  state: string;
};

export type CustomerDetail = {
  accountType: string;
  businessName: string;
  businessType: string;
  bvn: string;
  citizenship: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  levelOfEducation: string;
  maritalStatus: string;
  middleName: string;
  mobilePhone: string;
  notes: string;
  numberOfEmployees: number;
  registrationYear: string;
  title: string;
};

export type CCFormTypes = {
  address: Address;
  customerDetail: CustomerDetail;
  directorsIds: number[];
};


export const CCinitialValues:CCFormTypes = {
  address: {
    address1: "",
    city: "",
    country: "",
    email: "",
    homePhone: "",
    lga: "",
    officePhone: "",
    proofOfAddressBase64String: "",
    residentialStatus: "",
    state: "",
  },
  customerDetail: {
    accountType: "Current",
    businessName: "",
    businessType: "",
    bvn: "",
    citizenship: "Nigeria",
    dateOfBirth: "",
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    levelOfEducation: "",
    maritalStatus: "",
    middleName: "",
    mobilePhone: "",
    notes: "",
    numberOfEmployees: 0,
    registrationYear: "",
    title: "",
  },
  directorsIds: [0],
};



export const CCvalidationSchema = Yup.object({
  address: Yup.object().shape({
    address1: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    homePhone: Yup.string()
      .matches(/^\d+$/, "Phone number must contain only numbers")
      .required("Home phone is required"),
    lga: Yup.string().required("LGA is required"),
    officePhone: Yup.string()
      .matches(/^\d+$/, "Phone number must contain only numbers")
      .required("Office phone is required"),
    proofOfAddressBase64String: Yup.string().required(
      "Proof of address is required"
    ),
    residentialStatus: Yup.string().required("Residential status is required"),
    state: Yup.string().required("State is required"),
  }),

  customerDetail: Yup.object().shape({
    accountType: Yup.string().required("Account type is required"),
    businessName: Yup.string().required("Business name is required"),
    businessType: Yup.string().required("Business type is required"),
    bvn: Yup.string()
      .matches(/^\d{11}$/, "BVN must be 11 digits")
      .required("BVN is required"),
    citizenship: Yup.string().required("Citizenship is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    gender: Yup.string().oneOf(["Male", "Female"], "Invalid gender"),
    lastName: Yup.string().required("Last name is required"),
    levelOfEducation: Yup.string().required("Level of education is required"),
    maritalStatus: Yup.string().required("Marital status is required"),
    middleName: Yup.string(),
    mobilePhone: Yup.string()
      .matches(/^\d+$/, "Mobile phone must contain only numbers")
      .required("Mobile phone is required"),
    notes: Yup.string(),
    numberOfEmployees: Yup.number()
      .min(1, "Must have at least 1 employee")
      .required("Number of employees is required"),
    registrationYear: Yup.string().required("Registration year is required"),
    title: Yup.string().required("Title is required"),
  }),

  directorsIds: Yup.array()
    .of(Yup.number().min(1, "Director ID must be a valid number"))
    .required("At least one director ID is required"),
});


