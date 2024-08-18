import DashboardLayout from "../layout";

const ViewBranch = () => {
  const details = [
    { label: "Branch Name", value: "Keystone Bank" },
    { label: "Branch Address", value: "50, Isaac street Somolu" },
    { label: "City", value: "Lagos" },
    { label: "State", value: "Lagos" },
    { label: "Country", value: "Nigeria" },
    { label: "Business Manager", value: "Math Adedayo" },
    { label: "Customer Service Manager", value: "Wade Warren" },
    { label: "Operation Manager", value: "John Doe" },
    { label: "Internal Control Manager", value: "Bimpe Eniloa" },
    { label: "Authorisers", value: "Keystone" },
  ];

  return (
    <DashboardLayout>
        <div className="md:pl-[300px] px-5 md:pr-10">
           <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">View Branch</h6>
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

export default ViewBranch;
