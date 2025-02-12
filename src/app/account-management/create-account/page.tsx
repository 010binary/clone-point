"use client";
import { APICall } from "@/utils/apicall";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { createAccount } from "../../../../services";
import { AccountDetailsinitialValues, AccountDetailsType, AccountDetailsValidationSchema } from "./data";
import { ImageInputCard } from "@/components/ui/Inputs/ImageInputOutline";

const CreateAccount = () => {
  const [changeTab, setChangeTab] = useState("signatory");
  const formik = useFormik({
    initialValues: AccountDetailsinitialValues,
    validationSchema: AccountDetailsValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length > 0) {
        console.log('Validation Errors:', formik.errors);
      } else {
        mutate(values);
        console.log('Form Data:', values);
      }
    }
  })

  const { mutate } = useMutation({
    mutationFn: async (formData: AccountDetailsType) => {
      const response = await APICall(createAccount, formData, true);
      return response;
    },
  })

  const handleChangeTab = (
    str: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (str === "signatory") {
      setChangeTab("signatory");
    } else if (str === "mandate") {
      setChangeTab("mandate");
    }
  };

  return (
    <>
      <div className="lg:p-4 w-full">
        <div className="border rounded-md flex flex-col gap-5 lg:w-[60%] xl:w-[55%] 2xl:w-[50%]">
          <div className="p-2 md:p-3 flex flex-col gap-6">
            <h1 className="font-medium lg:text-lg">Account Details</h1>
            <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
              {/* inputs */}
              <div className="flex flex-col gap-4 lg:w-[70%] xl:w-[80%] 2xl:w-[70%]">
                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Number</label>
                    <input
                      type="number"
                      name="accountNumber"
                      value={formik.values.accountNumber}
                      onChange={formik.handleChange}
                      className="formInput spin-button-none"
                    />
                    {formik.errors.accountNumber && formik.touched.accountNumber && (
                      <div className="text-red-500 text-sm">{formik.errors.accountNumber}</div>
                    )}
                  </div>
                </div>
                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Net Monthly Income</label>
                    <input
                      type="number"
                      name="netMonthlyIncome"
                      value={formik.values.netMonthlyIncome}
                      onChange={formik.handleChange}
                      className="formInput spin-button-none"
                    />
                    {formik.errors.netMonthlyIncome && formik.touched.netMonthlyIncome && (
                      <div className="text-red-500 text-sm">{formik.errors.netMonthlyIncome}</div>
                    )}
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Type</label>
                    <select name="accountType" id="" className="formInput" value={formik.values.accountType} onChange={formik.handleChange}>
                      <option value=""></option>
                      <option value="Current">Current</option>
                      <option value="Savings">Savings</option>
                      <option value="Fixed deposit">Fixed deposit</option>
                      <option value="Dollar account">Dollar account</option>
                      <option value="My pikin savings">My pikin savings</option>
                    </select>
                    {formik.errors.accountType && formik.touched.accountType && (
                      <div className="text-red-500 text-sm">{formik.errors.accountType}</div>
                    )}
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Status</label>
                    <select name="status" id="" className="formInput" value={formik.values.status} onChange={formik.handleChange}>
                      <option value=""></option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    {formik.errors.status && formik.touched.status && (
                      <div className="text-red-500 text-sm">{formik.errors.status}</div>
                    )}
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">PND Status</label>
                    <select name="pndStatus" id="" className="formInput" value={formik.values.pndStatus} onChange={formik.handleChange}>
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    {formik.errors.pndStatus && formik.touched.pndStatus && (
                      <div className="text-red-500 text-sm">{formik.errors.pndStatus}</div>
                    )}
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Owner</label>
                    <select name="accountOwner" id="" value={formik.values.accountOwner} onChange={formik.handleChange} className="formInput">
                      <option value=""></option>
                      <option value="Adewale Ojo">Adewale Ojo</option>
                      <option value="Chibuzor Okere">Chibuzor Okere</option>
                    </select>
                    {formik.errors.accountOwner && formik.touched.accountOwner && (
                      <div className="text-red-500 text-sm">{formik.errors.accountOwner}</div>
                    )}
                  </div>
                </div>

                <ImageInputCard
                  formik={formik}
                  name="mandateBase64String"
                  title="Upload Mandate"
                />
                {formik.errors.mandateBase64String && formik.touched.mandateBase64String && (
                  <div className="text-red-500 text-sm">{formik.errors.mandateBase64String}</div>
                )}

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel h-full flex items-center">
                      Note
                    </label>
                    <textarea
                      name="notes"
                      value={formik.values.notes}
                      onChange={formik.handleChange}
                      id=""
                      rows={3}
                      cols={20}
                      className="w-full pl-3 py-2 outline-none h-full border-l"
                    />
                    {formik.errors.notes && formik.touched.notes && (
                      <div className="text-red-500 text-sm">{formik.errors.notes}</div>
                    )}
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Balance</label>
                    <input
                      type="number"
                      readOnly
                      value={0.0}
                      className="formInput spin-button-none"
                    />
                  </div>
                </div>

                {/* signatories / mandate */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center text-xs lg:text-sm font-medium gap-6">
                    <button
                      onClick={(e) => handleChangeTab("signatory", e)}
                      className={`${
                        changeTab === "signatory"
                          ? "border-t-2 border-gray-600 text-pryColor"
                          : ""
                      }`}
                    >
                      SIGNATORIES
                    </button>
                    <button
                      onClick={(e) => handleChangeTab("mandate", e)}
                      className={`${
                        changeTab === "mandate"
                          ? "border-t-2 border-gray-600 text-pryColor"
                          : ""
                      }`}
                    >
                      MANDATE
                    </button>
                  </div>
                  <div className="container h-8"></div>
                </div>
              </div>
              {/* btn */}
              <button type="button" onClick={formik.submitForm} className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
