import Table from "@/components/tables/Table";
import { listAccountsData } from "@/lib/account-managent/listAccounts";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiCalendar2Fill } from "react-icons/ri";
import { TiArrowForwardOutline } from "react-icons/ti";

const AccountMgtPage = () => {
  return (
    <>
      <div className="flex flex-col gap-6 lg:pt-4">
        <div className="w-full top-section-container">
          <div className="w-full flex items-center flex-wrap justify-between px-3 lg:px-6 py-1 text-xs md:text-sm lg:text-base">
            <p className="font-semibold">List Account</p>
            <div className="flex items-center gap-4">
              <div className="lg:w-96 md:w-60 flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 md:py-2 pl-2 bg-transparent outline-none w-full"
                />
                <IoSearchSharp size={20} color="#737373" className="mr-2" />
              </div>
              <RiCalendar2Fill size={24} color="#737373" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs lg:text-sm 2xl:text-base">
              From 04/11/2022 to 06/11/2022
            </p>
            <button className="text-[#1A88E1] border border-[#1A88E1] self-end px-2 py-1 w-fit flex items-center gap-1 text-xs lg:text-sm 2xl:text-base">
              <TiArrowForwardOutline />
              <p>Export as Pdf</p>
            </button>
          </div>
          <div className="text-xs lg:text-sm 2xl:text-base md:w-[50%] lg:w-[45%] xl:w-[40%]">
            <div className="container">
              <div className="innerContainer">
                <label className="formLabel">Branch</label>
                <select name="" id="" className="formInput">
                  <option value="all">All</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* pag / table */}
        <div className="flex flex-col gap-3">
          <div className="overflow-x-auto">
            <Table
              headers={[
                { key: "number", label: "Number" },
                { key: "balance", label: "Balance" },
                { key: "type", label: "Type" },
                { key: "customer", label: "Customer" },
                { key: "branch", label: "Branch" },
                { key: "manager", label: "Manager" },
              ]}
              click={true}
              data={listAccountsData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountMgtPage;
