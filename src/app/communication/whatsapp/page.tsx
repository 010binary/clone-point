import { DataTable } from '@/components/tables/data-table'
import React from 'react'
import { smsData } from './_components/data'
import { columns } from './_components/columns'
import EmailHeader from './_components/header'

const page = () => {
  return (
    <div className="">
    <EmailHeader/>
    <DataTable columns={columns} data={smsData}/>        
    </div>

  )
}

export default page