"use client";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import FormOne from "./Form1";
import { useAppSelector } from "@/redux/hooks";
import FormTwo from "./Form2";
import FormThree from "./Form3";
import FormFour from "./Form4";

type Props = {
  onClose: () => void;
};

const CreateForms = ({ onClose }: Props) => {
  const { pickForm } = useAppSelector((state) => state.customerSlice);

  return (
    <div className="bg-white p- rounded-xl w-[95vw] md:w-[70vw] lg:w-[35rem]">
      <div className="flex flex-col px-2 lg:px-4 pb-4">
        <div className="flex items-center justify-between bg-pryColor text-white px-2 md:px-3 lg:px-4 py-2">
          <h3 className="text-sm md:text-base lg:text-lg font-medium">
            CREATE INDIVIDUAL CUSTOMER
          </h3>
          <IoCloseSharp
            onClick={onClose}
            size={26}
            className="cursor-pointer"
          />
        </div>
        {pickForm === 1 && <FormOne />}
        {pickForm === 2 && <FormTwo />}
        {pickForm === 3 && <FormThree />}
        {pickForm === 4 && <FormFour />}
      </div>
    </div>
  );
};

export default CreateForms;
