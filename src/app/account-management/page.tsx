'use client'
import React, { Suspense, useState } from "react";
import ListHeader from "./_components/listAccountHeader";
import ListAccountsTable, { IndividualCustomerType } from "./_components/IndividualCustomerTable";

const AccountMgtPage = () => {
  const [data, setdata] = useState<IndividualCustomerType[]>()
  return (
    <>
      <Suspense>
        <div className="flex flex-col gap-6 pt-4">
          <ListHeader data={data} />
          <ListAccountsTable setdata={setdata} />
        </div>
      </Suspense>
    </>
  );
};

export default AccountMgtPage;
