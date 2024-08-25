import { Link, useLocation } from "react-router-dom";
import ImageBG from "../../../assets/images/admin-top.png";
import { AdminRoute } from "../../../utils/types/admin/admin.types";
import FinMan from "../../../assets/images/finman.png";
import Ezone from "../../../assets/images/ezone.png";
import { useState } from "react";

interface SidebarProps {
  routes: AdminRoute[];
  title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ routes, title }) => {
  const location = useLocation();
  const [isSideBarActive, setIsSideBarActive] = useState<boolean>(false);

  const handleSidebarState = () => {
    setIsSideBarActive(!isSideBarActive);
  };

  return (
    <>
      <div
        className={`md:w-[260px] h-full ${
          isSideBarActive
            ? "block translate-x-[0px] duration-[300ms] ease-in transform top-0 w-72"
            : "hidden md:translate-x-[0px] translate-x-[-500px]"
        } md:block sidebar__container z-[1000] md:z-0 fixed overflow-y-scroll md:top-16 left-0 pb-48`}
        style={{
          background:
            "linear-gradient(359.88deg, #250943 55.29%, #1702FF 127.12%)",
        }}
      >
        <div className="mt-20">
          <h4 className="text-white px-5 font-bold">{title}</h4>
        </div>

        <ul className="relative px-5 flex flex-col gap-8 mt-10 z-10">
          {routes &&
            routes.map((item) => (
              <li
                key={item?.page}
                className={`px-2 py-1 ${
                  location.pathname === item.route
                    ? "bg-white text-primary"
                    : "text-white"
                }`}
              >
                <Link to={item.route} className="flex gap-4 items-center">
                  <img
                    src={item?.icon}
                    alt={`${item?.page} icon`}
                    className={`${
                      location.pathname === item.route ? "filter-primary" : ""
                    }`}
                  />
                  <p className="font-semibold text-base">{item?.page}</p>
                </Link>
              </li>
            ))}
        </ul>
        <div className="w-full absolute top-0 left-0 z-0">
          <img src={ImageBG} className="w-full" alt="background" />
        </div>
      </div>

      <div className="w-full fixed top-0 right-0 bg-white dashboard__body overflow-x-auto">
        <div className="flex w-full items-center justify-between gap-2 py-2 border px-5 md:px-16">
          <img src={Ezone} alt="" />
          <img src={FinMan} alt="" className="hidden md:block" />
          <i
            className="ri-menu-line text-3xl md:hidden cursor-pointer"
            onClick={handleSidebarState}
          ></i>
        </div>
      </div>
      {isSideBarActive && (
        <div className="w-full fixed top-0 left-0 h-screen bg-black bg-opacity-80" />
      )}

    {isSideBarActive && (
        <div onClick={handleSidebarState} className="z-[1000] fixed top-4 right-4 bg-white p-4 flex items-center justify-center rounded-full w-12 h-12">
        <i className="ri-close-large-line text-2xl font-semibold"></i>
        </div>
    )}
    </>
  );
};

export default Sidebar;
