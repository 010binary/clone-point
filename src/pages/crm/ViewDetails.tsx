import DashboardLayout from "./layout";

const ViewDetails = () => {
  return (
    <DashboardLayout>
      <div className="md:pl-[300px] px-5 md:pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">View Details</h6>
        </div>
        <div className="mt-10 w-full">
          <div className="flex md:flex-row flex-col w-full gap-2 ">
            <div
              className="px-4 py-2 w-full"
              style={{
                background:
                  "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
              }}
            >
              <p className="text-white font-semibold">CUSTOMER DETAILS</p>
            </div>

            <div className="flex border px-3 py-1">
              <i className="ri-pencil-line text-lg"></i>
              <p className="text-lg">Edit</p>
            </div>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="flex md:flex-row flex-col justify-between gap-y-6 flex-wrap">
              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Title</span>
                <span className="text-gray-900">Mr.</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Middle Name</span>
                <span className="text-gray-900">Okonette</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Last Name</span>
                <span className="text-gray-900">Okon</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">BVN</span>
                <span className="text-gray-900">042344567</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Date of Birth
                </span>
                <span className="text-gray-900">04/18/990</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Account Type
                </span>
                <span className="text-gray-900">Savings</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Gender</span>
                <span className="text-gray-900">Female</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Marital Status
                </span>
                <span className="text-gray-900">Single</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Citizenship</span>
                <span className="text-gray-900">Nigeria</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Level of Education
                </span>
                <span className="text-gray-900">B.SC</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Mobile Phone
                </span>
                <span className="text-gray-900">08111011011</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="flex w-full gap-2 ">
            <div
              className="px-4 py-2 w-full"
              style={{
                background:
                  "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
              }}
            >
              <p className="text-white font-semibold">IDENTIFICATION</p>
            </div>

            <div className="flex border px-3 py-1">
              <i className="ri-pencil-line text-lg"></i>
              <p className="text-lg">Edit</p>
            </div>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="flex md:flex-row flex-col justify-between gap-y-6 flex-wrap">
              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Identification
                </span>
                <span className="text-gray-900">National ID</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Identification Number
                </span>
                <span className="text-gray-900">201122002</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Issued Date</span>
                <span className="text-gray-900">02/11/2020</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Expiration Date
                </span>
                <span className="text-gray-900">02/11/2025</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Upload</span>
                <span className="text-gray-900"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="flex w-full gap-2 ">
            <div
              className="px-4 py-2 w-full"
              style={{
                background:
                  "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
              }}
            >
              <p className="text-white font-semibold">ADDRESS DETAILS</p>
            </div>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="flex md:flex-row flex-col justify-between gap-y-6 flex-wrap">
              <div className="flex w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Address 1</span>
                <span className="text-gray-900">
                  17, Oluwole Street, off Onipanu bus-stop
                </span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Residential Status
                </span>
                <span className="text-gray-900">Owned</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">City</span>
                <span className="text-gray-900">Onipan</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">State</span>
                <span className="text-gray-900">Lagos</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Country</span>
                <span className="text-gray-900">Nigeria</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Home Phone</span>
                <span className="text-gray-900">08121221234</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Email</span>
                <span className="text-gray-900">okonette111@gmail.com</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Upload</span>
                <span className="text-gray-900"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="flex w-full gap-2 ">
            <div
              className="px-4 py-2 w-full"
              style={{
                background:
                  "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
              }}
            >
              <p className="text-white font-semibold">NEXT OF KIN</p>
            </div>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="flex md:flex-row flex-col justify-between gap-y-6 flex-wrap">
              <div className="flex w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Title</span>
                <span className="text-gray-900">Mr.</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">First Name</span>
                <span className="text-gray-900">John</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Last Name</span>
                <span className="text-gray-900">Doe</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Address 1</span>
                <span className="text-gray-900">
                  17, Oluwole Street, off Onipanu bus-stop
                </span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Phone</span>
                <span className="text-gray-900">08121221234</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Email</span>
                <span className="text-gray-900">okonette111@gmail.com</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Relationship
                </span>
                <span className="text-gray-900">Brother</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="flex w-full gap-2 ">
            <div
              className="px-4 py-2 w-full"
              style={{
                background:
                  "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
              }}
            >
              <p className="text-white font-semibold">NEXT OF KIN</p>
            </div>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="flex md:flex-row flex-col justify-between gap-y-6 flex-wrap">
              <div className="flex w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Employment Status
                </span>
                <span className="text-gray-900">Employed</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Net Monthly Salary
                </span>
                <span className="text-gray-900">NGN 250,000</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Current Employer
                </span>
                <span className="text-gray-900">Union Bank</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Sector</span>
                <span className="text-gray-900">Banking</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Office E-mail
                </span>
                <span className="text-gray-900">Okonette1@unionbank.ng</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Tax Number</span>
                <span className="text-gray-900">12011212</span>
              </div>

              <div className="flex md:w-[45%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">Phone</span>
                <span className="text-gray-900">08121221234</span>
              </div>

              <div className="flex md:w-[70%] w-full justify-between border-b py-1">
                <span className="font-semibold text-gray-700">
                  Office Address
                </span>
                <span className="text-gray-900">
                  17, Oluwole Street, off Onipanu bus-stop
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="flex w-full gap-2 ">
            <div
              className="px-4 py-2 w-full"
              style={{
                background:
                  "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
              }}
            >
              <p className="text-white font-semibold">IMAGES</p>
            </div>
          </div>

          <div className="w-full mt-2 mx-auto p-4 bg-white rounded-md pt-5 pb-20">
            <div className="flex md:flex-row flex-col justify-between gap-y-6 flex-wrap"></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewDetails;
