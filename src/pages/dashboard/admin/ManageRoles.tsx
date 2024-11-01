import React, { useState } from "react";
import DashboardLayout from "../layout";
import plusIcon from "../../../assets/icons/plus.svg";
import shareIcon from "../../../assets/icons/share.svg";
import TextInput from "../../../components/ui/text-input/TextInput";
import Action from "../../../assets/icons/action.svg";
import CreateManagerRole from "../../../components/templates/admin/CreateManagerRole";
import EditManagerRole from "../../../components/templates/admin/EditManagerRoles";

const ManageRoles = () => {
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

  const user = [
    {
      name: "John Doe",
      phoneNumber: "08097334746",
      emailAddress: "john@gmail.com",
      gender: "Male",
      role: "Manager",
      roleDescription: "Lorem ipsum d.....",
    },
    {
      name: "John Doe",
      phoneNumber: "08097334746",
      emailAddress: "john@gmail.com",
      gender: "Male",
      role: "Manager",
      roleDescription: "Lorem ipsum d.....",
    },
    {
      name: "John Doe",
      phoneNumber: "08097334746",
      emailAddress: "john@gmail.com",
      gender: "Male",
      role: "Manager",
      roleDescription: "Lorem ipsum d.....",
    },
    {
      name: "John Doe",
      phoneNumber: "08097334746",
      emailAddress: "john@gmail.com",
      gender: "Male",
      role: "Manager",
      roleDescription: "Lorem ipsum d.....",
    },
    {
      name: "John Doe",
      phoneNumber: "08097334746",
      emailAddress: "john@gmail.com",
      gender: "Male",
      role: "Manager",
      roleDescription: "Lorem ipsum d.....",
    },
    {
      name: "John Doe",
      phoneNumber: "08097334746",
      emailAddress: "john@gmail.com",
      gender: "Male",
      role: "Manager",
      roleDescription: "Lorem ipsum d.....",
    },
  ];

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Manage Roles</h6>
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

        <div className="flex flex-col md:flex-row gap-3 mt-4 items-center justify-between">
          <form action="">
            <div>
              <label>Roles</label>
              <TextInput placeholder="Search role" />
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E4F1FB]">
              <tr className="border border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                 Name<i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Phone Number <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Email Address <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Gender <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Role
                  <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Role Description <i className="ri-arrow-drop-down-fill"></i>
                </th>
                <th className="pl-6 py-4 text-left text-xs font-semiboldm textblack0 uppercase tracking-wider">
                  <i className="ri-arrow-drop-down-fill text-3xl"></i>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {user.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="h-6"></tr>
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border border-gray-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.emailAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-black">
                      {item.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                      {item.roleDescription}
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
              <CreateManagerRole callBack={handleShowAddTeller}  />
            </div>
          </>
        )}
        {showEditTeller && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-0 bg-black absolute top-0"></div>
            <div className="z-50 absolute top-24">
              <EditManagerRole callBack={handleShowEditTeller} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ManageRoles;
