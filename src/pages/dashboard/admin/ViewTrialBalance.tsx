import React from "react";
import DashboardLayout from "../layout";
import shareIcon from "../../../assets/icons/share.svg";
import SelectInput from "../../../components/ui/select-input/SelectInput";

const ViewTrialBalance = () => {
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

        <div className="mt-5 w-full pb-20 flex gap-10 overflow-x-scroll">
          <div className="md:w-1/3 w-96">
            <h1 className="font-bold text-center">Description</h1>
            <div className="w-full border mt-2"></div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-bold px-6">Income</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                Internal Transaction Fees
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                Interest Income on Internal Loans
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                Interest Income - My pikin Account
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                SME Loan-Interest Income
              </p>
            </div>

            <div className="bg-primary mt-3">
              <p className="text-center py-1 font-bold px-6">Total Income</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-bold px-6">Fees And Charges</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">Maintenance fee</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">Interest on Loan</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">Internal Transfer</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                External Bank Transfer
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                Income on Fixed Deposit Asset
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                Loan Processing Fee
              </p>
            </div>

            <div className="bg-primary mt-3">
              <p className="text-center py-1 font-bold px-6">
                Total Fees And Charges
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-bold px-6">Expenses</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                Bad debts written off
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">Operating Expenses</p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">
                Board Meeting Expenses
              </p>
            </div>

            <div className="bg-primary-light mt-3">
              <p className="text-center py-1 font-medium">Salaraies</p>
            </div>

            <div className="bg-primary mt-3">
              <p className="text-center py-1 font-bold px-6">Total Expenses</p>
            </div>

            <div className="bg-primary-dark text-white mt-3">
              <p className="text-center py-1 font-bold px-6">Net Profit</p>
            </div>
          </div>

          <div className="md:w-2/3 w-96 flex gap-10">
            <div className="md:w-[30%]">
              <h1 className="font-bold text-center">April</h1>
              <div className="w-full border mt-2"></div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-dark text-white mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>
            </div>

            <div className="md:w-[30%]">
              <h1 className="font-bold text-center">May</h1>
              <div className="w-full border mt-2"></div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-dark text-white mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>
            </div>

            <div className="md:w-[30%]">
              <h1 className="font-bold text-center">June</h1>
              <div className="w-full border mt-2"></div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-4 font-bold"></p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary-light mt-3">
                <p className="text-center py-1 font-medium">
                  NGN 2,50145,00.00
                </p>
              </div>

              <div className="bg-primary mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>

              <div className="bg-primary-dark text-white mt-3">
                <p className="text-center py-1 font-bold px-6">NGN 8,50145,00.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewTrialBalance;
