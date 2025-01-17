import React from "react";

const ImageSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:pl-4 lg:pl-8">
        <div className="flex items-center justify-between gap-2">
          <div className="h-10 bg-gradient-to-r from-pryColor/70 to-pryColor w-full flex items-center lg:w-[90%]">
            <p className="pl-2 text-sm lg:text-base text-white">IMAGES</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[90%]">
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
                  Passport <br />{" "}
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
                  Signature <br />{" "}
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
    </>
  );
};

export default ImageSection;
