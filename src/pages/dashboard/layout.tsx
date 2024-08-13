import { ReactNode } from "react";
import FinMan from "../../assets/images/finman.png";
import Ezone from "../../assets/images/ezone.png";
import Sidebar from "../../components/templates/admin/Sidebar";
import TextInput from "../../components/ui/text-input/TextInput";
import { adminRoutes } from "../../lib/Admin/routes";

type OnboardingLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: OnboardingLayoutProps) {
  return (
    <main className="w-full">
      <Sidebar routes={adminRoutes} />
      <div className="w-full bg-white dashboard__body overflow-x-auto">
        <div className="flex items-center justify-between py-2 border px-16">
          <img src={Ezone} alt="" />
          <img src={FinMan} alt="" />
        </div>

        <div className="w-full bg-white dashboard__body overflow-x-auto pl-[268px] pr-10 pt-2">
          <div className="w-full bg-[#1A88E1] h-12" style={{ borderTopLeftRadius: "20px", borderBottomRightRadius: "20px"}}>
            <i className="ri-message-2-line text-white"></i>
          </div>
          <div
            className="w-full bg-white flex justify-between py-5 mt-5"
            style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
          >
            <h6 className="font-bold text-black px-6 ">Branch</h6>
            <form className="w-56 bg-gray-200">
              <input type="text"></input>
            </form>
          </div>
          <div className="w-full bg-white">{children}</div>
        </div>
      </div>
    </main>
  );
}
