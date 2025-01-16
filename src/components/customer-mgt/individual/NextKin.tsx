import React from "react";

const NextKin = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:pl-4 lg:pl-8">
        <div className="flex items-center justify-between gap-2">
          <div className="h-10 bg-gradient-to-r from-pryColor/70 to-pryColor w-full flex items-center lg:w-[90%]">
            <p className="pl-2 text-sm md:text-base lg:text-lg text-white">
              NEXT OF KIN
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[90%]">
          <div className="flex flex-col md:w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Title</label>
              <span className="py-1.5 col-span-2">Mr</span>
            </div>
            <hr />
          </div>

          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">First Name</label>
                <span className="py-1.5 col-span-2">Mr</span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Middle Name</label>
                <span className="py-1.5 col-span-2">Mr</span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex flex-col md:w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Title</label>
              <span className="py-1.5 col-span-2">Mr</span>
            </div>
            <hr />
          </div>

          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">First Name</label>
                <span className="py-1.5 col-span-2">Mr</span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Middle Name</label>
                <span className="py-1.5 col-span-2">Mr</span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex flex-col md:w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Title</label>
              <span className="py-1.5 col-span-2">Mr</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default NextKin;
