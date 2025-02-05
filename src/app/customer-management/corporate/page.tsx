"use client";

import { Suspense, useState } from "react";
import CorporateHeader from "./_components/CorporateHeader";
import CorporateCustomerTable, { CorporateCustomerType } from "./_components/CorporateCustomerTable";

const CorporateCustomerPage = () => {
   const [data, setdata] = useState<CorporateCustomerType[]>()

  return (
    <>
     <>
      <div className="flex flex-col gap-6 pt-4">
        <Suspense>
        <CorporateHeader data={data}/>
        </Suspense>
        <Suspense fallback={<div className="w-full text-center">LOADING...</div>}>
        <CorporateCustomerTable setdata={setdata}/>
        </Suspense>
      </div>
    </>
    </>
  );
};

export default CorporateCustomerPage;
