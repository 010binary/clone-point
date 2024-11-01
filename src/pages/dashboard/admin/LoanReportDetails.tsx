import DashboardLayout from "../layout";
import React from "react";
import shareIcon from "../../../assets/icons/share.svg";
import TextInput from "../../../components/ui/text-input/TextInput";

const LoanReportDetails = () => {
  const details = [
    { label: "Number", value: "20120012033" },
    { label: "Status", value: "Active" },
    { label: "Customer", value: "Blessed Okonette Okon" },
    { label: "Principal Amount", value: "NGN 200,000" },
    { label: "Interest Rate", value: "30%" },
    { label: "Origination Date", value: "04/11/2023" },
    { label: "Tenure", value: "9 months" },
    { label: "Next Payment Due Date", value: "04/11/2023" },
    { label: "Date Added", value: "01/11/2022" },
    { label: "Added By", value: "Blessing Goodness" },
    { label: "Date Updated", value: "" },
    { label: "Updated By", value: "" },
  ];

  const loan = [
    { label: "Total Amount Paid", value: "NGN 200,000" },
    { label: "Total Interest Paid", value: "NGN 16,000" },
    { label: "Remaining Balance", value: "NGN 130,000" },
  ];

  const branches = [
    {
      paymentDate: "04/11/23",
      paymentAmount: "NGN 20,000",
      principal: "NGN 200,000",
      interest: "NGN 2,000",
      balance: "NGN 1 20,000",
    },
    {
      paymentDate: "04/11/23",
      paymentAmount: "NGN 20,000",
      principal: "NGN 200,000",
      interest: "NGN 2,000",
      balance: "NGN 1 20,000",
    },
    {
      paymentDate: "04/11/23",
      paymentAmount: "NGN 20,000",
      principal: "NGN 200,000",
      interest: "NGN 2,000",
      balance: "NGN 1 20,000",
    },
    {
      paymentDate: "04/11/23",
      paymentAmount: "NGN 20,000",
      principal: "NGN 200,000",
      interest: "NGN 2,000",
      balance: "NGN 1 20,000",
    },
    {
      paymentDate: "04/11/23",
      paymentAmount: "NGN 20,000",
      principal: "NGN 200,000",
      interest: "NGN 2,000",
      balance: "NGN 1 20,000",
    },
    {
      paymentDate: "04/11/23",
      paymentAmount: "NGN 20,000",
      principal: "NGN 200,000",
      interest: "NGN 2,000",
      balance: "NGN 1 20,000",
    },
  ];

  return (
    <DashboardLayout>
      <div className="md:pl-[300px] px-5 md:pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">View Details</h6>
        </div>
        <div className="mt-10 w-full">
          <div
            className="px-4 py-2"
            style={{
              background:
                "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
            }}
          >
            <p className="text-white font-semibold">DETAILS</p>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="flex md:flex-row flex-col flex-wrap md:gap-10 gap-6">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex md:w-[45%] justify-between border-b py-1"
                >
                  <span className="font-semibold text-gray-700">
                    {detail.label}
                  </span>
                  <span className="text-gray-900">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div
            className="px-4 py-2"
            style={{
              background:
                "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
            }}
          >
            <p className="text-white font-semibold">LOAN SUMMARY</p>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="space-y-5 gap-20">
              {loan.map((detail, index) => (
                <div
                  key={index}
                  className="flex md:w-[45%] justify-between border-b py-1"
                >
                  <span className="font-semibold text-gray-700">
                    {detail.label}
                  </span>
                  <span className="text-gray-900">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div
            className="px-4 py-2"
            style={{
              background:
                "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
            }}
          >
            <p className="text-white font-semibold">LOAN SUMMARY</p>
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
                    Payment Due Date <i className="ri-arrow-drop-down-fill"></i>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                    Payment Amount <i className="ri-arrow-drop-down-fill"></i>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                    Principal <i className="ri-arrow-drop-down-fill"></i>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                    Interest
                    <i className="ri-arrow-drop-down-fill"></i>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                    Remaining Balance
                    <i className="ri-arrow-drop-down-fill"></i>
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
                        {branch.paymentDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                        {branch.paymentAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                        {branch.principal}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                        {branch.interest}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                        {branch.balance}
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

export default LoanReportDetails;
