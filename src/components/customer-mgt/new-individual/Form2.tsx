"use client";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";
import React from "react";
import { ImageInputCard } from "@/components/ui/Inputs/ImageInputOutline";
import { formatDateDDMMYYYY } from "@/utility";
import { ICInitialValuesType } from "@/app/customer-management/individual/_components/data";

const FormTwo = ({ formik, changePage }: ChildComponentProps<ICInitialValuesType>) => {
  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changePage(3);
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
                <select
                  name="identification.identificationType"
                  value={formik.values.identification?.identificationType || ""}
                  onChange={formik.handleChange}
                  className="formInput"
                >
                  <option value="">Select</option>
                  <option value="nationalId">National ID</option>
                  <option value="intlPassport">International Passport</option>
                  <option value="votersCard">Voters Card</option>
                </select>
                {formik.touched.identification?.identificationType && formik.errors.identification?.identificationType && (
                  <div className="text-red-500 text-xs">{formik.errors.identification.identificationType}</div>
                )}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Other (Specify)</label>
                <input
                  type="text"
                  name="identification.other"
                  value={formik.values.identification?.other || ""}
                  onChange={formik.handleChange}
                  className="formInput"
                />
                {formik.touched.identification?.other && formik.errors.identification?.other && (
                  <div className="text-red-500 text-xs">{formik.errors.identification.other}</div>
                )}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Identification Number</label>
                <input
                  type="text"
                  name="identification.identificationNumber"
                  value={formik.values.identification?.identificationNumber || ""}
                  onChange={formik.handleChange}
                  className="formInput"
                />
                {formik.touched.identification?.identificationNumber && formik.errors.identification?.identificationNumber && (
                  <div className="text-red-500 text-xs">{formik.errors.identification.identificationNumber}</div>
                )}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Issue Date</label>
                <input
                  type="date"
                  name="identification.issueDate"
                  value={formik.values.identification?.issueDate || ""}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "identification.issueDate",
                      formatDateDDMMYYYY(e.target.value)
                    )
                  }
                  className="formInput"
                />
                {formik.touched.identification?.issueDate && formik.errors.identification?.issueDate && (
                  <div className="text-red-500 text-xs">{formik.errors.identification.issueDate}</div>
                )}
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Expiration Date</label>
                <input
                  type="date"
                  name="identification.expirationDate"
                  value={formik.values.identification?.expirationDate || ""}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "identification.expirationDate",
                      formatDateDDMMYYYY(e.target.value)
                    )
                  }
                  className="formInput"
                />
                {formik.touched.identification?.expirationDate && formik.errors.identification?.expirationDate && (
                  <div className="text-red-500 text-xs">{formik.errors.identification.expirationDate}</div>
                )}
              </div>
            </div>

            <ImageInputCard
              formik={formik}
              name="identification.frontOfIdCardImageBase64String"
              title="Upload Front Copy of The ID card"
            />
            {formik.touched.identification?.frontOfIdCardImageBase64String && formik.errors.identification?.frontOfIdCardImageBase64String && (
              <div className="text-red-500 text-xs">{formik.errors.identification.frontOfIdCardImageBase64String}</div>
            )}
            <ImageInputCard
              formik={formik}
              name="identification.backOfIdCardLinkBase64String"
              title="Upload Back Copy of The ID card"
            />
            {formik.touched.identification?.backOfIdCardLinkBase64String && formik.errors.identification?.backOfIdCardLinkBase64String && (
              <div className="text-red-500 text-xs">{formik.errors.identification.backOfIdCardLinkBase64String}</div>
            )}
          </div>
          <button
            onClick={handleForm}
            className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Next
          </button>
          <button
            onClick={() => changePage(1)}
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
