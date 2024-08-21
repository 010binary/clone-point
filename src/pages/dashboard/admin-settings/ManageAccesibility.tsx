import React, { useState } from "react";
import SettingsSidebar from "../../../components/templates/admin/SettingsSidebar";
import DashboardLayout from "../layout";
import SelectInput from "../../../components/ui/select-input/SelectInput";

const ManageAccesibility = () => {
  const branches = [
    {
      name: "Joy Essien",
      address: "Ilupeju",
      city: "Post Transaction",
    },
    {
      name: "Michael Thompson",
      address: "Ilupeju",
    },
    {
      name: "Joy Essien",
      address: "Ilupeju",
    },
  ];

  const [toggledStates, setToggledStates] = useState(branches.map(() => false));
  const [isAllToggled, setIsAllToggled] = useState(false);

  const toggleAll = () => {
    setIsAllToggled(!isAllToggled);
  };

  const toggle = (index: number) => {
    setToggledStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Activity Log</h6>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pb-40">
          <SettingsSidebar />

          <div className="flex flex-col items-end mt-10 md:w-[70%]">
            <div className="flex w-full justify-between items-center">
              <h6 className="text-lg font-medium">
                Give other users permission to access every section
              </h6>
              <button
                onClick={toggleAll}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                  isAllToggled ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    isAllToggled ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-10 w-full">
              <h6 className="text-lg font-medium">
                Access limited to assigned controls only
              </h6>
              <form action="" className="flex flex-col gap-3 w-96">
                <SelectInput  label="Control" options={[{label: "Operation", value: "Operation"}]}></SelectInput>
                <SelectInput  label="User" options={[{label: "Operation", value: "Operation"}]}></SelectInput>
                <SelectInput  label="Branch" options={[{label: "Operation", value: "Operation"}]}></SelectInput>
              </form>
            </div>

            <div className="mt-5 pb-20 w-full overflow-x-scroll md:overflow-x-hidden">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-[#E4F1FB]">
                  <tr className="border border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      User <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Branch <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Edit <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {branches.map((branch, index) => (
                    <React.Fragment key={index}>
                      <tr className="h-6"></tr>
                      <tr
                        key={index}
                        className="hover:bg-primary-light cursor-pointer hover:text-white border border-gray-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                          {branch.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                          {branch.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                          <button
                            onClick={() => toggle(index)}
                            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                              toggledStates[index]
                                ? "bg-primary"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                                toggledStates[index]
                                  ? "translate-x-5"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => toggle(index)}
                            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                              toggledStates[index]
                                ? "bg-primary"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                                toggledStates[index]
                                  ? "translate-x-5"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
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
    </DashboardLayout>
  );
};

export default ManageAccesibility;
