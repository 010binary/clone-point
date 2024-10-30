import Customer from "../../assets/icons/Frame 121.png";
import DashboardLayout from "../dashboard/layout";

const LoanDashboard = () => {
  return (
    <DashboardLayout>
      <div className="md:w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6"></h6>
        </div>

        <div className="flex flex-wrap flex-row items-start gap-4 py-10">
          <div className="bg-white md:w-fit w-full border rounded-lg border-gray-200 flex flex-col gap-3 items-center justify-center px-8 py-4">
            <img src={Customer} alt="Customer Icon" />
            <div>
              <p className="text-center text-black font-semibold">
                Approved Loans
              </p>
            </div>
          </div>

          <div className="bg-white md:w-fit w-full border rounded-lg border-gray-200 flex flex-col gap-3 items-center justify-center px-8 py-4">
            <img src={Customer} alt="Customer Icon" />
            <div>
              <p className="text-center text-black font-semibold">
                Approved Loans
              </p>
            </div>
          </div>

          <div className="bg-white md:w-fit w-full border rounded-lg border-gray-200 flex flex-col gap-3 items-center justify-center px-8 py-4">
            <img src={Customer} alt="Customer Icon" />
            <div>
              <p className="text-center text-black font-semibold">
                Approved Loans
              </p>
            </div>
          </div>

          <div className="bg-white md:w-fit w-full border rounded-lg border-gray-200 flex flex-col gap-3 items-center justify-center px-8 py-4">
            <img src={Customer} alt="Customer Icon" />
            <div>
              <p className="text-center text-black font-semibold">
                Approved Loans
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LoanDashboard;
