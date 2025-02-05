import { columns } from './_components/columns'
import { DataTable } from '@/components/tables/data-table'
import React, { Suspense } from 'react'
import { tableData } from './data'
import TellerTransactionHeader from './_components/header'

const page = () => {
  return (
    <div className="">
      <Suspense>
      <TellerTransactionHeader/>
      </Suspense>
      <div>
      <DataTable columns={columns} data={tableData} />
    </div>
    </div>
  )
}

export default page