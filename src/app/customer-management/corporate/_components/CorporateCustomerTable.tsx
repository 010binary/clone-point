'use client'
import { DataTable } from '@/components/tables/data-table'
import { columns } from './columns'
import React, { useEffect, useState } from "react";
import { APICall } from "@/utils/apicall";
import { useQuery } from "@tanstack/react-query";
import { getPaginatedCustomers } from '../../../../../services';
import { useSearchParams } from 'next/navigation';


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

export interface CorporateCustomerType{
 title: string,
 firstName: string,
 middleName: string,
 lastName: string,
 phoneNumber: string,
 bussinessName: string
}

class CorporateCustomer {
  constructor(
    public title: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public phoneNumber: string,
    public bussinessName: string
  ) {}
}

const CorporateCustomerTable = ({setdata}:{ setdata: (prop:CorporateCustomerType[])=>void}) => {
    const searchParams = useSearchParams();
    const filterValue = searchParams.get('q')?.toString();
    const pageValue = searchParams.get('pageNumber')?.toString();
    const pageSize = searchParams.get('pageSize')?.toString();
    const customerType = searchParams.get('customerType')?.toString();
    const [debouncedQueryTrigger, setDebouncedQueryTrigger] = useState(0);

const { data, isLoading } = useQuery({
    queryKey: ["auth", debouncedQueryTrigger, pageValue, pageSize],
    queryFn: async () => {
        const response = await APICall( getPaginatedCustomers,[
          pageValue || 0,
          pageSize || 10,
          customerType || 'CC'
        ]);
        const data:customerResponse[]= response?.data?.content
        const transformedRes= data?.map(res=> new CorporateCustomer(
          res.customerDetail.title ?? 'GenderFLuid',
          res.customerDetail.firstName ?? 'Unidentified',
          res.customerDetail.middleName ?? 'Unidentified',
          res.customerDetail.lastName ?? 'Unidentified',
          res.customerDetail.mobilePhone ,
          res.customerDetail.businessName ?? 'lgbtq',
        ))
        setdata(transformedRes)
        return transformedRes;
    },
    staleTime: Infinity,
});


useEffect(() => {
    if (filterValue) {
        const timer = setTimeout(() => {
            setDebouncedQueryTrigger(prev => prev + 1);
        }, 500); // 500ms debounce delay
    return () => clearTimeout(timer);
    }
}, [filterValue]);

  return (
       <div className="lg:pl-6 overflow-x-auto">
            <DataTable columns={columns} data={data ?data : []} loading={isLoading}/>
    </div>
  )
}

export default CorporateCustomerTable