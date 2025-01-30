import React, { useEffect, useState } from 'react'
import { Branch, columns } from './columns'
import { DataTable } from '@/app/payments/data-table'
import { useSearchParams } from 'next/navigation'

const initialData: Branch[] = [
  {
    branchName: "Keystone Bank",
    branchAddress: "50, Isaac street Somolu",
    city: "Lagos",
    customerServiceManager: "Wade Warren",
    operationManager: "John Doe",
  },
  {
    branchName: "Zenith Bank",
    branchAddress: "12, Broad street Marina",
    city: "Lagos",
    customerServiceManager: "Jane Smith",
    operationManager: "Alice Johnson",
  },
  {
    branchName: "GTBank",
    branchAddress: "15, Adeola Odeku Victoria Island",
    city: "Lagos",
    customerServiceManager: "Michael Brown",
    operationManager: "Chris Evans",
  },
  {
    branchName: "Access Bank",
    branchAddress: "22, Awolowo Road Ikoyi",
    city: "Lagos",
    customerServiceManager: "Sarah Connor",
    operationManager: "Bruce Wayne",
  },
  {
    branchName: "First Bank",
    branchAddress: "10, Marina Road",
    city: "Lagos",
    customerServiceManager: "Clark Kent",
    operationManager: "Diana Prince",
  },
  {
    branchName: "Union Bank",
    branchAddress: "5, Ikorodu Road",
    city: "Lagos",
    customerServiceManager: "Peter Parker",
    operationManager: "Tony Stark",
  },
  {
    branchName: "UBA",
    branchAddress: "8, Ajose Adeogun Street",
    city: "Lagos",
    customerServiceManager: "Natasha Romanoff",
    operationManager: "Steve Rogers",
  },
  {
    branchName: "Fidelity Bank",
    branchAddress: "3, Adeola Hopewell Street",
    city: "Lagos",
    customerServiceManager: "Bruce Banner",
    operationManager: "Thor Odinson",
  },
  {
    branchName: "Sterling Bank",
    branchAddress: "7, Alfred Rewane Road",
    city: "Lagos",
    customerServiceManager: "Wanda Maximoff",
    operationManager: "Vision",
  },
];

const RecentBranch = ({ viewMore,handleViewMore }) => {
  const searchParams = useSearchParams();
  const [data, setData] = useState(initialData)
  const filterValue= searchParams.get('q')?.toString() 


  useEffect(()=>{
   
    if (filterValue) {
      const filteredData = initialData.filter((item) => {
        return (
          item.branchName.includes(filterValue) ||
          item.branchAddress.includes(filterValue) ||
          item.city.toString().includes(filterValue) ||
          item.customerServiceManager.includes(filterValue)||
          item.operationManager.includes(filterValue)
        );
      });
      setData(filteredData)
    }

  },[filterValue])



  return (
   <>
    {/* recent branches */}
    <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-sm md:text-base">Recent Branches</h1>
            <button className="text-pryColor text-xs lg:text-sm" onClick={handleViewMore}>
              {viewMore? 'View less':'View all'}
            </button>
          </div>






          {/* <div className="overflow-x-auto">
            <Table
              headers={[
                { key: "name", label: "Branch  name" },
                { key: "address", label: "Branch address" },
                { key: "city", label: "City" },
                { key: "manager", label: "Customer service Manager" },
                { key: "operationManager", label: "Operation manager" },
              ]}
              click={true}
              data={recentBranches}
            />
          </div> */}
          <div className="">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
   </>
  )
}

export default RecentBranch