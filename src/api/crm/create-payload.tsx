/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomerPayload } from "../types";
const customerType = localStorage.getItem("customer_type");

console.log(customerType);
const transformFormDataToApiPayload = (formData: any): CustomerPayload => {
  return {
    address: {
      address1: formData["Address 1"],
      city: formData.City,
      country: formData.Country,
      homePhone: formData.HomePhone,
      lga: formData.lga,
      proofOfAddressBase64String: formData.utilityBill,
      residentialStatus: formData.ResidentialStatus,
      state: formData.State,
    },
    customerDetail: {
      accountType: formData.AcountType,
      businessName: formData.currentEmployee,
      bvn: formData.bvn,
      citizenship: formData.citizenShip,
      dateOfBirth: formData.dob,
      email: formData.email,
      firstName: formData.firstName,
      gender: formData.Gender,
      lastName: formData.lastName,
      levelOfEducation: formData.education,
      middleName: formData.middleName,
      mobilePhone: formData.phone,
    },
    customerType: formData.customerType, // Assuming this is the customer type
    employment: {
      cacDocumentBase64String: formData.cacDocument,
      currentEmployer: formData.currentEmployee,
      employmentStatus: formData.EmploymentStatus,
      netMonthlyIncome: parseFloat(formData.netmonthlyincome),
      officeAddress: formData.OfficeAddress,
      officeEmail: formData.officeEmail,
      passportPhotographBase64String: formData.passport,
      pensionNumber: formData.PensionNumber,
      sector: formData.workSector,
      taxNumber: formData.TaxNumber,
    },
    identification: {
      backOfIdCardLinkBase64String: formData.backImage,
      expirationDate: formData.ExpirationDate,
      frontOfIdCardImageBase64String: formData.frontImage,
      identificationNumber: formData.identificationNumber,
      identificationType: formData.indentification,
      issueDate: formData.issueDate,
      other: formData.others,
    },
    nextOfKin: {
      address: formData.nextofkinaddress,
      email: formData.nextofkinemail,
      firstName: formData.nextofkinfirstname,
      lastName: formData.nextofkinlastname,
      phone: formData.nextofkinphonenumber,
      relationship: formData.nextofkinrelationship, // Assuming marital status is used as a relationship
      title: formData.nextofkintitle,
    },
  };
};

export default transformFormDataToApiPayload;
