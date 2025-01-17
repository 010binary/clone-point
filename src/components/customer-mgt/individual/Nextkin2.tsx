import React from "react";

const Nextkin2 = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:pl-4 lg:pl-8">
        <div className="flex items-center justify-between gap-2">
          <div className="h-10 bg-gradient-to-r from-pryColor/70 to-pryColor w-full flex items-center lg:w-[90%]">
            <p className="pl-2 text-sm lg:text-base text-white">
              NEXT OF KIN 2
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[90%]">
          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Employment Status</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  Employed
                </span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Net Monthly Income</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  NGN 250,000
                </span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Current Employer</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  Union Bank
                </span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Sector</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  Banking
                </span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Office Email</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  Okonette1@unionbank.ng
                </span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Tax Number</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  12011212
                </span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-between">
            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Phone</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  08121221234
                </span>
              </div>
              <hr />
            </div>

            <div className="flex flex-col w-[25rem]">
              <div className="grid grid-cols-4">
                <label className="py-1.5 col-span-2">Email</label>
                <span className="py-1.5 col-span-2 text-[#1C1919]">
                  okonette111@gmail.com
                </span>
              </div>
              <hr />
            </div>
          </div>

          <div className="flex flex-col md:w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Pension Number</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">
                08121221234
              </span>
            </div>
            <hr />
          </div>

          <div className="flex flex-col md:w-[25rem]">
            <div className="grid grid-cols-4">
              <label className="py-1.5 col-span-2">Office Address</label>
              <span className="py-1.5 col-span-2 text-[#1C1919]">
                17, Oluwole Street, off Onipanu bus-stop
              </span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nextkin2;
