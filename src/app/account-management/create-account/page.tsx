"use client";
import { APICall } from "@/utils/apicall";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { createICAccounts } from "../../../../services";
import { AccountDetailsinitialValues, AccountDetailsType, AccountDetailsValidationSchema } from "./data";

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
      const response = await APICall(createICAccounts, formData, true);
      return response;
    },
  })


console.log('Form Data:', formik.values);
console.log('Form Data:', formik.dirty);
console.log('Form Data:', formik.isValid);
console.log('Form Data:', formik.errors);

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
            <form className="flex flex-col gap-10">
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
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Type</label>
                    <select name="accountType" id="" className="formInput" value={formik.values.accountType} onChange={formik.handleChange}
                    >
                      <option value=""></option>
                      <option value="">Current</option>
                      <option value="">Savings</option>
                      <option value="">Fixed deposit</option>
                      <option value="">Dollar account</option>
                      <option value="">My pikin savings</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Customer</label>
                    <select name="" id="" className="formInput" value={formik.values.c}>
                      <option value=""></option>
                      <option value="">Customer 1</option>
                      <option value="">Customer 2</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Status</label>
                    <select name="" id="" className="formInput" value={formik.values.acc}>
                      <option value=""></option>
                      <option value="">Active</option>
                      <option value="">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">PND Status</label>
                    <select name="" id="" className="formInput">
                      <option value=""></option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Owner</label>
                    <select name="" id="" className="formInput">
                      <option value=""></option>
                      <option value="">Adewale Ojo</option>
                      <option value="">Chibuzor Okere</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Name</label>
                    <input type="text" className="formInput" />
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Bank branch </label>
                    <input type="text" className="formInput" />
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account manager </label>
                    <input type="text" className="formInput" />
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel h-full flex items-center">
                      Note
                    </label>
                    <textarea
                      name=""
                      id=""
                      rows={3}
                      cols={20}
                      className="w-full pl-3 py-2 outline-none h-full border-l"
                    />
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
              <button className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg">
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
