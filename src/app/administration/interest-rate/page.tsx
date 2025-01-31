import { DataTable } from '@/components/tables/data-table'
import React from 'react'
import { columns } from './_components/columns'
import { interestRateData } from './_components/data'
import InterestRateHeader from './_components/header'

const page = () => {
  return (
    <div className="">

<InterestRateHeader/>

<div>
      <DataTable columns={columns} data={interestRateData} />
    </div>
    </div>
  )
}

export default page