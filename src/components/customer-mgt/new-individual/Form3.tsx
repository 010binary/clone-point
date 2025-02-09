"use client";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import { countries } from "@/lib/customer-management/countries";
import React from "react";

const FormThree =  <T,>({ formik, changePage }: ChildComponentProps<T>) => {

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
                <label className="formLabel">Address 1</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Residential Status</label>
                <select name="" id="" className="formInput">
                  <option value="Rented">Rented</option>
                  <option value="Owed">Owned</option>
                  <option value="Living">Living with Family</option>
                  <option value="provided">Provided by Employer</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">State</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">City</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">LGA</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Country</label>
                <select name="" id="" className="formInput">
                  <option value="">select</option>
                  {countries?.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Home phone</label>
                <input type="number" className="formInput spin-button-none" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Email</label>
                <input type="email" className="formInput" />
              </div>
            </div>
            {/* upload */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-[#404B7C]">
                Upload Proof of Address{" "}
                <span className="font-light text-[#404B7C99]">
                  (Utility bill)
                </span>
              </p>
              <div className="flex items-center gap-3">
                <div className="border border-dashed rounded-lg border-pryColor">
                  <div className="py-5 px-3 flex flex-col gap-1">
                    <p className="text-xs md:text-sm text-pryColor">
                      Drag or click to upload file
                    </p>
                    <p className="text-xs text-[#575757]">
                      Supported formats: JPEG, JPG or PNG
                    </p>
                  </div>
                </div>
                <button className="bg-[#6699FF] py-1.5 px-4 text-white text-xs md:text-sm">
                  Upload
                </button>
              </div>
              <div className="flex flex-col gap-4 pt-2">
                {/* next of kin */}
                <p className="font-semibold lg:text-lg">Next of Kin</p>
                <div className="flex flex-col gap-3">
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Title</label>
                      <select name="" id="" className="formInput">
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">First Name</label>
                      <input type="text" className="formInput" />
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Last Name</label>
                      <input type="text" className="formInput" />
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Address</label>
                      <input type="text" className="formInput" />
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Phone</label>
                      <input
                        type="number"
                        className="formInput spin-button-none"
                      />
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Email</label>
                      <input type="email" className="formInput" />
                    </div>
                  </div>
                  <div className="container">
                    <div className="innerContainer">
                      <label className="formLabel">Relationship</label>
                      <select name="" id="" className="formInput">
                        <option value="">Select one</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Sister">Sister</option>
                        <option value="Brother">Brother</option>
                        <option value="Uncle">Uncle</option>
                        <option value="Aunt">Aunt</option>
                        <option value="Child">Child</option>
                      </select>
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
