import { useState } from "react";
import DashboardLayout from "../layout";
import BaseButton from "../../../components/ui/base-button/BaseButton";
import EditLicense from "../../../components/templates/admin/EditLicense";

const Lincense = () => {
  const [addLicense, setAddLicense] = useState<boolean>(false);

  const handleShowLicense = () => {
    setAddLicense(!addLicense);
  };
  return (
    <DashboardLayout>
      <div className="md:pl-[270px] px-5 md:pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Today</h6>
        </div>

        <div className="w-full mt-10 bg-[#1A88E11A] p-10 flex flex-col gap-3 items-center justify-center">
          <div className="w-fit flex flex-col gap-3 items-center justify-center">
            <h6 className="font-bold md:text-lg text-sm text-black">License valids for</h6>
            <div className="flex gap-1 md:gap-3">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="rounded-lg p-5"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-6xl text-2xl text-white font-bold">79</h1>
                </div>
                <div
                  className="rounded-lg min-w-full px-4 p-1"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-lg text-sm text-center text-white">Days</h1>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div
                  className="rounded-lg p-5"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-6xl text-2xl text-white font-bold">12</h1>
                </div>
                <div
                  className="rounded-lg min-w-full px-4 p-1"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-lg text-sm text-center text-white">Hours</h1>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div
                  className="rounded-lg p-5"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-6xl text-2xl text-white font-bold">34</h1>
                </div>
                <div
                  className="rounded-lg min-w-full px-4 p-1"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-lg text-sm text-center text-white">Minutes</h1>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div
                  className="rounded-lg p-5"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-6xl text-2xl text-white font-bold">18</h1>
                </div>
                <div
                  className="rounded-lg min-w-full px-4 p-1"
                  style={{
                    background:
                      "linear-gradient(359.88deg, #1A88E1 55.29%, #1702FF 127.12%)",
                  }}
                >
                  <h1 className="md:text-lg text-sm text-center text-white">Seconds</h1>
                </div>
              </div>
            </div>

            <BaseButton
              onClick={handleShowLicense}
              className="w-full bg-primary-light py-2 mt-7 rounded-lg"
            >
              <p className="md:text-lg text-sm font-extrabold text-center text-primary-dark ">
                Edit License
              </p>
            </BaseButton>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {addLicense && (
          <>
            <div className="w-full  h-[1020px] bg-opacity-70 z-0 bg-black absolute top-0"></div>
            <div className="z-50 absolute top-24">
              <EditLicense callBack={handleShowLicense} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Lincense;
