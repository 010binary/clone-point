import React, { useState } from "react";
import DashboardLayout from "../layout";
import plusIcon from "../../../assets/icons/plus.svg";
import shareIcon from "../../../assets/icons/share.svg";
import TextInput from "../../../components/ui/text-input/TextInput";
import Action from "../../../assets/icons/action.svg";
import AddTeller from "../../../components/templates/admin/AddTeller";
import EditTeller from "../../../components/templates/admin/EditTeller";
import AddInterest from "../../../components/templates/admin/AddInterest";
import ViewInterest from "./ViewInterestRate";
import EditInterest from "../../../components/templates/admin/EditInterest";

const InterestRate = () => {
  const [activeAction, setActiveAction] = useState(null);
  const [showAddTeller, setShowAddTeller] = useState(false);
  const [showEditTeller, setShowEditTeller] = useState(false);

  const handleShowAddTeller = () => {
    setShowAddTeller(!showAddTeller);
  };

  const handleShowEditTeller = () => {
    setShowEditTeller(!showEditTeller);
  };

  const handleActionClick = (index: any) => {
    setActiveAction(activeAction === index ? null : index);
  };

  const tnx = [
    {
      txId: "B02337",
      startDate: "06/11/2023",
      endDate: "06/11/2023",
      accountNumber: "1022022820",
      rate: "5%",
      amount: "NGN 200,000",
      type: "Credit",
    },
    {
        txId: "B02337",
        startDate: "06/11/2023",
        endDate: "06/11/2023",
        accountNumber: "1022022820",
        rate: "5%",
        amount: "NGN 200,000",
        type: "Credit",
      },
      {
        txId: "B02337",
        startDate: "06/11/2023",
        endDate: "06/11/2023",
        accountNumber: "1022022820",
        rate: "5%",
        amount: "NGN 200,000",
        type: "Credit",
      },
      {
        txId: "B02337",
        startDate: "06/11/2023",
        endDate: "06/11/2023",
        accountNumber: "1022022820",
        rate: "5%",
        amount: "NGN 200,000",
        type: "Credit",
      },
      {
        txId: "B02337",
        startDate: "06/11/2023",
        endDate: "06/11/2023",
        accountNumber: "1022022820",
        rate: "5%",
        amount: "NGN 200,000",
        type: "Credit",
      },
  ];

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-auto pl-[268px] pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Interests</h6>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div></div>

          <div className="flex items-center gap-4">
            <div
              onClick={() => handleShowAddTeller()}
              className="flex items-center cursor-pointer px-4 py-2 gap-2 border border-[#00000066]"
            >
              <img src={plusIcon} alt="" />
              <p className="text-[#E51919] font-medium">Create</p>
            </div>

            <button className="flex items-center px-4 py-2 gap-2 border border-[#1A88E1]">
              <img src={shareIcon} alt="" />
              <p className="text-[#1A88E1] font-medium">Export as Pdf</p>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <form action="">
            <div>
              <label>Branch</label>
              <TextInput placeholder="Enter branch name" />
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

        <div className="mt-5 pb-20">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E4F1FB]">
              <tr className="border border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Transaction ID <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Start Date <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  End Date <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Account Number <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Rate
                  <i className="ri-arrow-drop-down-fill"></i>
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
              {tnx.map((tnx, index) => (
                <React.Fragment key={index}>
                  <tr className="h-6"></tr>
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border border-gray-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {tnx?.txId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {tnx?.startDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {tnx?.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {tnx?.accountNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {tnx?.rate}
                    </td>
                    <td className="px-6 py-4 text-green-700 whitespace-nowrap text-xs font-semibold">
                      {tnx?.amount}
                    </td>
                    <td className="px-6 py-4 text-green-700 whitespace-nowrap text-xs font-semibold">
                      {tnx?.type}
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
                                <a href="/admin/view-interest">View</a>
                              </li>
                              <li className="font-bold text-sm">
                                <p
                                  className="cursor-pointer"
                                  onClick={handleShowEditTeller}
                                >
                                  Edit
                                </p>
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
        {showAddTeller && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-0 bg-black absolute top-0"></div>
            <div className="z-50 absolute top-24">
              <AddInterest callBack={handleShowAddTeller}></AddInterest>
            </div>
          </>
        )}
        {showEditTeller && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-0 bg-black absolute top-0"></div>
            <div className="z-50 absolute top-24">
              <EditInterest callBack={handleShowEditTeller} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InterestRate;
