import DashboardLayout from "../layout";

const ViewUser = () => {
  return (
    <DashboardLayout>
      <div className="md:pl-[300px] md:pr-10 px-5">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">View User</h6>
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
        </div>
      </div>

      <div className="max-w-4xl mx-auto pl-10 pt-10 bg-white rounded-lg">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Placeholder for Profile Image */}
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A7.966 7.966 0 0112 15c2.209 0 4.209.895 5.879 2.337M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="pb-20">
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Title</p>
              <p className="text-base font-medium text-gray-900">Ms</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">First Name</p>
              <p className="text-base font-medium text-gray-900">Joy</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Last Name</p>
              <p className="text-base font-medium text-gray-900">Michaeel</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Email</p>
              <p className="text-base font-medium text-gray-900">04/18/1990</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Gender</p>
              <p className="text-base font-medium text-gray-900">Female</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Enabled</p>
              <p className="text-base font-medium text-gray-900">Yes</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Address</p>
              <p className="text-base font-medium text-gray-900">
                19, Ilumi Street, Tosin Avenue
              </p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">City</p>
              <p className="text-base font-medium text-gray-900">Ikeja</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Country</p>
              <p className="text-base font-medium text-gray-900">Nigeria</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">
                Middle Name
              </p>
              <p className="text-base font-medium text-gray-900">Essien</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Mobile</p>
              <p className="text-base font-medium text-gray-900">0813122076</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">User Name</p>
              <p className="text-base font-medium text-gray-900">essien14</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">
                Designation
              </p>
              <p className="text-base font-medium text-gray-900">
                Customer Management
              </p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Staff ID</p>
              <p className="text-base font-medium text-gray-900">0011</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">State</p>
              <p className="text-base font-medium text-gray-900">Lagos</p>
            </div>
            <div className="mb-4 flex gap-10 items-center">
              <p className="text-sm font-semibold text-gray-500 ">Zip Code</p>
              <p className="text-base font-medium text-gray-900">100223</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewUser;
