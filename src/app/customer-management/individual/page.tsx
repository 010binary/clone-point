"use client";
import CreateForms from "@/components/customer-mgt/new-individual/CreateForms";
import { Modal } from "@/components/modal/Modal";
import { DataTable } from "@/components/tables/data-table";
import React, { useState } from "react";
import { columns } from "./_components/columns";
import IndividualHeader from "./_components/individualHeader";
import { APICall } from "@/utils/apicall";
import { getAllCustomers } from "../../../../services";
import { useQuery } from "@tanstack/react-query";


interface address {
    address1: string;
    city: string;
    country: string;
    created_at: string;
    email: string | null;
    homePhone: string | null;
    id: number;
    lga: string;
    officePhone: string | null;
    proofOfAddressBase64String: string | null;
    residentialStatus: string;
    state: string;
    updated_at: string;
  }
interface customerDetailType {
  accountType: string | null;
  businessName: string;
  businessType: string;
  bvn: string | null;
  citizenship: string | null;
  created_at: string;
  dateOfBirth: string | null;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  id: number;
  lastName: string | null;
  levelOfEducation: string | null;
  middleName: string | null;
  mobilePhone: string;
  notes: string;
  numberOfEmployees: number;
  registrationYear: string;
  title: string | null;
  updated_at: string;
}


interface customerResponse {
  customerDetail: customerDetailType;
  address:address
}

class IndividualCustomer {
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public phoneNumber: string
  ) {}
}


const IndividualCustomerPage = () => {
  const [openForm, setOpenForm] = useState(false);
  // const dispatch = useAppDispatch();

  const { data } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
        const response = await APICall(getAllCustomers);
        const data:customerResponse[]= response?.data
        const transformedRes= data?.map(res=> new IndividualCustomer(
          res.customerDetail.firstName ?? 'Unidentified',
          res.customerDetail.middleName ?? 'Unidentified',
          res.customerDetail.lastName ?? 'Unidentified',
          res.customerDetail.mobilePhone 
        ))
        return transformedRes;
    },
    staleTime: Infinity,
})





  const resetForm = () => {
    // dispatch(setPickForm(1));
  };

  const customer = new IndividualCustomer("John Doe", "Mr.", "john@example.com", "123-456-7890");
  console.log(customer); 

  const handleCloseModal = () => {
    setOpenForm(false);
    resetForm();
    
  };



  return (
    <>
      <div className="flex flex-col gap-6 lg:pt-4">
        <IndividualHeader/>
        <div className="lg:pl-6 overflow-x-auto">
          <DataTable columns={columns} data={data ?data : []}/>
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
