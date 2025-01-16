import React from "react";

const ImageSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:pl-4 lg:pl-8">
        <div className="flex items-center justify-between gap-2">
          <div className="h-10 bg-gradient-to-r from-pryColor/70 to-pryColor w-full flex items-center lg:w-[90%]">
            <p className="pl-2 text-sm md:text-base lg:text-lg text-white">
              IDENTIFICATION
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[90%]">
          <div className="flex items-center gap-3">
            <div>Electricity Bill</div>
            <button>View</button>
          </div>

          <div className="flex items-center gap-3">
            <div>Electricity Bill</div>
            <button>View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
