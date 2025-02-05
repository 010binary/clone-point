"use client";

import { Suspense } from "react";
import CorporateHeader from "./_components/CorporateHeader";
import CorporateCustomerTable from "./_components/CorporateCustomerTable";

const CorporateCustomerPage = () => {

  return (
    <>
     <>
      <div className="flex flex-col gap-6 pt-4">
        <Suspense>
        <CorporateHeader/>
        </Suspense>
        <Suspense fallback={<div className="w-full text-center">LOADING...</div>}>
        <CorporateCustomerTable/>
        </Suspense>
      </div>
    </>
    </>
  );
};

export default CorporateCustomerPage;
