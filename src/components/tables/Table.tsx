"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { MdMoreVert } from "react-icons/md";

interface Header {
  key: string;
  label: string;
}

type Props = {
  headers: Header[];
  data: any[];
  click?: boolean;
  onView?: () => void;
};

const Table = ({ headers, data, click }: Props) => {
  const [dropdownUserId, setDropdownUserId] = useState<number | null>(null);
  const [acctMgtId, setAcctMgtId] = useState<number | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const acctDetailsref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  // console.log("data table==", data);

  const handleDrop = (id: number) => {
    if (pathname.includes("individual") || pathname.includes("corporate")) {
      setDropdownUserId(dropdownUserId === id ? null : id);
    }
  };

  const handleAccMgtView = (id: number) => {
    if (pathname.includes("account-management")) {
      setAcctMgtId(acctMgtId === id ? null : id);
    }
  };

  useEffect(() => {
    const hideOnClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setDropdownUserId(null);
      }
      if (
        acctDetailsref.current &&
        !acctDetailsref.current.contains(e.target as Node)
      ) {
        setAcctMgtId(null);
      }
    };
    document.addEventListener("click", hideOnClickOutside, true);
    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  return (
    <div className="w-full">
      <table className="w-full border-separate border-spacing-y-4">
        <thead className="border bg-[#1A88E11F]">
          <tr>
            {headers?.map((header) => (
              <th
                key={header?.key}
                className="text-left text-black font-medium px-4 py-3 text-xs lg:text-sm"
              >
                <span className="flex items-center gap-3">
                  {header.label}
                  <GoTriangleDown />
                </span>
              </th>
            ))}
            {click && <th></th>}
          </tr>
        </thead>
        <tbody className="">
          {data?.map((dt, idx) => (
            <tr
              key={dt?.id ? dt?.id : idx}
              className="bg-white text-xs lg:text-sm relative"
            >
              {headers?.map((hd, i) => (
                <td key={i} className="px-4 py-3 border-y">
                  {dt[hd.key]}
                </td>
              ))}
              {click && (
                <td
                  onClick={() => {
                    return handleDrop(dt?.id), handleAccMgtView(dt?.id);
                  }}
                  className="border-y cursor-pointer"
                >
                  <MdMoreVert />
                </td>
              )}
              {/* for customer mgt */}
              {dropdownUserId === dt?.id && (
                <td className="absolute shadow bg-white rounded-md top-[2rem] right-1 z-50">
                  <div
                    ref={dropDownRef}
                    style={{ boxShadow: "0px 0px 5px -2px gray" }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <Link
                      href={`${
                        pathname.includes("individual")
                          ? `/customer-management/individual/${dt?.id}`
                          : `/customer-management/corporate/${dt?.id}`
                      }`}
                      className="hover:bg-[#f4f1f1] w-full py-1.5 px-6"
                    >
                      View
                    </Link>
                    <p className="hover:bg-[#f4f1f1] w-full py-1.5 px-6">
                      Edit
                    </p>
                    <p className="hover:bg-[#f4f1f1] w-full py-1.5 px-6">
                      Delete
                    </p>
                  </div>
                </td>
              )}
              {/* for account mgt page */}
              {acctMgtId === dt?.id && (
                <td className="absolute shadow bg-white rounded-md top-[2rem] right-1 z-50">
                  <div
                    ref={acctDetailsref}
                    style={{ boxShadow: "0px 0px 5px -2px gray" }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <Link
                      href={`${
                        pathname.includes("account-management") &&
                        `/account-management/${dt?.id}`
                      }`}
                      className="hover:bg-[#f4f1f1] w-full py-1.5 px-6"
                    >
                      View
                    </Link>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
