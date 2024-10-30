import DashboardLayout from "../dashboard/layout";


const ViewDueLoan = () => {
  const details = [
    { label: "Amount (NGN)", value: "2000" },
    { label: "Loan Type", value: "Student" },
    { label: "Tenure in months", value: "9" },
    { label: "Start Date", value: "Fri Jan 29 00:00:00 WAT 2021" },
    { label: "Repay Amount (NGN)", value: "2000" },
    { label: "Interest Rate", value: "12%" },
    { label: "Monthly Amount Paid (NGN)", value: "1000" },
    { label: "Account", value: "John Doe" },
    { label: "Last Updated", value: "Fri Jan 29 00:00:00 WAT 2021" },
    { label: "Status", value: "Due" },
  ];

  return (
    <DashboardLayout>
      <div className="md:pl-[300px] px-5 md:pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Due Loan</h6>
        </div>
        <div className="mt-10 md:w-[600px]">
          <div
            className="px-4 py-2"
            style={{
              background:
                "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
            }}
          >
            <p className="text-white font-semibold">DETAILS</p>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="space-y-4">
              {details.map((detail, index) => (
                <div key={index} className="flex justify-between border-b py-1">
                  <span className="font-semibold text-gray-700">
                    {detail.label}
                  </span>
                  <span className="text-gray-900">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewDueLoan;
