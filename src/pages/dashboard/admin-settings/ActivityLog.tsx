import React from "react";
import SettingsSidebar from "../../../components/templates/admin/SettingsSidebar";
import DashboardLayout from "../layout";

const ActivityLog = () => {

  const branches = [
    {
      name: "03/23/2022  10:00 AM",
      address: "Operation",
      city: "Post Transaction",
    },
    {
        name: "03/23/2022  10:00 AM",
        address: "Admin",
        city: "Created a user",
      },
      {
        name: "03/23/2022  10:00 AM",
        address: "Customer management",
        city: "Created a new customer",
      },
      {
        name: "03/23/2022  10:00 AM",
        address: "Operation",
        city: "Login",
      },
  ];

  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5  md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Activity Log</h6>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pb-40">
          <SettingsSidebar />

          <div className="flex flex-col items-end mt-10 md:w-[60%]">
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

            <div className="mt-5 pb-20 w-full overflow-x-scroll md:overflow-x-hidden">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-[#E4F1FB]">
                  <tr className="border border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Time <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      User{" "}
                      <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                      Activity Description <i className="ri-arrow-drop-down-fill"></i>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {branches.map((branch, index) => (
                    <React.Fragment key={index}>
                      <tr className="h-6"></tr>
                      <tr
                        key={index}
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
    </DashboardLayout>
  );
};

export default ActivityLog;
