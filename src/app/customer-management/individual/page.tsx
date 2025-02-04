import React, { Suspense } from "react";
import IndividualHeader from "./_components/individualHeader";
import IndividualCustomerTable from "./_components/IndividualCustomerTable";



const IndividualCustomerPage = () => {

  return (
    <>
      <div className="flex flex-col gap-6 pt-4">
        <IndividualHeader/>
        <Suspense fallback={<div className="w-full text-center">LOADING...</div>}>
        <IndividualCustomerTable/>
        </Suspense>
      </div>
    </>
  );
};

export default IndividualCustomerPage;
