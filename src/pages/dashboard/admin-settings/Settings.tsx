import React, { useState } from "react";
import SettingsSidebar from "../../../components/templates/admin/SettingsSidebar";
import DashboardLayout from "../layout";
import AddAccountType from "../../../components/templates/admin-settings/AddAccountType";
import ViewAccountType from "../../../components/templates/admin-settings/ViewAccountType";

const Settings = () => {
  const [showAddAccountType, setShowAddAccountType] = useState<boolean>(false);
  const [showViewAccountType, setShowViewAccountType] =
    useState<boolean>(false);

  const branches = [
    {
      name: "Account",
      address: "Saving account type",
      city: "Savings",
    },
    {
      name: "Account",
      address: "Current account type",
      city: "Current",
    },

    {
      name: "Account",
      address: "My pikin account",
      city: "MPK",
    },

    {
      name: "Account",
      address: "Fixed deposit",
      city: "Fixed deposit",
    },
  ];

  const handleShowAddAccountType = () => {
    setShowAddAccountType(!showAddAccountType);
  };

  const handleShowViewAccountType = () => {
    setShowViewAccountType(!showViewAccountType);
  };

  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5  md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">List Types</h6>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pb-40">
          <SettingsSidebar />

          <div className="flex flex-col items-end mt-10 md:w-[60%]">
            <div className="flex gap-10">
              <button
                onClick={handleShowAddAccountType}
                className="flex items-center gap-4 border rounded-lg px-4 py-2"
              >
                <p className="text-sm font-semibold">Create</p>
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <i className="ri-add-line text-white"></i>
                </div>
              </button>
              <div className="flex items-center gap-4">
                <p className="font-semibold text-sm">
                  <span className="text-primary-dark">1 - 4</span> of 4
                </p>

                <div className="">
                  <i className="ri-arrow-drop-left-line text-3xl bg-white border rounded-full mr-2"></i>
                  <i className="ri-arrow-drop-right-line text-3xl bg-white border rounded-full"></i>
                </div>
              </div>
            </div>

            <div className="mt-5 pb-20 w-full overflow-x-scroll">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-[#E4F1FB]">
                  <tr className="border border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Type Code <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Type Description{" "}
                      <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Type Value <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {branches.map((branch, index) => (
                    <React.Fragment key={index}>
                      <tr className="h-6"></tr>
                      <tr
                        key={index}
                        onClick={handleShowViewAccountType}
                        className="hover:bg-primary cursor-pointer hover:text-white border border-gray-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                          {branch.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                          {branch.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                          {branch.city}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {showAddAccountType && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-10 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <AddAccountType callBack={handleShowAddAccountType} />
            </div>
          </>
        )}

        {showViewAccountType && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-10 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <ViewAccountType callBack={handleShowViewAccountType} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
