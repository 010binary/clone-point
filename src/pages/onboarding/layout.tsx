import { ReactNode } from "react";
import FinMan from "../../assets/images/finman.png";
import Ezone from "../../assets/images/ezone.png";
import AuthBg from "../../assets/images/onboarding-bg.png"

type OnboardingLayoutProps = {
  children: ReactNode;
};

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <main className="h-[1000px]">
      <div className="w-full py-5 bg-white">
          <div className="flex items-center justify-between md:px-20 px-5">
            <img src={Ezone} alt="" />
            <img src={FinMan} alt="" />
          </div>
          <div>
            <img src={AuthBg} alt="" className="w-full mt-5" />
          </div>
        <div className="w-full mx-auto md:mr-auto md:ml-0 mt-10 bg-white">
          {children}
        </div>
      </div>
    </main>
  );
}
