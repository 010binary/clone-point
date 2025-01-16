"use client";

const Identification = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:pl-4 lg:pl-8">
        <div className="flex items-center justify-between gap-2">
          <div className="h-10 bg-gradient-to-r from-pryColor/70 to-pryColor w-full flex items-center lg:w-[90%]">
            <p className="pl-2 text-sm lg:text-base text-white">
              IDENTIFICATION
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[90%]">
          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Identification</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  National ID
                </span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">
                  Identification Number
                </label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  201122002
                </span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Issued Date</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  02/11/2020
                </span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Expiration Date</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  02/11/2025
                </span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex flex-col gap-1 md:w-[25rem]">
            <p>Upload</p>
            <hr className="w-20" />
            <div className="flex items-center gap-3 pt-2">
              <div
                style={{ boxShadow: "0px 2px 5px -1px gray" }}
                className="flex items-center bg-white w-52 md:w-64"
              >
                <div className="py-2 lg:py-3 px-5 flex items-center gap-3">
                  <div className="border rounded-sm">
                    <p className="text-[#E51919] p-2">PDF</p>
                  </div>
                  <p>
                    National ID Card <br />{" "}
                    <span className="text-black text-opacity-50 text-xs">
                      234KB
                    </span>
                  </p>
                </div>
              </div>
              <button className="bg-pryColor text-white rounded-md py-2 px-7">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Identification;
