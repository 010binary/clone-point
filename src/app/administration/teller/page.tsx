import { columns } from './_components/columns'
import { DataTable } from '@/components/tables/data-table'
import React from 'react'
import { tableData } from './data'
import TellerTransactionHeader from './_components/header'

const page = () => {
  return (
    <div className="">
      <TellerTransactionHeader/>
      <div>
      <DataTable columns={columns} data={tableData} />
    </div>
    </div>
  )
}

export default page