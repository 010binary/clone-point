'use client'
import { openModal } from '@/components/Redux/modal'
import { useAppDispatch } from '@/components/set-up/redux/hooks'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { IoAddSharp, IoSearchSharp } from 'react-icons/io5'
import { RiCalendar2Fill } from 'react-icons/ri'
import { TiArrowForwardOutline } from 'react-icons/ti'


const title = "Individual Customer"

const IndividualHeader = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q") || "")

    useEffect(() => {
        const params = new URLSearchParams();
        console.log(!!query)
        console.log(query?.trim())
        if (query) {
            params.set("q", query);
            
        }else{
            params.delete("q")
        }
        router.push(`?${params.toString()}`, { scroll: false })
    }, [query, router])

    return (
        <div className=" space-y-10 px-2 lg:pl-6">
               <div className="flex items-center justify-between gap-4">
               <h1 className="text-sm md:text-base font-semibold"> {title}</h1>
                      <div className="flex flex-wrap items-center gap-3">
                        <button className="text-[#1A88E1] border border-[#1A88E1] self-end px-2 py-1 w-fit flex items-center gap-1 text-xs md:text-sm lg:text-base">
                          <TiArrowForwardOutline />
                          <p>Export as Pdf</p>
                        </button>
                        <button
                          onClick={() =>dispatch(openModal({ modalType:'ICFORMCREATEMODAL',modalData:{}}))}
                          className="bg-pryColor text-white px-1 py-1 flex items-center gap-1"
                        >
                          <IoAddSharp size={18} />
                          <p>Create Individual Customer</p>
                        </button>
                      </div>
                    </div>
            <div className="filter  flex justify-between items-center">
                <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                    <div className="border rounded-lg shadow flex items-center lg:w-96 md:w-60">
                        <p className="px-3 py-2 md:py-2 border-r">Search</p>
                        <div className="flex items-center w-full">
                            <input
                                type="text"
                                placeholder="Search here"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="px-3 py-2 md:py-2 pl-2 outline-none bg-transparent w-full"
                            />
                            <IoSearchSharp size={18} color="#737373" className="mx-2" />
                        </div>
                    </div>
                    <RiCalendar2Fill size={24} color="#737373" />
                </div>
                <div className="flex items-center gap-5">
                    <select id="branch-select" className="border rounded border-black px-1 py-1 font-semibold text-black">
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i + 1} value={i + 1} className=' font-semibold text-black'>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <p className="text gap-1  flex items-center font-medium"> <span className=' text-pryColor pl-1'> 1-10 {" "} </span>of 200</p>
                    <div className="paginationArrows flex gap-5 items-center">
                        <BiChevronLeft className=' size-7 rounded-full bg-green-200' />
                        <BiChevronRight className=' size-7 rounded-full bg-green-200' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualHeader