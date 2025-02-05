'use client'
import React, { useState } from "react";
import ListHeader from "./_components/listAccountHeader";
import ListAccountsTable, { IndividualCustomerType } from "./_components/IndividualCustomerTable";

const AccountMgtPage = () => {
  const [data, setdata] = useState<IndividualCustomerType[]>()
  return (
    <>
      <div className="flex flex-col gap-6 pt-4">
        <ListHeader data={data} />
        
        <ListAccountsTable setdata={setdata} />
      </div>
    </>
  );
};

export default AccountMgtPage;
