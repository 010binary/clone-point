'use client'
import { DataTable } from '@/components/tables/data-table'
import { columns } from './columns'
import React, { useEffect, useState } from "react";
import { APICall } from "@/utils/apicall";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'next/navigation';
import { getPaginatedAccounts } from '../../../../services';
import { accounts } from './data';

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
  address: address
}

export interface IndividualCustomerType {
  firstName: string,
  middleName: string,
  lastName: string,
  phoneNumber: string
}

class IndividualCustomer {
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public phoneNumber: string
  ) { }

}



/**
 * Handles search params and fetching of table data
 * 
 * @returns Indiviual customers tabel
 */

const ListAccountsTable = ({setdata}:{ setdata: (prop:IndividualCustomerType[])=>void}) => {
  const searchParams = useSearchParams();
  const filterValue = searchParams.get('q')?.toString();
  const pageValue = searchParams.get('pageNumber')?.toString();
  const pageSize = searchParams.get('pageSize')?.toString();
  const customerType = searchParams.get('customerType')?.toString();
  const [debouncedQueryTrigger, setDebouncedQueryTrigger] = useState(0);


  const { data, isLoading } = useQuery({
    queryKey: ["ICTABLE", debouncedQueryTrigger, pageValue, pageSize],
    queryFn: async () => {
      const response = await APICall(getPaginatedAccounts, [
        pageValue || 0,
        pageSize || 10,
        customerType || 'IC'
      ]);
      
      const data: customerResponse[] = response?.data?.content
      const transformedRes = data?.map(res => new IndividualCustomer(
        res.customerDetail.firstName ?? 'Unidentified',
        res.customerDetail.middleName ?? 'Unidentified',
        res.customerDetail.lastName ?? 'Unidentified',
        res.customerDetail.mobilePhone
      ))
      setdata(transformedRes)
      // return transformedRes;
    },
    staleTime: Infinity,
  });

  console.log(data)



  useEffect(() => {
    if (filterValue) {
      const timer = setTimeout(() => {
        setDebouncedQueryTrigger(prev => prev + 1);
      }, 500); // 500ms debounce delay
      return () => clearTimeout(timer);
    }
  }, [filterValue]);


  const mockDB= isLoading? [] : accounts

  return (
    <div className="lg:pl-6 overflow-x-auto">
      <DataTable columns={columns} data={mockDB ? mockDB : []} loading={isLoading} />
    </div>
  )
}

export default ListAccountsTable