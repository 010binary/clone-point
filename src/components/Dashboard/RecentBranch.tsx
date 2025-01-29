import React from 'react'
import Table from '../tables/Table'
import { recentBranches } from '@/lib/dashboard/branches'
import { FaXmark } from 'react-icons/fa6'
import { Modal } from '../modal/Modal'

const RecentBranch = () => {
  return (
   <>
    {/* recent branches */}
    <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-sm md:text-base">Recent Branches</h1>
            <button className="text-pryColor text-xs lg:text-sm">
              View all
            </button>
          </div>






          <div className="overflow-x-auto">
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
          </div>
        </div>
   </>
  )
}

export default RecentBranch