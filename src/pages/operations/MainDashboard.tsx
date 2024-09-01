import DashboardLayout from "./layout";
import Customer from "../../assets/icons/Frame 121.png";
import OfficeIcon from "../../assets/icons/Frame 122.png";
import PaymentIcon from "../../assets/icons/Frame 123.png";
import LoanIcon from "../../assets/icons/Frame 124.png";
import ReactApexChart from "react-apexcharts";
import React, { useState } from "react";
import TextInput from "../../components/ui/text-input/TextInput";
import SelectInput from "../../components/ui/select-input/SelectInput";
import { ApexOptions } from "apexcharts";
import BaseButton from "../../components/ui/base-button/BaseButton";
import Action from "../../assets/icons/action.svg";

const OperationsDashboard = () => {
  const [options] = useState<ApexOptions>({
    chart: {
      type: "donut",
    },
    labels: ["Approved", "Processing"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const [activeAction, setActiveAction] = useState(null);

  const handleActionClick = (index: any) => {
    setActiveAction(activeAction === index ? null : index);
  };

  const [series] = useState([28000, 18000]);

  const branches = [
    {
      agent: "B1230",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Credit",
      glCode: "1003",
    },
    {
      agent: "B1230",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Credit",
      glCode: "1003",
    },
    {
      agent: "B1230",
      date: "06/11/2023 9:14 AM",
      accountNumber: "1022022820",
      inputter: "Joy Essien",
      amount: "NGN  20,000",
      transactionType: "Credit",
      glCode: "1003",
    },
  ];

  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Today</h6>
        </div>

        <div className="flex flex-wrap flex-row items-start gap-4 py-10">
          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 items-center justify-center px-8 py-4">
            <img src={Customer} alt="Customer Icon" />
            <div>
              <p className="text-center text-gray-500">All Transactions</p>
              <p className="text-center text-gray-900 font-bold">
                NGN 120,000:00
              </p>
            </div>
          </div>

          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 items-center justify-center px-8 py-4">
            <img src={OfficeIcon} alt="Office Icon" />
            <div>
              <p className="text-center text-gray-500">Cash Receipts</p>
              <p className="text-center text-gray-900 font-bold">
                NGN 70,000:00
              </p>
            </div>
          </div>

          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 items-center justify-center px-8 py-4">
            <img src={PaymentIcon} alt="Payment Icon" />
            <div>
              <p className="text-center text-gray-500">Cash Payments</p>
              <p className="text-center text-gray-900 font-bold">
                NGN 20,000:00
              </p>
            </div>
          </div>

          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 items-center justify-center px-8 py-4">
            <img src={LoanIcon} alt="Loan Icon" />
            <div>
              <p className="text-center text-gray-500">Loan Collections</p>
              <p className="text-center text-gray-900 font-bold">
                NGN 20,000:00
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-12 mb-10">
          <div className="shadow border p-5 w-1/2 h-fit">
            <div className="">
              <h2 className="font-bold mb-8">Loan Enrollment</h2>
              <ReactApexChart options={options} series={series} type="donut" />
            </div>
          </div>

          <div className="shadow border p-5 w-1/2 ">
            <div className="">
              <h2 className="font-bold mb-8">Loan Calculator</h2>
              <form action="" className="flex flex-col gap-2">
                <TextInput
                  label="Amount"
                  width="w-full"
                  placeholder="Enter Amount (NGN)"
                />
                <SelectInput
                  label="Tenure"
                  width="w-full"
                  options={[
                    { label: "Yearly", value: "Yearly" },
                    { label: "Monthly", value: "Monthly" },
                  ]}
                />
                <TextInput
                  label="Amount"
                  width="w-full"
                  placeholder="Enter Amount (NGN)"
                />
                <TextInput
                  label="Interest Rate"
                  width="w-full"
                  placeholder="Interest Rate"
                />
                <TextInput
                  label="Repayment"
                  width="w-full"
                  placeholder="Enter Repayment Amount"
                />
                <SelectInput
                  label="Pay Back Rate"
                  width="w-full"
                  options={[
                    { label: "Yearly", value: "Yearly" },
                    { label: "Monthly", value: "Monthly" },
                  ]}
                />
                <BaseButton type="submit" className="mt-2 w-full bg-primary">
                  <p className="w-96">Calculate</p>
                </BaseButton>
              </form>
            </div>
          </div>
        </div>

        <div className="shadow mb-60 px-5">
          <div className="flex justify-between">
            <h4 className="font-bold">Recent Transactions</h4>
            <h2 className="text-primary">View all</h2>
          </div>

          <div className="mt-5 pb-20 md:overflow-x-hidden overflow-x-scroll">
            <table className="min-w-full  divide-y divide-gray-200">
              <thead className="bg-[#E4F1FB]">
                <tr className="border border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                    Transaction ID <i className="ri-arrow-drop-down-fill"></i>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                    Payment Date <i className="ri-arrow-drop-down-fill"></i>
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
                    Type <i className="ri-arrow-drop-down-fill"></i>
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
                                  <a href="/admin/operation/view-transactions-report">
                                    View
                                  </a>
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
      </div>
    </DashboardLayout>
  );
};

export default OperationsDashboard;
