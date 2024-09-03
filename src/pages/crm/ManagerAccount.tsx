import React, { useState } from "react";
import DashboardLayout from "./layout";
import shareIcon from "../../assets/icons/share.svg";
import Action from "../../assets/icons/action.svg";
import CreateNewAccount from "../../components/templates/crm/CreateNewAccount";
import EditAccount from "../../components/templates/crm/EditAccount";

const ManagerAccount = () => {
  const [activeAction, setActiveAction] = useState(null);
  const [createCustomer, setCreateCustomer] = useState(false);
  const [showEditAccount, setShowEditAccount] = useState(false);

  const handleActionClick = (index: any) => {
    setActiveAction(activeAction === index ? null : index);
  };

  const handleShowCreateCustomer = () => {
    setCreateCustomer(!createCustomer);
  };

  const handleShowEditCustomer = () => {
    setShowEditAccount(!createCustomer);
  };
  const customer = [
    {
      number: "2012001233",
      balance: "NGN  20,000",
      type: "Savings",
      customer: "Customer",
      branch: "Ilupeju",
      manager: "Philip Mathew",
    },
    {
      number: "2012001233",
      balance: "NGN  20,000",
      type: "Savings",
      customer: "Customer",
      branch: "Ilupeju",
      manager: "Philip Mathew",
    },
    {
      number: "2012001233",
      balance: "NGN  20,000",
      type: "Savings",
      customer: "Customer",
      branch: "Ilupeju",
      manager: "Philip Mathew",
    },
    {
      number: "2012001233",
      balance: "NGN  20,000",
      type: "Savings",
      customer: "Customer",
      branch: "Ilupeju",
      manager: "Philip Mathew",
    },
    {
      number: "2012001233",
      balance: "NGN  20,000",
      type: "Savings",
      customer: "Customer",
      branch: "Ilupeju",
      manager: "Philip Mathew",
    },
    {
      number: "2012001233",
      balance: "NGN  20,000",
      type: "Savings",
      customer: "Customer",
      branch: "Ilupeju",
      manager: "Philip Mathew",
    },
    {
      number: "2012001233",
      balance: "NGN  20,000",
      type: "Savings",
      customer: "Customer",
      branch: "Ilupeju",
      manager: "Philip Mathew",
    },
  ];

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Account Details</h6>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex w-full items-center justify-end gap-4">
            <button className="flex items-center px-4 py-2 gap-2 border border-[#1A88E1]">
              <img src={shareIcon} alt="" />
              <p className="text-[#1A88E1] font-medium">Export as Pdf</p>
            </button>
          </div>
        </div>

        <div className="flex mt-6 flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleShowCreateCustomer}
              className="flex items-center gap-4 border rounded-lg px-4 py-2"
            >
              <p className="text-sm font-semibold">Create Account</p>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <i className="ri-add-line text-white"></i>
              </div>
            </button>
          </div>

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
                  Number <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Balance <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Type <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Customer <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Branch <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Manager <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="pl-6 py-4 text-left text-xs font-semiboldm textblack0 uppercase tracking-wider">
                  <i className="ri-arrow-drop-down-fill text-3xl"></i>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customer.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="h-6"></tr>
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border border-gray-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.balance}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.branch}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.manager}
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
                                <a href="/admin/crm/view-details">View</a>
                              </li>
                              <li
                                className="font-bold text-sm"
                                onClick={handleShowEditCustomer}
                              >
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

      <div className="flex items-center justify-center">
        {createCustomer && (
          <>
            <div className="w-full h-full bg-opacity-70 z-0 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <CreateNewAccount callBack={handleShowCreateCustomer} />
            </div>
          </>
        )}

        {showEditAccount && (
          <>
            <div className="w-full h-full bg-opacity-70 z-0 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <EditAccount callBack={handleShowEditCustomer} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ManagerAccount;
