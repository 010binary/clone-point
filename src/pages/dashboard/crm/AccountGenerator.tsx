/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import shareIcon from "../../../assets/icons/share.svg";
// import { SearchIcon } from "@heroicons/react/outline";
import { FiSearch } from "react-icons/fi";
import CreateCustomerAccount from "./CustomerAccount";
import DashboardLayout from "../layout";
import GenericTable from "../../../components/ui/table/generic-table";
import { userColumns } from "../../../components/ui/table/colums";
import useGetAllCustomerQuery from "./services/get-all-customer.api";
import { Skeleton } from "../../../components/ui/skeleton";
import CreateCoperaterAccount from "./CoperateCustomer";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";

const AccountGenerator = () => {
  // const [createCustomer, setCreateCustomer] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isIndividualCustomerModalOpen, setIsIndividualCustomerModalOpen] =
    useState(false);

  const [isCoperateCustomerModalOpen, setIsCoperateCustomerModalOpen] =
    useState(false);
  const [customerType, setCustomerType] = useState("");

  const openModal = (type: any) => {
    setCustomerType(type);
    setIsIndividualCustomerModalOpen(true);
  };

  const closeModal = () => {
    setIsIndividualCustomerModalOpen(false);
    setCustomerType("");
    clearStepFromURL();
  };

  const clearStepFromURL = () => {
    searchParams.delete("step");
    setSearchParams(searchParams);
  };

  const openCoperateModal = (type: any) => {
    setCustomerType(type);
    setIsCoperateCustomerModalOpen(true);
  };

  const closeCoperateModal = () => {
    setIsCoperateCustomerModalOpen(false);
    setCustomerType("");
    clearStepFromURL();
  };

  const { data, isLoading } = useGetAllCustomerQuery();

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Customer’s Data</h6>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex w-full items-center justify-end gap-4">
            <button className="flex items-center px-4 py-2 gap-2 border border-[#1A88E1]">
              <img src={shareIcon} alt="" />
              <p className="text-[#1A88E1] font-medium">Export as Pdf</p>
            </button>
          </div>
        </div>

        <div className="flex mt-6 flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => openModal("ic")}
              className="flex items-center gap-4 border rounded-lg px-4 py-2"
            >
              <p className="text-sm font-semibold">New Individual Customer</p>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <i className="ri-add-line text-white"></i>
              </div>
            </button>

            <button
              onClick={() => openCoperateModal("cc")}
              className="flex items-center gap-4 border rounded-lg px-4 py-2"
            >
              <p className="text-sm font-semibold">New Co-operate Customer</p>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <i className="ri-add-line text-white"></i>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold text-sm">
              <span className="text-primary-dark">1 - 10</span> of 200
            </p>

            <div className="">
              <i className="ri-arrow-drop-left-line text-3xl bg-white border rounded-full mr-2"></i>
              <i className="ri-arrow-drop-right-line text-3xl bg-white border rounded-full"></i>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-8 mt-8">
          {/* Filter by Customer Type */}
          <div className="flex items-center space-x-2">
            <label className="text-gray-600 font-semibold">
              Filter by Type:
            </label>
            <Select>
              <SelectTrigger className="w-48 border border-gray-300 rounded-md shadow-sm">
                <SelectValue placeholder="Customer Type" />
              </SelectTrigger>
              <SelectContent>
                {/* <SelectItem value="">All</SelectItem> */}
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Search Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search by Code, Name, or Business"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md shadow-sm pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
            />

            <button className="p-2 text-gray-500 absolute left-1.5 top-0.5">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        <div className="mt-5 pb-20 overflow-x-scroll">
          {isLoading ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {Array(3)
                  .fill(1)
                  .map((_, index) => {
                    return (
                      <Skeleton
                        className="h-96 w-full bg-gray-300"
                        key={index}
                      />
                    );
                  })}
              </div>
            </>
          ) : (
            <GenericTable data={data?.data || []} columns={userColumns} />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">
        {isIndividualCustomerModalOpen && (
          <>
            <div className="w-full h-full bg-opacity-70 z-0 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <CreateCustomerAccount
                isOpen={isIndividualCustomerModalOpen}
                onClose={closeModal}
                customerType={customerType}
              />
            </div>
          </>
        )}
      </div>

      <div className="flex items-center justify-center">
        {isCoperateCustomerModalOpen && (
          <>
            <div className="w-full h-full bg-opacity-70 z-0 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <CreateCoperaterAccount
                // isOpen={isCoperateCustomerModalOpen}
                onClose={closeCoperateModal}
                customerType={customerType}
              />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AccountGenerator;
