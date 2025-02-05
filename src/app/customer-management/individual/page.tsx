'use client'
import React, { Suspense, useState } from "react";
import IndividualHeader from "./_components/individualHeader";
import IndividualCustomerTable, { IndividualCustomerType } from "./_components/IndividualCustomerTable";



const IndividualCustomerPage = () => {
  const [data, setdata] = useState<IndividualCustomerType[]>()


  return (
    <>
      <div className="flex flex-col gap-6 pt-4">
        <Suspense>
        <IndividualHeader data={data}/>
        </Suspense>
        <Suspense fallback={<div className="w-full text-center">LOADING...</div>}>
        <IndividualCustomerTable setdata={setdata}/>
        </Suspense>
      </div>
    </>
  );
};

export default IndividualCustomerPage;
