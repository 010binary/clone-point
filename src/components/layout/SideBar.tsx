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
import { customerLinks } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const SideBar = () => {
  const pathname = usePathname();
  const [openCustomer, setOpenCustomer] = useState(false);

  useEffect(() => {
    const isCustomerPath = customerLinks.some((link) => link.path === pathname);
    if (!isCustomerPath) {
      setOpenCustomer(false);
    }
  }, [pathname]);

  return (
    <div className="hidden md:block md:w-[200px] xl:w-[250px] 2xl:w-[280px] h-full sidebarStyle flex-shrink-0 relative overflow-y-auto">
      <div className="absolute z-0">
        <Image
          src={"/wave.png"}
          alt="wave image"
          width={300}
          height={100}
          className="w-full"
        />
      </div>
      {/* links */}
      <div className="flex flex-col gap-7 pl-1 pr-0.5 mt-28 pb-10 z-10 overflow-y-auto">
        <Link
          href={"/"}
          className={`${pathname === "/" ? "linkFocus" : "links"} z-10`}
        >
          <div className="flex items-center gap-2 pl-2">
            <DashIcon fill={pathname === "/" ? "#1A88E1" : "white"} />
            <p>Dashboard</p>
          </div>
        </Link>
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
                <Link
                  key={link?.id}
                  href={link?.path}
                  className={`${
                    pathname === link?.path
                      ? "subLinkFocus"
                      : "links ml-6 lg:ml-10"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {
                      <link.icon
                        fill={pathname === link?.path ? "#1A88E1" : "white"}
                      />
                    }
                    <p>{link?.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          href={"/account-management"}
          className={`${
            pathname === "/account-management" ? "linkFocus" : "links"
          } z-20`}
        >
          <div className="flex items-center gap-2 pl-2">
            <AccountIcon
              fill={pathname === "/account-management" ? "#1A88E1" : "white"}
            />
            <p>Account Management</p>
          </div>
        </Link>
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
        <Link
          href={"/settings"}
          className={`${pathname === "/settings" ? "linkFocus" : "links"}`}
        >
          <div className="flex items-center gap-2 pl-2">
            <SettingsIcon
              stroke={pathname === "/settings" ? "#1A88E1" : "white"}
            />
            <p>Settings</p>
          </div>
        </Link>
        {/*  */}
      </div>
    </div>
  );
};

export default SideBar;
