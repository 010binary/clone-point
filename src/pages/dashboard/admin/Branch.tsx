import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layout";
import plusIcon from "../../../assets/icons/plus.svg";
import shareIcon from "../../../assets/icons/share.svg";
import TextInput from "../../../components/ui/text-input/TextInput";
import Action from "../../../assets/icons/action.svg";

const Branch = () => {
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
      <div className="w-full bg-white dashboard__body overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Branch</h6>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="hidden md:block">
            <p className="text-sm">
              Total: <span className="font-bold">250</span>
            </p>
          </div>

          <div className="flex  items-center gap-4">
            <Link
              to="/admin/add-branch"
              className="flex items-center px-4 py-2 gap-2 border border-[#00000066]"
            >
              <img src={plusIcon} alt="" />
              <p className="text-[#E51919] font-medium">Add new branch</p>
            </Link>

            <button className="flex items-center px-4 py-2 gap-2 border border-[#1A88E1]">
              <img src={shareIcon} alt="" />
              <p className="text-[#1A88E1] font-medium">Export as Pdf</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <form action="">
            <div>
              <label>Branch</label>
              <TextInput width="w-full" placeholder="Enter branch name" />
            </div>
          </form>

          <div className="flex items-center gap-4">
            <p className="font-semibold text-sm">
              <span className="text-primary-dark">1 - 10</span> of 200
            </p>

            <div className="">
              <i className="ri-arrow-drop-left-line text-3xl bg-white border rounded-full mr-2"></i>
              <i className="ri-arrow-drop-right-line text-3xl bg-white border rounded-full"></i>
            </div>
          </div>
        </div>

        <div className="mt-5 pb-20 overflow-x-scroll">
          <table className="min-w-full  divide-y divide-gray-200">
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

export default Branch;
