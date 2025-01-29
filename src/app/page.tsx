"use client";
import Container from "@/components/layout/Container";
import RecentBranch from "@/components/Dashboard/RecentBranch";
import DashboardHeader from "@/components/Dashboard/DashboardHeader/DashboardHeader";
import { ReactNode, useState } from "react";


export default function Home() {
  const [viewMore, setviewMore] = useState(false)
  const handleViewMore =()=>{
    setviewMore(prev=>!prev)
  }
  return (
    <Container>
      <HomeLayout>
        {/* <div className="w-full top-section-container">
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
        </div> */}
      <DashboardHeader viewMore={viewMore}/>
      <RecentBranch viewMore={viewMore} handleViewMore={handleViewMore}/>
      </HomeLayout>
    </Container>
  );
}

const HomeLayout =({ children }: { children: ReactNode })=>{
  return(
    <div className="flex flex-col gap-10 pt-4">
      {children}
    </div>
  )
}
