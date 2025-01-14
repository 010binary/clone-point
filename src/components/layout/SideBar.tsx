import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="hidden md:block lg:w-[200px] xl:w-[250px] h-full sidebarStyle">
      <div>
        <Image
          src={"/wave.png"}
          alt="wave image"
          width={300}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SideBar;
