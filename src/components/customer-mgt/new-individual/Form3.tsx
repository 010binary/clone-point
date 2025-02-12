"use client";
import { ICInitialValuesType } from "@/app/customer-management/individual/_components/data";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { ImageInputCard } from "@/components/ui/Inputs/ImageInputOutline";
import { countries } from "@/lib/customer-management/countries";
import React from "react";

const FormThree = ({ formik, changePage }: ChildComponentProps<ICInitialValuesType>) => {

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(4)
  };

  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Address Details</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[85%]">

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Address</label>
                <input type="text" onChange={formik.handleChange} name='address.address1' value={formik.values.address.address1} className="formInput" />
                {formik.errors.address?.address1 && <div className="text-red-500">{formik.errors.address.address1}</div>}
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Residential Status</label>
                <select name="address.residentialStatus" onChange={formik.handleChange} value={formik.values.address.residentialStatus} id="" className="formInput">
                  <option value="">Select</option>
                  <option value="Rented">Rented</option>
                  <option value="Owed">Owned</option>
                  <option value="Living">Living with Family</option>
                  <option value="provided">Provided by Employer</option>
                </select>
                {formik.errors.address?.residentialStatus && <div className="text-red-500">{formik.errors.address.residentialStatus}</div>}
              </div>
            </div>

            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">State</label>
                <input type="text" onChange={formik.handleChange} name='address.state' value={formik.values.address.state} className="formInput" />
                {formik.errors.address?.state && <div className="text-red-500">{formik.errors.address.state}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">City</label>
                <input type="text" onChange={formik.handleChange} name='address.city' value={formik.values.address.city} className="formInput" />
                {formik.errors.address?.city && <div className="text-red-500">{formik.errors.address.city}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">LGA</label>
                <input type="text" onChange={formik.handleChange} name='address.lga' value={formik.values.address.lga} className="formInput" />
                {formik.errors.address?.lga && <div className="text-red-500">{formik.errors.address.lga}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Country</label>
                <select name="address.country" onChange={formik.handleChange} value={formik.values.address.country} id="" className="formInput">
                  <option value="">Select</option>
                  {countries?.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {formik.errors.address?.country && <div className="text-red-500">{formik.errors.address.country}</div>}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel" >Home phone</label>
                <input type="number" onChange={formik.handleChange} name="address.homePhone" value={formik.values.address.homePhone} className="formInput spin-button-none" />
                {formik.errors.address?.homePhone && <div className="text-red-500">{formik.errors.address.homePhone}</div>}
              </div>
            </div>
           
             <div className="flex flex-col gap-2">
              <ImageInputCard
                formik={formik}
                name="address.proofOfAddressBase64String"
                title="Upload Proof of Address (Utility bill)"
              />
              {formik.errors.address?.proofOfAddressBase64String && <div className="text-red-500">{formik.errors.address.proofOfAddressBase64String}</div>}
              <div className="flex flex-col gap-4 pt-2"> 
                <p className="font-semibold lg:text-lg">Next of Kin</p>
                <div className="flex flex-col gap-3">
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Title</label>
                      <select name="nextOfKin.title" onChange={formik.handleChange} value={formik.values.nextOfKin.title} id="" className="formInput">
                        <option value="">Select</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                      {formik.errors.nextOfKin?.title && <div className="text-red-500">{formik.errors.nextOfKin.title}</div>}
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">First Name</label>
                      <input type="text" name='nextOfKin.firstName' onChange={formik.handleChange} value={formik.values.nextOfKin.firstName} className="formInput" />
                      {formik.errors.nextOfKin?.firstName && <div className="text-red-500">{formik.errors.nextOfKin.firstName}</div>}
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Last Name</label>
                      <input type="text" name='nextOfKin.lastName' onChange={formik.handleChange} value={formik.values.nextOfKin.lastName} className="formInput" />
                      {formik.errors.nextOfKin?.lastName && <div className="text-red-500">{formik.errors.nextOfKin.lastName}</div>}
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Address</label>
                      <input type="text" name="nextOfKin.address" onChange={formik.handleChange} value={formik.values.nextOfKin.address} className="formInput" />
                      {formik.errors.nextOfKin?.address && <div className="text-red-500">{formik.errors.nextOfKin.address}</div>}
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Phone</label>
                      <input
                        type="number"
                        className="formInput spin-button-none"
                        onChange={formik.handleChange}
                        name="nextOfKin.phone"
                        value={formik.values.nextOfKin.phone}
                      />
                      {formik.errors.nextOfKin?.phone && <div className="text-red-500">{formik.errors.nextOfKin.phone}</div>}
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Email</label>
                      <input type="email"
                       onChange={formik.handleChange}
                        name="nextOfKin.email"
                        value={formik.values.nextOfKin.email}
                      className="formInput" />
                      {formik.errors.nextOfKin?.email && <div className="text-red-500">{formik.errors.nextOfKin.email}</div>}
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Relationship</label>
                      <select id=""
                       onChange={formik.handleChange}
                        name="nextOfKin.relationship"
                        value={formik.values.nextOfKin.relationship}
                      className="formInput">
                        <option value="">Select</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Sister">Sister</option>
                        <option value="Brother">Brother</option>
                        <option value="Uncle">Uncle</option>
                        <option value="Aunt">Aunt</option>
                        <option value="Child">Child</option>
                      </select>
                      {formik.errors.nextOfKin?.relationship && <div className="text-red-500">{formik.errors.nextOfKin.relationship}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <button
            onClick={handleForm}
            className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Next
          </button>
          <button
            onClick={()=>changePage(2)}
            className="border-pryColor border hover:scale-[0.98] transition-all ease-linear text-pryColor py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default FormThree;
