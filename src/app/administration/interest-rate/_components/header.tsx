'use client'
import { Plus } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { IoSearchSharp } from 'react-icons/io5'
import { RiCalendar2Fill } from 'react-icons/ri'
import { TiArrowForwardOutline } from 'react-icons/ti'


const title = "Interest rate"

const InterestRateHeader = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q") || "")

    useEffect(() => {
        const params = new URLSearchParams();
        if (query) {
            params.set("q", query);
        } else {
            params.delete("q")
        }
        router.push(`?${params.toString()}`, { scroll: false })
    }, [query, router])

    return (
        <div className=" space-y-10 mb-10">
            <h1 className="text-sm md:text-base font-semibold"> {title}</h1>
            <HeaderActions/>
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


const HeaderActions = () => {
    return (
        <div className=" flex justify-end items-center gap-10">
            <button className="text-white w-[180px] bg-[#1A88E1] self-end px-2 py-1 min-w-fit flex items-center gap-1 text-xs md:text-sm lg:text-base">
                <Plus />
                <p>Create Interest Rate</p>
            </button>
            <button className="text-[#1A88E1] w-[180px] justify-center border border-[#1A88E1] self-end px-2 py-1 min-w-fit flex items-center gap-1 text-xs md:text-sm lg:text-base">
                <TiArrowForwardOutline size={22} />
                <p>Export as Pdf</p>
            </button>
        </div>
    )
}

export default InterestRateHeader