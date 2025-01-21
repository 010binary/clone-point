"use client";
import { useState } from "react";

const CreateAccount = () => {
  const [changeTab, setChangeTab] = useState("signatory");

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
        <div className="border rounded-md h-screen flex flex-col gap-5 lg:w-[60%] xl:w-[55%] 2xl:w-[50%]">
          <div className="p-2 md:p-3 flex flex-col gap-6">
            <h1 className="font-medium lg:text-lg">Account Details</h1>
            <form className="flex flex-col gap-10">
              {/* inputs */}
              <div className="flex flex-col gap-4 lg:w-[70%]">
                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Number</label>
                    <input
                      type="number"
                      className="formInput spin-button-none"
                    />
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Type</label>
                    <select name="" id="" className="formInput">
                      <option value="">select</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Customer</label>
                    <select name="" id="" className="formInput">
                      <option value="">select</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Status</label>
                    <select name="" id="" className="formInput">
                      <option value="">select</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">PND Status</label>
                    <select name="" id="" className="formInput">
                      <option value="">select</option>
                    </select>
                  </div>
                </div>

                <div className="container">
                  <div className="innerContainer">
                    <label className="formLabel">Account Owner</label>
                    <select name="" id="" className="formInput">
                      <option value="">select</option>
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
                  <div className="flex items-center justify-center font-medium gap-6">
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
