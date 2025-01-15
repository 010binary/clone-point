import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { RiMessage2Line } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex flex-col gap-0.5 bg-white overflow-hidden">
        <Header />
        <div className="h-screen flex bg-[#F5F5F5] w-full">
          <SideBar />
          <div className="flex flex-col w-full">
            <div className='bg-[url("/frame.png")] bg-no-repeat lg:object-cover lg:bg-cover h-[49px] flex items-center justify-end'>
              <div className="flex items-center gap-8 md:mr-4 lg:mr-16">
                <RiMessage2Line size={26} color="#E4E4E4" />
                <MdHelp size={26} color="#E4E4E4" />
                <button className="flex items-center gap-2">
                  <FaCircleUser size={26} color="#E4E4E4" />
                  <p className="text-white text-xs md:text-sm lg:text-base">
                    Joy Essien
                  </p>
                  <GoTriangleDown color="white" />
                </button>
              </div>
            </div>
            <div className="flex-grow p-2 md:p-4 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
