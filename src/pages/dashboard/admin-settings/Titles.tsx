import React, { useState } from "react";
import SettingsSidebar from "../../../components/templates/admin/SettingsSidebar";
import DashboardLayout from "../layout";
import CreateTitle from "../../../components/templates/admin-settings/CreateTittle";
import ViewTitle from "../../../components/templates/admin-settings/ViewTitle";

const Titles = () => {
  const [showAddTitle, setshowAddTitle] = useState<boolean>(false);
  const [showViewAccountType, setShowViewAccountType] =
    useState<boolean>(false);

  const branches = [
    {
      name: "1",
      address: "Mr",
      city: "",
    },
    {
      name: "2",
      address: "Dr",
      city: "",
    },
    {
      name: "3",
      address: "Cheif",
      city: "",
    },

    {
      name: "4",
      address: "Chief",
      city: "",
    },
  ];

  const handleshowAddTitle = () => {
    setshowAddTitle(!showAddTitle);
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
          <h6 className="font-bold text-black px-6">List Titles</h6>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pb-40">
          <SettingsSidebar />

          <div className="flex flex-col items-end mt-10 md:w-[60%]">
            <div className="flex gap-10">
              <button
                onClick={handleshowAddTitle}
                className="flex items-center gap-4 border rounded-lg px-4 py-2"
              >
                <p className="text-sm font-semibold">Create</p>
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <i className="ri-add-line text-white"></i>
                </div>
              </button>

              <div className="flex gap-10">
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
            </div>
            <div className="mt-5 pb-20 w-full overflow-x-scroll md:overflow-x-hidden">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-[#E4F1FB]">
                  <tr className="border border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      ID <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Title <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Description <i className="ri-arrow-drop-down-fill"></i>
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
        {showAddTitle && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-10 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <CreateTitle callBack={handleshowAddTitle} />
            </div>
          </>
        )}

        {showViewAccountType && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-10 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <ViewTitle callBack={handleShowViewAccountType} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Titles;
