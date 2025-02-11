"use client";

import { CCFormTypes } from "@/app/customer-management/corporate/_components/data";
import { ChildComponentProps } from "@/components/modal/_components/ICFormCreateModal";

const Form3 = ({ formik, changePage }: ChildComponentProps<CCFormTypes>) => {
  return (
    <>
      <div className="border border-[#C4C4C4] rounded-b-md w-full">
        <div className="flex flex-col gap-5 px-2 md:px-3 lg:px-4 py-4">
          <p className="tracking-wide">Add Directors</p>

          <div className="flex flex-col gap-5 text-xs md:text-sm lg:w-[85%]">
            <input
              type="text"
              placeholder="Search First name, last name, phone number"
              className="border focus:border-[#1A88E1] rounded-lg py-2 pl-3"
            />

            <p className="tracking-wide">Check Box</p>

            <div className="border border-[#C4C4C4] rounded-lg w-full h-10">
              <div className="flex justify-between items-center h-full px-3">
                <input type="checkbox" value={formik.values.directorsIds[0]} />
                <span className="px-6 border-s h-full flex items-center">
                  Name
                </span>
                <span className="px-6 border-s h-full flex items-center">
                  Address
                </span>
                <span className="px-6 border-s h-full flex items-center">
                  Phone
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-[#F8F8F8] w-full h-60"></div>
          </div>
          <button className="bg-pryColor text-white py-1.5 lg:py-2 px-3 w-full rounded-lg" type="button" onClick={formik.submitForm}>
            Save
          </button>
          <button
          disabled={formik.isSubmitting}
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

export default Form3;
