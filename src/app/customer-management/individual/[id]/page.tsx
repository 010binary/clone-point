"use client";
import AddressDetails from "@/components/customer-mgt/individual/AddressDetails";
import CustomerDetails from "@/components/customer-mgt/individual/CustomerDetails";
import Identification from "@/components/customer-mgt/individual/Identification";
import ImageSection from "@/components/customer-mgt/individual/ImageSection";
import NextKin from "@/components/customer-mgt/individual/NextKin";
import EmployentDetails from "@/components/customer-mgt/individual/EmployentDetails";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

const IndividualCustomerDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-5 lg:pt-4">
        <div className="w-full top-section-container">
          <div className="w-full flex items-center flex-wrap justify-between px-3 lg:px-6 py-1 text-xs md:text-sm lg:text-base">
            <p className="font-semibold">View Details</p>
            <div className="flex items-center gap-4">
              <div className="lg:w-96 md:w-60 flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 md:py-2 pl-2 outline-none bg-transparent w-full"
                />
                <IoSearchSharp size={20} color="#737373" className="mr-2" />
              </div>
            </div>
          </div>
        </div>

        {/* header */}
        <form className="flex flex-col gap-10 text-xs lg:text-sm pb-10">
          {/* cstm details */}
          <div className="flex flex-col gap-4 md:pl-4 lg:pl-8">
            <div className="flex items-center justify-between gap-2">
              <div className="h-10 bg-gradient-to-r from-pryColor/70 to-pryColor w-full flex items-center lg:w-[90%]">
                <p className="pl-2 text-sm lg:text-base text-white">
                  CUSTOMER DETAILS
                </p>
              </div>
              <button className="flex items-center shadow gap-2 px-2 md:px-2.5 lg:px-4 h-10 border">
                <MdOutlineEdit />
                <p>Edit</p>
              </button>
            </div>
            <CustomerDetails />
          </div>

          {/* identification */}
          <Identification />

          {/* address details */}
          <AddressDetails />

          {/* next of kin 1 */}
          <NextKin />

          {/* next of kin 2 */}
          <EmployentDetails />

          {/* image section */}
          <ImageSection />
        </form>
      </div>
    </>
  );
};

export default IndividualCustomerDetails;
