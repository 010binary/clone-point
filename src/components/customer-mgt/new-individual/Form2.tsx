"use client";
import { setPickForm } from "@/redux/features/customerSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

const FormTwo = () => {
  const dispatch = useAppDispatch();

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setPickForm(3));
  };

  return (
    <>
      <form className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="px-2 md:px-3 lg:px-4 py-4 flex flex-col gap-4">
          <p>Identification</p>
          <div className="flex flex-col gap-3 text-xs md:text-sm lg:w-[80%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Identification</label>
                <select name="" id="" className="formInput">
                  <option value="nationalId">National ID</option>
                  <option value="intlPassport">International Passport</option>
                  <option value="votersCard">Voters Card</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Other (Specify)</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Identification Number</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Issue Date</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Expiration Date</label>
                <input type="text" className="formInput" />
              </div>
            </div>
            {/* upload */}
            <div className="flex flex-col gap-2">
              <p>Upload Front and Back Copy of The ID card</p>
              <div className="flex items-center gap-3">
                <div className="border border-dashed rounded-lg border-pryColor"></div>
              </div>
            </div>
          </div>
          <button
            onClick={handleForm}
            className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTwo;
