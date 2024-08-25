import DashboardLayout from "./layout";
import Customer from "../../assets/icons/customer-icon.png";
import OfficeIcon from "../../assets/icons/office-icon.png";
import { Link } from "react-router-dom";

const CRMDashboard = () => {
  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5  md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6"></h6>
        </div>

        <div className="flex  flex-wrap flex-row items-start gap-4 py-10">
          <div className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 md:items-start items-center justify-center px-8 py-4">
            <img src={Customer} alt="" />
            <div>
              <p className="text-center">Customer</p>
            </div>
          </div>

          <Link to="/admin/crm/office-data" className="bg-gray-200 md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 md:items-start items-center justify-center px-8 py-4">
            <img src={OfficeIcon} alt="" />
            <div>
              <p className="text-center">Office (Employees)</p>
            </div>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CRMDashboard;
