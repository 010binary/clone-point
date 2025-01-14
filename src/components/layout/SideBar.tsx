import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="hidden md:block lg:w-[200px] h-screen bg-gradient-to-b from-[#1702FF] to-[#250943]">
      <div>
        <Image
          src={"/wave.png"}
          alt="wave image"
          width={100}
          height={30}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SideBar;
