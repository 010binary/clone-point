"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { MdMoreVert } from "react-icons/md";
import { Modal } from "../modal/Modal";
import { FaXmark } from "react-icons/fa6";

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

const title = 'EDIT'
const description = 'Edit Branch'
const deleteTitle = 'DELETE'
const deleteDescription = 'Are you sure you want to delete this BRANCH?'
const viewTitle = 'View'
const viewDescription = 'View Branch'

const Table = ({ headers, data, click }: Props) => {
  const [dropdownUserId, setDropdownUserId] = useState<number | null>(null);
  const [acctMgtId, setAcctMgtId] = useState<number | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const acctDetailsref = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  // console.log("data table==", data);

  const handleDrop = (id: number) => {
    // if (pathname.includes("individual") || pathname.includes("corporate")) {
    if (true) {
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

  const [editModal, seteditModal] = useState(false)
  const [deleteModal, setdeleteModal] = useState(false)
  const [viewModal, setviewModal] = useState(false)

  return (
    <div className="w-full">
      {/* WEEEEE */}
       <Modal show={editModal} onClose={seteditModal} >
                <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                    <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                        <h1 className=' text-lg'>{title}</h1>
                        <FaXmark onClick={()=>seteditModal(false)} className=' size-7' />
                    </header>
                    <main className=' px-2 space-y-5'>
                        <h4 className=' font-medium py-3 text-lg'>{description}</h4>
                       <div className=" space-y-7">
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Branch Name</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-2 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Branch Address</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">City</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Customer service manager</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between  text-xs md:text-sm lg:text-base">
                            <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
                                <p className="px-3 py-3  border-r min-w-[150px] text-xs md:min-w-[150px]">Operation manager</p>
                                <div className="flex items-center w-full">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="cta space-y-5 pt-20">
                            <button className=' w-full bg-pryColor font-medium text-white rounded-xl py-3'>Create</button>
                            <button className=' w-full text-pryColor font-medium border border-pryColor rounded-xl py-3'>Delete</button>
                        </div>
                    </main>

                </section>
            </Modal>
      {/* delete sjds*/}
       <Modal show={deleteModal} onClose={setdeleteModal}>
                <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                    <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                        <h1 className=' text-lg'>{deleteTitle}</h1>
                        <FaXmark onClick={()=>setdeleteModal(false)} className=' size-7' />
                    </header>
                    <main className=' px-2'>
                        <h4 className=' font-medium py-3 text-lg'>{deleteDescription}</h4>

                        <div className="cta space-y-5 pt-20">
                            <button className=' w-full bg-red-600 font-medium text-white rounded py-3'>Delete</button>
                            <button className=' w-full text-pryColor font-medium border border-pryColor rounded py-3'>Create</button>
                        </div>
                    </main>

                </section>
            </Modal>
      {/* view sjds*/}
       <Modal show={viewModal} onClose={setviewModal}>
                <section className="w-screen max-w-[600px]  mx-5  pb-10  bg-white">
                    <header className=' px-5 py-3 flex justify-between items-center  bg-pryColor font-semibold text-white'>
                        <h1 className=' text-lg'>{viewTitle}</h1>
                        <FaXmark onClick={()=>setdeleteModal(false)} className=' size-7' />
                    </header>
                    <main className=' px-2 pb-10'>
                        <h4 className=' font-medium py-3 pb-5 text-lg'>{viewDescription}</h4>
                        <div className="grid grid-cols-2 gap-5">
                          <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                          </p>
                          <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                          </p>
                          <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                          </p>
                          <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                          </p>
                          <p className="">
                            <strong> Branch Name:</strong> <br />
                            <span className=" opacity-70"> Kingstone Bank</span>
                          </p>
                        </div>
                    </main>

                </section>
            </Modal>




















      {/* table */}
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
                    <button
                      // href={`${pathname.includes("individual")
                      //   ? `/customer-management/individual/${dt?.id}`
                      //   : `/customer-management/corporate/${dt?.id}`
                      //   }`}
                      onClick={()=>setviewModal(true)}
                      className="hover:bg-[#f4f1f1] w-full py-1.5 px-6"
                    >
                      View
                    </button>
                    <p
                    onClick={()=>seteditModal(true)}
                    className="hover:bg-[#f4f1f1] w-full py-1.5 px-6">
                      Edit
                    </p>
                    <p
                    onClick={()=>setdeleteModal(true)}
                    className="hover:bg-[#f4f1f1] w-full py-1.5 px-6">
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
