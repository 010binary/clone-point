import DashboardLayout from "../layout";

const TransactionReportView = () => {
  const details = [
    { label: "Payment Date", value: "06/11/23 11:22 AM" },
    { label: "Transaction ID", value: "B02337" },
    { label: "Account Number", value: "1022022820" },
    { label: "Account Type", value: "Savings" },
    { label: "Customer", value: "John Doe" },
    { label: "Amount", value: "NGN -20,000:00" },
    { label: "Transaction Type", value: "Transfer" },
    { label: "Bank", value: "Access" },
    { label: "Bank Account Number", value: "222331100" },
    { label: "Interest", value: "NGN -10:00" },
    { label: "Beneficiary Name", value: "Agatha Umoh" },
    { label: "Description", value: "Teller  withdrawal" },
    { label: "GL Code", value: "3006" },
    { label: "Added By", value: "Joy Essien" },
    { label: "Date Updated", value: "" },
    { label: "Date Updated By", value: "" },
    { label: "Branch", value: "Ilasamaja, Oshodi/Isolo, Lagos state, Nigeria" },
  ];

  return (
    <DashboardLayout>
      <div className="md:pl-[300px] px-5 md:pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">View Details</h6>
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

export default TransactionReportView;
