"use client";
import FinmanIcon from "@/assets/FinmanIcon";
import Image from "next/image";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="bg-white h-14 lg:h-14 w-full flex items-center">
      <div className="py-4 lg:py-6 px-2 md:px-4 lg:px-6 w-full flex items-center justify-between">
        <div>
          <Image src={"/ezone.png"} alt="E-zone icon" width={100} height={50} />
        </div>
        <div className="hidden md:block">
          <FinmanIcon className="" />
        </div>
        {/* mobile */}
        <div className="block md:hidden">
          <GiHamburgerMenu size={26} color="#1702FF" />
        </div>
      </div>
    </div>
  );
};

export default Header;
