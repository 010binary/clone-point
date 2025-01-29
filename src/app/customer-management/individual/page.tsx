"use client";
import CreateForms from "@/components/customer-mgt/new-individual/CreateForms";
import { Modal } from "@/components/modal/Modal";
import Table from "@/components/tables/Table";
import { individualTableData } from "@/lib/customer-management/individual";
import React, { useState } from "react";
import { IoAddSharp, IoSearchSharp } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import { TiArrowForwardOutline } from "react-icons/ti";
import { setPickForm } from "@/redux/features/customerSlice";
import { useAppDispatch } from "@/redux/hooks";

const IndividualCustomerPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useAppDispatch();

  const resetForm = () => {
    dispatch(setPickForm(1));
  };

  const handleCloseModal = () => {
    setOpenForm(false);
    resetForm();
  };

  return (
    <>
      <div className="flex flex-col gap-6 lg:pt-4">
        {/* first */}
        <div className="flex items-center justify-between gap-4 lg:pl-6">
          <h1 className="font-semibold">Individual Customer</h1>
          <div className="flex flex-wrap items-center gap-3">
            <button className="text-[#1A88E1] border border-[#1A88E1] self-end px-2 py-1 w-fit flex items-center gap-1 text-xs md:text-sm lg:text-base">
              <TiArrowForwardOutline />
              <p>Export as Pdf</p>
            </button>
            <button
              onClick={() => setOpenForm(true)}
              className="bg-pryColor text-white px-1 py-1 flex items-center gap-1"
            >
              <IoAddSharp size={18} />
              <p>Create Individual Customer</p>
            </button>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-wrap gap-3 items-center justify-between lg:pl-6 text-xs md:text-sm lg:text-base">
          <div className="border rounded-lg shadow flex items-center lg:w-96 md:w-60">
            <p className="px-3 py-2 md:py-2 border-r">Search</p>
            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search here"
                className="px-3 py-2 md:py-2 pl-2 outline-none bg-transparent w-full"
              />
              <IoSearchSharp size={18} color="#737373" className="mx-2" />
            </div>
          </div>
          {/* <button
            onClick={() => setOpenForm(true)}
            className="border rounded-md py-2 px-2 flex items-center gap-5 font-medium"
          >
            <p>New Individual Customer</p>
            <MdAddCircle size={24} color="#1A88E1" />
          </button> */}
        </div>
        {/* table */}
        <div className="lg:pl-6 overflow-x-auto">
          <Table
            headers={[
              { key: "firstName", label: "First Name" },
              { key: "middleName", label: "Middle Name" },
              { key: "lastName", label: "Last Name" },
              { key: "phone", label: "Phone Number" },
            ]}
            click={true}
            data={individualTableData}
          />
        </div>
      </div>
      {openForm && (
        <Modal show={openForm} onClose={handleCloseModal}>
          <CreateForms onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default IndividualCustomerPage;
