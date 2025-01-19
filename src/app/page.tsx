"use client";

import TotalIcon from "@/assets/dashboard/Total";
import Table from "@/components/tables/Table";
import { recentBranches } from "@/lib/dashboard/branches";
import { cardDetails } from "@/lib/dashboard/cards";
import { IoSearchSharp } from "react-icons/io5";
import { RiCalendar2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6 lg:pt-4">
        <div className="w-full top-section-container">
          <div className="w-full flex items-center flex-wrap justify-between px-3 lg:px-6 py-1 text-xs md:text-sm lg:text-base">
            <p className="font-semibold">Today</p>
            <div className="flex items-center gap-4">
              <div className="lg:w-96 md:w-60 flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 md:py-2 pl-2 bg-transparent outline-none w-full"
                />
                <IoSearchSharp size={20} color="#737373" className="mr-2" />
              </div>
              <RiCalendar2Fill size={24} color="#737373" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs lg:text-sm items-center justify-center md:justify-between">
          {cardDetails?.map((card) => (
            <div
              key={card.id}
              className="bg-[#7373730D] border border-[#00000033] rounded-md w-[90%] md:w-52 flex-shrink-0 flex items-center justify-center"
            >
              <div className="py-2 px-10 md:px-0 flex w-full justify-between md:justify-center items-center gap-4">
                <div
                  className={`${
                    card.id == 1
                      ? "bg-[#1A88E11F]"
                      : card.id == 2
                      ? "bg-[#198C061F]"
                      : card.id === 3
                      ? "bg-[#4E1AE11F]"
                      : "bg-[#8CB1231F]"
                  } rounded-md p-2`}
                >
                  <card.icon />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[#575757]">{card.title}</p>
                  <p className="text-black font-medium">{card.figure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </>
  );
}
