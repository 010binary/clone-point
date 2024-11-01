import { Link, useLocation } from "react-router-dom";
import { adminSettingsRoutes } from "../../../lib/Admin/routes";

const SettingsSidebar = () => {
  const location = useLocation();
  return (
    <div className="">
      <div className="flex gap-6 py-8">
        <div className="md:w-fit">
          <h1 className={`text-lg font-medium ${location.pathname == "/admin/settings/accesibility" ? "text-black": "text-primary"}`}>Account</h1>
          {location.pathname == "/admin/settings/accesibility" ? "": (
          <div className="w-full border border-primary"></div>
          )}
        </div>
        <div className="md:w-fit">
          <Link
            to="/admin/settings/accesibility"
            className={`text-lg font-medium ${
              location.pathname == "/admin/settings/accesibility" &&
              "text-primary"
            }`}
          >
            Manage accessibility
          </Link>
          {location.pathname == "/admin/settings/accesibility" ? (
            <div className="w-full border border-primary"></div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bg-primary-light md:w-64 px-5 pt-10 pb-20">
        <ul className="flex flex-row flex-wrap md:flex-col gap-10">
          {adminSettingsRoutes &&
            adminSettingsRoutes.map((item) => (
              <li className="flex gap-2">
                <img src={item.icon}></img>
                <Link to={item?.route}>{item?.page}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SettingsSidebar;
