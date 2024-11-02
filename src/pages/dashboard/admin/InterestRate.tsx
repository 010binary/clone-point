import { useState } from "react";
import DashboardLayout from "../layout";
import plusIcon from "../../../assets/icons/plus.svg";
import shareIcon from "../../../assets/icons/share.svg";
import TextInput from "../../../components/ui/text-input/TextInput";

import AddInterest from "../../../components/templates/admin/AddInterest";
import EditInterest from "../../../components/templates/admin/EditInterest";
import GenericTable from "../../../components/ui/table/generic-table";
import useGetAllInterest from "../../../components/templates/admin/services/get-all-interest.api";
import { InterestUserColumns } from "../../../components/templates/admin/TableColums/interest-users-table";
import { Skeleton } from "../../../components/ui/skeleton";

const InterestRate = () => {
  const [showAddTeller, setShowAddTeller] = useState(false);
  const [showEditTeller, setShowEditTeller] = useState(false);

  const handleShowAddTeller = () => {
    setShowAddTeller(!showAddTeller);
  };

  const handleShowEditTeller = () => {
    setShowEditTeller(!showEditTeller);
  };

  const { data, isLoading } = useGetAllInterest();

  return (
    <DashboardLayout>
      <div className="w-full bg-white dashboard__body overflow-x-auto md:pl-[268px] px-5 md:pr-10 pt-2">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Interests</h6>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div></div>

          <div className="flex items-center gap-4">
            <div
              onClick={() => handleShowAddTeller()}
              className="flex items-center cursor-pointer px-4 py-2 gap-2 border border-[#00000066]"
            >
              <img src={plusIcon} alt="" />
              <p className="text-[#E51919] font-medium">Create</p>
            </div>

            <button className="flex items-center px-4 py-2 gap-2 border border-[#1A88E1]">
              <img src={shareIcon} alt="" />
              <p className="text-[#1A88E1] font-medium">Export as Pdf</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <form action="">
            <div>
              <label>Interests</label>
              <TextInput placeholder="Search Interest" />
            </div>
          </form>

          <div className="flex items-center gap-4">
            <p className="font-semibold text-sm">
              <span className="text-primary-dark">1 - 10</span> of 200
            </p>

            <div className="">
              <i className="ri-arrow-drop-left-line text-3xl bg-white border rounded-full mr-2"></i>
              <i className="ri-arrow-drop-right-line text-3xl bg-white border rounded-full"></i>
            </div>
          </div>
        </div>

        <div className="mt-5 pb-20 overflow-x-scroll">
          {isLoading ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {Array(3)
                  .fill(1)
                  .map((_, index) => {
                    return (
                      <Skeleton
                        className="h-96 w-full bg-gray-300"
                        key={index}
                      />
                    );
                  })}
              </div>
            </>
          ) : (
            <GenericTable
              data={data?.content || []}
              columns={InterestUserColumns}
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">
        {showAddTeller && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-0 bg-black absolute top-0"></div>
            <div className="z-50 absolute top-24">
              <AddInterest callBack={handleShowAddTeller}></AddInterest>
            </div>
          </>
        )}
        {showEditTeller && (
          <>
            <div className="w-full h-[1020px] bg-opacity-70 z-0 bg-black absolute top-0"></div>
            <div className="z-50 absolute top-24">
              <EditInterest callBack={handleShowEditTeller} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InterestRate;
