import React from "react";
import DashboardLayout from "../layout";
import shareIcon from "../../../assets/icons/share.svg";
import SelectInput from "../../../components/ui/select-input/SelectInput";

const TrialBalance = () => {
  const trialBalance = [
    {
      type: "Asset",
      accountName: "Cash in Vault",
      glCode: "10033",
      debit: "500,000",
      credit: "",
    },
    {
      type: "Asset",
      accountName: "Cash in Vault",
      glCode: "10033",
      debit: "",
      credit: "60,000",
    },
    {
      type: "Asset",
      accountName: "Cash in Vault",
      glCode: "10033",
      debit: "500,000",
      credit: "",
    },
    {
      type: "Asset",
      accountName: "Cash in Vault",
      glCode: "10033",
      debit: "",
      credit: "60,000",
    },
    {
      type: "Asset",
      accountName: "Cash in Vault",
      glCode: "10033",
      debit: "500,000",
      credit: "",
    },
  ];

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-hidden md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Trial Balance</h6>
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
              <SelectInput
                width="w-60"
                label="Branch"
                options={[{ value: "All", label: "All" }]}
              />
            </div>
          </form>
        </div>

        <div className="mt-5 pb-20 overflow-x-scroll">
          <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-primary-dark text-white">
              <tr className="border border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Account Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                  GL Code
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                  (NGN) Debit
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                  (NGN) Credit
                </th>
              </tr>
            </thead>
            <tbody className="bg-primary-light divide-y divide-gray-200">
              {trialBalance.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="h-6"></tr>
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border border-gray-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.accountName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.glCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-xs font-semibold text-red-500">
                      {item.debit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-green-600">
                      {item.credit}
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

export default TrialBalance;
