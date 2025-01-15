"use client";
import { setPickForm } from "@/redux/features/customerSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

const FormThree = () => {
  const dispatch = useAppDispatch();

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setPickForm(4));
  };

  return (
    <>
      <form className="border border-[#C4C4C4] rounded-b-md w-full">
        <p>Customer Details 3</p>
        <button
          onClick={handleForm}
          className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default FormThree;
