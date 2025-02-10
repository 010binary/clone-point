"use client";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { ImageInputCard } from "@/components/ui/Inputs/ImageInputOutline";
import { useMutation } from "@tanstack/react-query";
import { createICAccounts } from "../../../../services";
import { APICall } from "@/utils/apicall";
import { ICInitialValuesType } from "@/app/customer-management/individual/_components/data";

const FormFour =  <T,>({ formik, changePage }: ChildComponentProps<T>) => {
  const { data, mutate } = useMutation({
    mutationFn: async (formData:ICInitialValuesType) => {
      const response = await APICall(createICAccounts, formData , true);
      return response;
    },
  })
console.log(data)

  const handleSumit=()=>{
    // mutate(
    //   {
    //     "address": {
    //         "address1": "Lagos",
    //         "city": "Lagos",
    //         "country": "Lagos",
    //         "homePhone": "07030490674",
    //         "lga": "Ejigbo",
    //         "proofOfAddressBase64String": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/CH8QAAAAABJRU5ErkJggg==",
    //         "residentialStatus": "Provided_by_Employer",
    //         "state": "string"
    //     },
    //     "customerDetail": {
    //         "accountType": "SAVINGs",
    //         "title": "Mr",
    //         "bvn": "string",
    //         "citizenship": "nigeria",
    //         "dateOfBirth": "06-12-2020",
    //         "email": "643@gmail.com",
    //         "firstName": "Damilare",
    //         "gender": "MALe",
    //         "lastName": "jeffstone",
    //         "levelOfEducation": "BSC",
    //         "middleName": "Stephen",
    //         "mobilePhone": "07030490674",
    //         // 'maritalStatus':'single'
    //     },
    //     "customerType": "IC",
    //     "employment": {
    //         "cacDocumentBase64String": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/CH8QAAAAABJRU5ErkJggg==",
    //         "currentEmployer": "string",
    //         "employmentStatus": "Employed",
    //         "netMonthlyIncome": '90',
    //         "officeAddress": "string",
    //         "officeEmail": "string",
    //         "passportPhotographBase64String": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/CH8QAAAAABJRU5ErkJggg==",
    //         "pensionNumber": "string",
    //         "sector": "Banking",
    //         "taxNumber": "string",
    //         "signature": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/CH8QAAAAABJRU5ErkJggg=="
    //     },
    //     "identification": {
    //         "backOfIdCardLinkBase64String": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/CH8QAAAAABJRU5ErkJggg==",
    //         "expirationDate": "12-12-2004",
    //         "frontOfIdCardImageBase64String": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/CH8QAAAAABJRU5ErkJggg==",
    //         "identificationNumber": "string",
    //         "identificationType": "International_Passport",
    //         "issueDate": "01-12-2003",
    //         "other": "fd"
    //     },
    //     "nextOfKin": {
    //         "address": "dsfd",
    //         "email": "string",
    //         "firstName": "string",
    //         "lastName": "string",
    //         "phone": "string",
    //         "relationship": "BROTHER",
    //         "title": "mR"
    //     }
    // }
    // )
    console.log('data')
    formik.submitForm()
  }
  
  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Employment Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[85%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Employment Status</label>
                <select onChange={formik.handleChange} name="employment.employmentStatus" id="" className="formInput">
                  <option value="Employed">Employed</option>
                  <option value="Self Employed">Self Employed</option>
                </select>
              </div>
            </div>
            {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Net Monthly Income</label>
                <input name='employment.netMonthlyIncome' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Current Employer</label>
                <input name='employment.currentEmployer' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Sector</label>
                <select name="employment.sector" onChange={formik.handleChange} id="" className="formInput">
                  <option value="Banking">Banking</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Health">Health</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Government">Government Agency</option>
                  <option value="Oil">Oil and Gas</option>
                </select>
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Email</label>
                <input name='employment.officeEmail' type="email" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Tax Number</label>
                <input name='employment.taxNumber' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Pension Number</label>
                <input name='employment.pensionNumber' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
             {/* //// */}
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Office Address</label>
                <input name='employment.officeAddress' type="text" onChange={formik.handleChange} className="formInput" />
              </div>
            </div>
               {/* //// */}
            <ImageInputCard
              formik={formik}
              name="employment.cacDocumentBase64String"
              title="Upload CAC Document (For business owner)"
            />
               {/* //// */}
               <ImageInputCard
              formik={formik}
              name="employment.passportPhotographBase64String"
              title="Upload Passport Photograph"
            />
               {/* //// */}
               <ImageInputCard
              formik={formik}
              name="employment.signature"
              title="Upload Signature"
            />
          </div>
          <button className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg" type="button" onClick={handleSumit}>
            Save
          </button>
          <button
            onClick={()=>changePage(3)}
            className="border-pryColor border hover:scale-[0.98] transition-all ease-linear text-pryColor py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default FormFour;
