import DashboardLayout from "../layout";

const ViewTeller = () => {
  const details = [
    { label: "Transaction ID", value: "B02337" },
    { label: "Payment Date", value: "06/11/2023" },
    { label: "Account Number", value: "1022022820" },
    { label: "Inputter", value: "Joy Essie" },
    { label: "Amount (NGN)", value: "2000" },
    { label: "Type", value: "Credit" },
  ];

  return (
    <DashboardLayout>
      <div className="pl-[300px] pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">View Teller</h6>
        </div>
        <div className="mt-10 w-[600px]">
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
                  <span
                    className={`${
                      detail.value === "Credit"
                        ? "text-green-600"
                        : "text-gray-900"
                    }`}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewTeller;
