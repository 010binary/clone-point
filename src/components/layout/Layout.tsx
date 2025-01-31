import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { RiMessage2Line } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import Color2 from "@/assets/header/Color2";
import Color1 from "@/assets/header/Color1";
import DesktopHeader from "../common/DesktopHeader";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex flex-col gap-0.5 bg-white overflow-hidden">
        <Header />
        <div className="h-screen flex bg-[#FFF] w-full pt-14">
          <SideBar />
          <div className="flex flex-col w-full overflow-x-auto">
          <DesktopHeader/>
            {/* <div
              style={{
                borderTopLeftRadius: "32px",
                borderBottomRightRadius: "32px",
              }}
              className="h-[49px] lg:w-[97%] bg-[#1a88e1] flex items-center justify-end relative overflow-hidden flex-shrink-0"
            >
              <div className="h-full hidden lg:block absolute lg:right-[33.5rem]">
                <Color1 />
              </div>
              <div className="h-full hidden lg:block absolute lg:right-60">
                <Color2 />
              </div>
              <div className="flex items-center gap-4 lg:gap-8 mr-4 lg:mr-8">
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
            </div> */}
            <div className="flex-grow p-2 md:p-4 overflow-y-auto lg:pr-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
