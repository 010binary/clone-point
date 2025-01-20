"use client";
import {
  AccountIcon,
  AdministrationIcon,
  CreditIcon,
  CustomerIcon,
  DashIcon,
  OperationIcon,
  SettingsIcon,
} from "@/assets";
import FinmanIcon from "@/assets/FinmanIcon";
import { customerLinks } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";
import { IoReturnDownBackSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [openCustomer, setOpenCustomer] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isCustomerPath = customerLinks.some((link) => link.path === pathname);
    if (!isCustomerPath) {
      setOpenCustomer(false);
    }
  }, [pathname]);

  const handleNavigate = (url: string) => {
    router.push(url);
    setTimeout(() => {
      setMenu(false);
    }, 1000);
  };

  return (
    <div className="bg-white h-14 lg:h-14 w-full flex items-center fixed z-[1000]">
      <div className="py-4 lg:py-6 px-2 md:px-4 lg:px-6 w-full flex flex-row-reverse md:flex-row items-center justify-between">
        <div>
          <Image src={"/ezone.png"} alt="E-zone icon" width={100} height={50} />
        </div>
        <div className="hidden md:block lg:mr-10">
          <FinmanIcon className="" />
        </div>
        {/* mobile */}
        <button onClick={() => setMenu(true)} className="block md:hidden">
          <GiHamburgerMenu size={26} color="#1A88E1" />
        </button>
      </div>
      {menu && (
        <div className="block md:hidden absolute top-0 left-0 h-screen w-[80%] bg-pryColor text-white overflow-y-auto">
          <div className="flex flex-col gap-4 p-2">
            <button onClick={() => setMenu(false)} className="">
              <IoReturnDownBackSharp size={25} />
            </button>
            {/* links */}
            <div className="flex flex-col gap-6 text-xs">
              <button
                onClick={() => handleNavigate("/")}
                className={`${pathname === "/" ? "linkFocus" : "links"} z-10`}
              >
                <div className="flex items-center gap-2 pl-2">
                  <DashIcon fill={pathname === "/" ? "#1A88E1" : "white"} />
                  <p>Dashboard</p>
                </div>
              </button>

              <div className="z-10 flex flex-col gap-4 cursor-pointer">
                <div
                  onClick={() => setOpenCustomer(!openCustomer)}
                  className={`links flex items-center gap-2 pl-2`}
                >
                  <CustomerIcon />
                  <p>Customer Management</p>
                  <GoTriangleDown />
                </div>
                {openCustomer && (
                  <div className="flex flex-col gap-4 text-xs lg:text-sm">
                    {customerLinks?.map((link) => (
                      <button
                        key={link?.id}
                        onClick={() => handleNavigate(link?.path)}
                        className={`${
                          pathname === link?.path
                            ? "subLinkFocus"
                            : "links ml-6 lg:ml-10"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {
                            <link.icon
                              fill={
                                pathname === link?.path ? "#1A88E1" : "white"
                              }
                            />
                          }
                          <p>{link?.name}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigate("/account-management")}
                className={`${
                  pathname === "/account-management" ? "linkFocus" : "links"
                }`}
              >
                <div className="flex items-center gap-2 pl-2">
                  <AccountIcon
                    fill={
                      pathname === "/account-management" ? "#1A88E1" : "white"
                    }
                  />
                  <p>Account Management</p>
                </div>
              </button>

              <div className="">
                <div className="links flex items-center gap-2 pl-2">
                  <OperationIcon />
                  <p>Operation</p>
                  <GoTriangleDown />
                </div>
              </div>

              <div className="">
                <div className="links flex items-center gap-2 pl-2">
                  <CreditIcon />
                  <p>Credit</p>
                  <GoTriangleDown />
                </div>
              </div>

              <div className="">
                <div className="links flex items-center gap-2 pl-2">
                  <AdministrationIcon />
                  <p>Administration</p>
                  <GoTriangleDown />
                </div>
              </div>

              <button
                onClick={() => handleNavigate("/settings")}
                className={`${
                  pathname === "/settings" ? "linkFocus" : "links"
                }`}
              >
                <div className="flex items-center gap-2 pl-2">
                  <SettingsIcon
                    stroke={pathname === "/settings" ? "#1A88E1" : "white"}
                  />
                  <p>Settings</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
