import { Link, useLocation } from "react-router-dom";
import ImageBG from "../../../assets/images/admin-top.png";
import { AdminRoute } from "../../../utils/types/admin/admin.types";

interface SidebarProps {
  routes: AdminRoute[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  const location = useLocation();

  return (
    <div
      className="w-64 h-full sidebar__container fixed overflow-y-scroll top-16 left-0 pb-48"
      style={{
        background:
          "linear-gradient(359.88deg, #250943 55.29%, #1702FF 127.12%)",
      }}
    >
      <div className="mt-20">
        <h4 className="text-white px-8 text-lg font-bold">Administrations</h4>
      </div>

      <ul className="relative px-10 flex flex-col gap-8 mt-10 z-10">
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
                <p className="font-semibold">{item?.page}</p>
              </Link>
            </li>
          ))}
      </ul>
      <div className="w-full absolute top-0 left-0 z-0">
        <img src={ImageBG} className="w-full" alt="background" />
      </div>
    </div>
  );
};

export default Sidebar;
