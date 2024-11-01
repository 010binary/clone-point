import DashboardLayout from "../layout";
import CashReceipt from "../../../assets/icons/receipt.png";
import CashPayment from "../../../assets/icons/cash-payment.png";
import OfficeAccount from "../../../assets/icons/office-accountant.png";
import { useState } from "react";
import AddCashReceipt from "../../../components/templates/operations/CashReceipt";
import AddCashPayment from "../../../components/templates/operations/CashPayment";

const PostTransaction = () => {
  const [activeScreen, setActiveScreen] = useState("");

  const handleScreen = (screen: string) => {
    setActiveScreen(screen);
  };

  const handleScreenClose = () => {
    setActiveScreen("");
  };

  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5  md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6"></h6>
        </div>

        <div className="flex  flex-wrap flex-row items-start gap-8 py-10">
          <div className=" md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 items-end  px-8 py-4">
            <div className="flex flex-col gap-1">
              <img src={CashReceipt} className="pb-2" alt="" width={30} />
              <p className="font-semibold">Cash Receipt</p>
              <p className="text-sm">(Deposit)</p>
            </div>

            <div
              onClick={() => handleScreen("cash-receipt")}
              className="bg-primary cursor-pointer flex items-center justify-center ml-10 w-8 h-8 rounded-full"
            >
              <i className="ri-add-line text-white text-xl"></i>
            </div>
          </div>

          <div className=" md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 items-end justify-center px-8 py-4">
            <div className="flex flex-col gap-1">
              <img src={CashPayment} className="pb-2" alt="" width={30} />
              <p className="font-semibold">Cash Payment</p>
              <p className="text-sm">(Withdraw)</p>
            </div>

            <div
              onClick={() => handleScreen("cash-payment")}
              className="bg-primary cursor-pointer flex items-center justify-center ml-10 w-8 h-8 rounded-full"
            >
              <i className="ri-add-line text-white text-xl"></i>
            </div>
          </div>

          <div className=" md:w-fit w-full border rounded-lg border-gray-300 flex gap-3 items-end justify-center px-8 py-4">
            <div className="flex flex-col gap-1">
              <img src={OfficeAccount} className="pb-2" alt="" width={30} />
              <p className="font-semibold">Office Account</p>
              <p className="text-sm">(Details)</p>
            </div>

            <div
              onClick={() => handleScreen("office-account")}
              className="bg-primary cursor-pointer flex items-center justify-center ml-10 w-8 h-8 rounded-full"
            >
              <i className="ri-add-line text-white text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {activeScreen == "cash-receipt" && (
          <>
            <div className="w-full h-full bg-opacity-70 z-0 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <AddCashReceipt callBack={handleScreenClose} />
            </div>
          </>
        )}

        {activeScreen == "cash-payment" && (
          <>
            <div className="w-full h-full bg-opacity-70 z-0 bg-black fixed top-0"></div>
            <div className="z-50 absolute top-24">
              <AddCashPayment callBack={handleScreenClose} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PostTransaction;
