"use client";

import CorporateForm from "@/components/customer-mgt/new-corporate/CorporateForm";
import { Modal } from "@/components/modal/Modal";
import Table from "@/components/tables/Table";
import { corporateTableData } from "@/lib/customer-management/corporateTable";
// import { individualTableData } from "@/lib/customer-management/individual";

import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import { TiArrowForwardOutline } from "react-icons/ti";

const CorporateCustomerPage = () => {
  const [openForm, setOpenForm] = useState(true);
  // const dispatch = useAppDispatch();

  // const resetForm = () => {
  //   dispatch(setCorporateForm(1));
  // };

  const handleCloseModal = () => {
    setOpenForm(false);
    // resetForm();
  };

  return (
    <>
      <div className="flex flex-col gap-6 lg:pt-4">
        {/* first */}
        <div className="flex flex-col gap-4">
          <div className="w-full top-section-container">
            <div className="w-full flex items-center flex-wrap justify-between px-3 lg:px-6 py-1 text-xs md:text-sm lg:text-base">
              <p className="font-semibold">Customer’s Data</p>
              <div className="flex items-center gap-4">
                <div className="lg:w-96 md:w-60 flex items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-2 md:py-2 pl-2 outline-none bg-transparent w-full"
                  />
                  <IoSearchSharp size={20} color="#737373" className="mr-2" />
                </div>
                <RiCalendar2Fill size={24} color="#737373" />
              </div>
            </div>
          </div>
          <button className="text-[#1A88E1] border border-[#1A88E1] self-end px-2 py-1 w-fit flex items-center gap-1 text-xs md:text-sm lg:text-base">
            <TiArrowForwardOutline />
            <p>Export as Pdf</p>
          </button>
        </div>
        {/* second */}
        <div className="flex items-center justify-between lg:pl-6 text-xs md:text-sm lg:text-base">
          <button
            onClick={() => setOpenForm(true)}
            className="border rounded-md py-2 px-2 flex items-center gap-5 font-medium"
          >
            <p>New Co-operate Customer</p>
            <MdAddCircle size={24} color="#1A88E1" />
          </button>
          {/* pag */}
        </div>
        {/* table */}
        <div className="lg:pl-6 overflow-x-auto">
          <Table
            headers={[
              { key: "title", label: "Title" },
              { key: "firstName", label: "First Name" },
              { key: "middleName", label: "Middle Name" },
              { key: "lastName", label: "Last Name" },
              { key: "phone", label: "Phone Number" },
              { key: "bizName", label: "Business Name" },
            ]}
            click={true}
            data={corporateTableData}
          />
        </div>
      </div>
      {openForm && (
        <Modal show={openForm} onClose={handleCloseModal}>
          <CorporateForm onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default CorporateCustomerPage;
