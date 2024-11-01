/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layout";
import Action from "../../../assets/icons/action.svg";
import BranchIcon from "../../../assets/icons/branch.png";
import TellerIcon from "../../../assets/icons/tellers.png";
import InterestIcon from "../../../assets/icons/interest.png";
import UserIcon from "../../../assets/icons/users.png";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const tokenFromUrl = urlParams.get("token");

  localStorage.setItem("authToken", tokenFromUrl as string);

  const [activeAction, setActiveAction] = useState(null);

  const handleActionClick = (index: any) => {
    setActiveAction(activeAction === index ? null : index);
  };

  const branches = [
    {
      name: "Keystone Bank",
      address: "50, Isaac street Somolu",
      city: "Lagos",
      customerManager: "Wade Warren",
      operationManager: "John Doe",
    },
    {
      name: "Keystone Bank",
      address: "50, Isaac street Somolu",
      city: "Lagos",
      customerManager: "Wade Warren",
      operationManager: "John Doe",
    },
    {
      name: "Keystone Bank",
      address: "50, Isaac street Somolu",
      city: "Lagos",
      customerManager: "Wade Warren",
      operationManager: "John Doe",
    },
    {
      name: "Keystone Bank",
      address: "50, Isaac street Somolu",
      city: "Lagos",
      customerManager: "Wade Warren",
      operationManager: "John Doe",
    },
    {
      name: "Keystone Bank",
      address: "50, Isaac street Somolu",
      city: "Lagos",
      customerManager: "Wade Warren",
      operationManager: "John Doe",
    },
  ];

  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5  md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Today</h6>
        </div>

        <div className="flex  flex-wrap gap-2 flex-row items-start justify-between py-10">
          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 md:items-start items-center justify-center px-8 py-4">
            <img src={BranchIcon} alt="" />
            <div>
              <p className="text-center">Total Branch</p>
              <h6 className="text-center font-bold">57</h6>
            </div>
          </div>

          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 md:items-start items-center justify-center px-8 py-4">
            <img src={TellerIcon} alt="" />
            <div>
              <p className="text-center">All tellers</p>
              <h6 className="text-center font-bold">25</h6>
            </div>
          </div>

          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 md:items-start items-center justify-center px-8 py-4">
            <img src={InterestIcon} alt="" />
            <div>
              <p className="text-center">Total Interest</p>
              <h6 className="text-center font-bold">49%</h6>
            </div>
          </div>

          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 md:items-start items-center justify-center px-8 py-4">
            <img src={UserIcon} alt="" />
            <div>
              <p className="text-center">All users</p>
              <h6 className="text-center font-bold">250</h6>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-lg text-black font-semibold">Recent Branches</p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/admin/branch">
              <p className="text-primary-dark font-bold">View all</p>
            </Link>
          </div>
        </div>

        <div className="flex">
          <div className="flex">
            <h6></h6>
          </div>
          <div className="flex"></div>
          <div className="flex"></div>
          <div className="flex"></div>
        </div>
        <div className="mt-5 pb-20 overflow-x-scroll md:overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E4F1FB]">
              <tr className="border border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Branch name <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Branch address <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  City <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Customer service Manager{" "}
                  <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Operation manager <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="pl-6 py-4 text-left text-xs font-semiboldm textblack0 uppercase tracking-wider">
                  <i className="ri-arrow-drop-down-fill text-3xl"></i>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {branches.map((branch, index) => (
                <React.Fragment key={index}>
                  <tr className="h-6"></tr>
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border border-gray-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.customerManager}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.operationManager}
                    </td>
                    <td
                      onClick={() => handleActionClick(index)}
                      className="px-6 cursor-pointer py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <div className="text-blue-600 relative hover:text-blue-900">
                        <img src={Action} alt="" />
                        {activeAction === index && (
                          <div className="absolute top-5 left-0 bg-gray-50 z-10 px-4 py-3 shadow-sm">
                            <ul className="flex flex-col gap-2 text-black">
                              <li className="font-bold text-sm">
                                <a href="/admin/view-branch">View</a>
                              </li>
                              <li className="font-bold text-sm">
                                <a href="">Edit</a>
                              </li>
                              <li className="font-bold text-sm">
                                <a href="">Delete</a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
