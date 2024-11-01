import { ReactNode } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import { adminRoutes } from "../../lib/Admin/routes";
import HeaderColor from "../../assets/images/color-one.png";
import HeaderColorTwo from "../../assets/images/color-two.png";

type OnboardingLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: OnboardingLayoutProps) {
  return (
    <main className="w-full">
      <Sidebar title="Dashbord" routes={adminRoutes} />

      <div className="mt-20">
        <div className="md:pl-[268px] pl-5 pr-5 md:pr-10 relative">
          <div
            className="w-full header__user__account bg-[#1A88E1] relative h-12 gap-5 flex justify-end items-center px-10"
            style={{
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <i className="ri-message-2-line text-2xl text-white z-[40]"></i>
            <div className="flex items-center gap-1 z-[40]">
              <i className="ri-user-5-fill text-white text-xl"></i>
              <h6 className="font-bold text-white">Joy Essien</h6>
              <i className="ri-arrow-drop-down-fill text-white text-xl"></i>
            </div>
            <div className="absolute hidden md:block top-0 z-[20]">
              <img src={HeaderColor} alt="" />
            </div>
            <div className="absolute hidden md:block top-0 right-[340px] z-[20]">
              <img src={HeaderColorTwo} alt="" />
            </div>
          </div>
        </div>

        <div className="w-full bg-white">{children}</div>
      </div>
    </main>
  );
}
