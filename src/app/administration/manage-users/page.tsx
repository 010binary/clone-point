import { DataTable } from '@/components/tables/data-table'
import React, { Suspense } from 'react'
import { manageUsersData } from './_components/data'
import { columns } from './_components/columns'
import ManageUserHeader from './_components/header'

const page = () => {
  return (
    <div className="">
      <Suspense>
      <ManageUserHeader />
      </Suspense>
      <div>
        <DataTable columns={columns} data={manageUsersData} />
      </div>
    </div>
  )
}

export default page