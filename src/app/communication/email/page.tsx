import { DataTable } from '@/components/tables/data-table'
import React, { Suspense } from 'react'
import { smsData } from './_components/data'
import { columns } from './_components/columns'
import EmailHeader from './_components/header'

const page = () => {
  return (
    <div className="">
      <Suspense>
      <EmailHeader/>
      </Suspense>
    <DataTable columns={columns} data={smsData}/>        
    </div>

  )
}

export default page