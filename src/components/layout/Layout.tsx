import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex flex-col gap-0.5 bg-white overflow-hidden">
        <Header />
        <div className="h-screen flex bg-[#F5F5F5]">
          <SideBar />
          <div className="flex-grow p-2 md:p-4 lg:px-12 lg:py-8 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
