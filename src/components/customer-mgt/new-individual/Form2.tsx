"use client";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import React from "react";
import { ImageInputCard } from "@/components/ui/Inputs/ImageInputOutline";


const FormTwo =  <T,>({ formik, changePage }: ChildComponentProps<T>) => {
  
  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(3)
  };


  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Identification</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[85%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Identification</label>
                <select name="identification.identificationType" id="" onChange={formik.handleChange} className="formInput">
                  <option value="nationalId">National ID</option>
                  <option value="intlPassport">International Passport</option>
                  <option value="votersCard">Voters Card</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Other (Specify)</label>
                <input type="text" name="identification.other" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Identification Number</label>
                <input type="text" name="identification.identificationNumber" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Issue Date</label>
                <input type="text" name="identification.issueDate" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Expiration Date</label>
                <input type="text" name="identification.expirationDate" className="formInput" />
              </div>
            </div>

            <ImageInputCard
            formik={formik}
            name="identification.frontOfIdCardImageBase64String"
            title="Upload Front Copy of The ID card"
            />
            <ImageInputCard
            formik={formik}
            name="identification.backOfIdCardImageBase64String"
            title="Upload Back Copy of The ID card"
            />
          </div>
          <button
            onClick={handleForm}
            className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Next
          </button>
          <button
            onClick={()=>changePage(1)}
            className="border-pryColor border hover:scale-[0.98] transition-all ease-linear text-pryColor py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};




export default FormTwo;
