import React, { useState } from "react";
import DashboardLayout from "../layout";
import shareIcon from "../../../assets/icons/share.svg";
import TextInput from "../../../components/ui/text-input/TextInput";
import Action from "../../../assets/icons/action.svg";

const TransactionReport = () => {
  const [activeAction, setActiveAction] = useState(null);

  const handleActionClick = (index: any) => {
    setActiveAction(activeAction === index ? null : index);
  };

  const branches = [
    {
      transactionId: "B02337",
      date: "06/11/2023  9:14 AM",
      type: "Deposit",
      customer: "Blessed Okonette Okon",
      description: "Deposit cash",
      glCode: "1002",
      amount: "NGN 20,000",
    },
    {
      transactionId: "B02337",
      date: "06/11/2023  9:14 AM",
      type: "Deposit",
      customer: "Blessed Okonette Okon",
      description: "Deposit cash",
      glCode: "1002",
      amount: "NGN 20,000",
    },
    {
      transactionId: "B02337",
      date: "06/11/2023  9:14 AM",
      type: "Deposit",
      customer: "Blessed Okonette Okon",
      description: "Deposit cash",
      glCode: "1002",
      amount: "NGN 20,000",
    },
    {
      transactionId: "B02337",
      date: "06/11/2023  9:14 AM",
      type: "Deposit",
      customer: "Blessed Okonette Okon",
      description: "Deposit cash",
      glCode: "1002",
      amount: "NGN 20,000",
    },
    {
      transactionId: "B02337",
      date: "06/11/2023  9:14 AM",
      type: "Deposit",
      customer: "Blessed Okonette Okon",
      description: "Deposit cash",
      glCode: "1002",
      amount: "NGN 20,000",
    },
    {
      transactionId: "B02337",
      date: "06/11/2023  9:14 AM",
      type: "Deposit",
      customer: "Blessed Okonette Okon",
      description: "Deposit cash",
      glCode: "1002",
      amount: "NGN 20,000",
    },
  ];

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Transaction Report</h6>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="hidden md:block">
            <p className="text-sm font-bold">From 04/11/2022 to 06/11/2022</p>
          </div>

          <div className="flex  items-center gap-4">
            <div className="flex items-center px-4 py-2 gap-2 bg-primary-dark">
              <select
                name=""
                id=""
                className="bg-transparent text-white border-none outline-none w-full"
              >
                <option value="">All</option>
              </select>
            </div>

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
                  Transaction ID <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Date and Time <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Transaction Type <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Customer
                  <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Description <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  GL Code <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Amount <i className="ri-arrow-drop-down-fill"></i>
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
                      {branch.transactionId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.glCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.amount}
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
                                <a href="/admin/reports/transaction-report/view">
                                  View
                                </a>
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

export default TransactionReport;
