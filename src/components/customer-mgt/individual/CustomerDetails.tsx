"use client";

const CustomerDetails = () => {
  return (
    <>
      {/* details */}
      <div className="flex flex-col gap-4 lg:w-[90%]">
        <div className="flex flex-col md:w-[25rem]">
          <div className="grid grid-cols-4">
            <label className="py-1.5 col-span-2">Title</label>
            <span className="py-1.5 col-span-2 text-[#1C1919]">Mr</span>
          </div>
          <hr />
        </div>

        <div className="flex items-center flex-wrap justify-between">
          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">First Name</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">Blessed</span>
            </div>
            <hr />
          </div>

          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Middle Name</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">Okonette</span>
            </div>
            <hr />
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Last Name</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">Okon</span>
            </div>
            <hr />
          </div>

          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">BVN</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">21022211</span>
            </div>
            <hr />
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Date of Birth</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">
                04/18/990
              </span>
            </div>
            <hr />
          </div>

          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Account Type</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">Savings</span>
            </div>
            <hr />
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Gender</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">Female</span>
            </div>
            <hr />
          </div>

          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Marital Status</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">Single</span>
            </div>
            <hr />
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Citizenship</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">Nigeria</span>
            </div>
            <hr />
          </div>

          <div className="flex flex-col w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Level of Education</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">B.SC</span>
            </div>
            <hr />
          </div>
        </div>

        <div className="flex flex-col md:w-[25rem]">
          <div className="grid grid-cols-4">
            <label className="py-1.5 col-span-2">Mobile Phone</label>
            <span className="py-1.5 col-span-2 text-[#1C1919]">
              08111011011
            </span>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
