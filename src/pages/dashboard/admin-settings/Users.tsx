import React, { useState } from "react";
import SettingsSidebar from "../../../components/templates/admin/SettingsSidebar";
import DashboardLayout from "../layout";
import ViewTitle from "../../../components/templates/admin-settings/ViewTitle";
import User from "../../../assets/icons/user.svg";
import CreateUser from "../../../components/templates/admin-settings/User";

const Users = () => {
  const [showAddTitle, setshowAddTitle] = useState<boolean>(false);
  const [showViewAccountType, setShowViewAccountType] =
    useState<boolean>(false);
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

  const users = [
    {
      name: "Adebisi Mario",
      address: "Customer management",
      city: "Okota",
    },
    {
      name: "Adebisi Mario",
      address: "Customer management",
      city: "Okota",
    },
    {
      name: "Adebisi Mario",
      address: "Customer management",
      city: "Okota",
    },
  ];

  const handleshowAddTitle = () => {
    setshowAddTitle(!showAddTitle);
  };

  const handleShowViewAccountType = () => {
    setShowViewAccountType(!showViewAccountType);
  };

  const handleRowClick = (index: number) => {
    setActiveRowIndex(index === activeRowIndex ? null : index);
  };

  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5  md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Settings</h6>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pb-40">
          <SettingsSidebar />

          <div className="flex flex-col items-start mt-10 md:w-[70%] md:py-10">
            <p className="text-[#575757] mb-5">
              Assign role control to other users
            </p>
            <div className="flex gap-10">
              <button
                onClick={handleshowAddTitle}
                className="flex items-center gap-4 border rounded-lg px-4 py-2"
              >
                <p className="text-sm font-semibold">Add user</p>
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <i className="ri-add-line text-white"></i>
                </div>
              </button>
            </div>
            <div className="mt-5 pb-20 w-full overflow-x-scroll md:overflow-x-hidden">
              <table className="w-full">
                <tbody className="bg-white">
                  {users.map((user, index) => (
                    <React.Fragment key={index}>
                      <tr className="h-6"></tr>
                      <tr
                        onClick={() => handleRowClick(index)}
                        className={`hover:bg-[#424A521F] cursor-pointer ${
                          activeRowIndex === index ? "bg-[#424A521F]" : ""
                        }`}
                      >
                        <td className="px-6 py-4 flex flex-col items-center gap-4 whitespace-nowrap text-xs font-semibold">
                          <div className="flex gap-2 items-center">
                            <img src={User}></img>
                            {user.name}
                          </div>
                          {activeRowIndex === index && (
                            <button className="bg-red-600 text-white px-10 py-2 rounded w-fit">
                              Delete user
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4  whitespace-nowrap text-xs font-semibold">
                          <div>{user.address}</div>
                          {activeRowIndex === index && (
                            <button
                              onClick={handleshowAddTitle}
                              className="bg-[#575757] mt-4 text-white px-10 py-2 rounded w-fit"
                            >
                              Change control
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 items-center whitespace-nowrap text-xs font-semibold">
                          <div>{user.city}</div>
                          {activeRowIndex === index && (
                            <button
                              onClick={handleshowAddTitle}
                              className="bg-[#575757] mt-4 text-white px-10 py-2 rounded w-fit"
                            >
                              Change branch
                            </button>
                          )}
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
              <CreateUser callBack={handleshowAddTitle} />
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

export default Users;
