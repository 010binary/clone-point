import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";

const IndividualCustomerDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-5 lg:pt-4">
        <div className="w-full top-section-container">
          <div className="w-full flex items-center flex-wrap justify-between px-3 lg:px-6 py-1 text-xs md:text-sm lg:text-base">
            <p className="font-semibold">View Details</p>
            <div className="flex items-center gap-4">
              <div className="lg:w-96 md:w-60 flex items-center border rounded-md">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 md:py-2 pl-2 outline-none w-full"
                />
                <IoSearchSharp size={20} color="#737373" className="mr-2" />
              </div>
              {/* <RiCalendar2Fill size={24} color="#737373" /> */}
            </div>
          </div>
        </div>

        {/* header */}
        <form className="flex flex-col gap-4 text-xs md:text-sm lg:text-base">
          {/* cstm details */}
          <div className="flex flex-col gap-4 md:pl-4 lg:pl-8">
            <div className="flex items-center justify-between gap-2">
              <div className="h-10 bg-gradient-to-r from-pryColor/70 to-pryColor w-full flex items-center lg:w-[90%]">
                <p className="pl-2 text-sm md:text-base lg:text-lg text-white">
                  CUSTOMER DETAILS
                </p>
              </div>
              <button className="flex items-center gap-2 px-2 md:px-2.5 lg:px-4 h-10 border">
                <MdOutlineEdit />
                <p>Edit</p>
              </button>
            </div>

            {/* details */}
            <div className="flex flex-col gap-4 lg:w-[90%]">
              <div className="flex flex-col w-[25rem]">
                <div className="grid grid-cols-4">
                  <label className="py-1.5 col-span-2">Title</label>
                  <span className="py-1.5 col-span-2">Mr</span>
                </div>
                <hr />
              </div>

              <div className="flex items-center flex-wrap justify-between">
                <div className="flex flex-col w-[25rem]">
                  <div className="grid grid-cols-4">
                    <label className="py-1.5 col-span-2">First Name</label>
                    <span className="py-1.5 col-span-2">Mr</span>
                  </div>
                  <hr />
                </div>

                <div className="flex flex-col w-[25rem]">
                  <div className="grid grid-cols-4">
                    <label className="py-1.5 col-span-2">Middle Name</label>
                    <span className="py-1.5 col-span-2">Mr</span>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="flex items-center flex-wrap justify-between">
                <div className="flex flex-col w-[25rem]">
                  <div className="grid grid-cols-4">
                    <label className="py-1.5 col-span-2">First Name</label>
                    <span className="py-1.5 col-span-2">Mr</span>
                  </div>
                  <hr />
                </div>

                <div className="flex flex-col w-[25rem]">
                  <div className="grid grid-cols-4">
                    <label className="py-1.5 col-span-2">Middle Name</label>
                    <span className="py-1.5 col-span-2">Mr</span>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          {/* identification */}
        </form>
      </div>
    </>
  );
};

export default IndividualCustomerDetails;
