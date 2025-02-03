"use client";
import { IoCloseSharp } from "react-icons/io5";
// import Form1 from "./Form1";
// import Form2 from "./Form2";
// import Form3 from "./Form3";
// import { useAppSelector } from "@/components/set-up/redux/hooks";

type Props = {
  onClose: () => void;
};

const CorporateForm = ({ onClose }: Props) => {

  return (
    <div className="bg-white p- rounded-xl w-[95vw] md:w-[70vw] lg:w-[38rem]">
      <div className="flex flex-col px-2 lg:px-4 pb-4">
        <div className="flex items-center justify-between bg-pryColor text-white px-2 md:px-3 lg:px-4 py-2">
          <h3 className="text-sm md:text-base lg:text-lg font-medium">
            CREATE CORPORATE CUSTOMER
          </h3>
          <IoCloseSharp
            onClick={onClose}
            size={26}
            className="cursor-pointer"
          />
        </div>
        {/* {corporateForm === 1 && <Form1 />}
        {corporateForm === 2 && <Form2 />}
        {corporateForm === 3 && <Form3 />} */}
      </div>
    </div>
  );
};

export default CorporateForm;
