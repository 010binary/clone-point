import React, { useState } from "react";
import DashboardLayout from "./layout";
import shareIcon from "../../assets/icons/share.svg";
import TextInput from "../../components/ui/text-input/TextInput";
import Action from "../../assets/icons/action.svg";

const TransactionsReport = () => {
  const [activeAction, setActiveAction] = useState(null);

  const handleActionClick = (index: any) => {
    setActiveAction(activeAction === index ? null : index);
  };

  const branches = [
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
    {
      agent: "Musthapha John",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Deposit",
      glCode: "1003",
    },
  ];

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Today’s Transaction</h6>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="hidden md:block">
            <p className="text-sm">
              Total: <span className="font-bold">250</span>
            </p>
          </div>

          <div className="flex  items-center gap-4">
            <button className="flex items-center px-4 py-2 gap-2 border border-[#1A88E1]">
              <img src={shareIcon} alt="" />
              <p className="text-[#1A88E1] font-medium">Export as Pdf</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <form action="">
            <div>
              <label className="font-medium">Transaction Id</label>
              <TextInput width="w-full" placeholder="Enter Transaction ID" />
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
                  Agent <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Date And Time <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Account Number<i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Inputter <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Amount <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Transaction Type <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  GL Code<i className="ri-arrow-drop-down-fill"></i>
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
                      {branch.agent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.accountNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.inputter}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.transactionType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {branch.glCode}
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
                                <a href="/admin/operation/view-transactions-report">View</a>
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

export default TransactionsReport;
