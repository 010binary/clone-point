/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stepper } from "../../../components/ui/stepper/stepper";
import { useState } from "react";
// import { relationship } from "../../../lib/Onboarding";
// import { employmentStatus, workSector } from "../../../lib/Onboarding";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";
const CreateCoperaterAccount = ({ onClose }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const step = parseInt(searchParams.get("step") || "0");

  const maxValue = 2;

  const nextStep = () => {
    if (!isNaN(step) && step < maxValue) {
      setSearchParams({ step: (step + 1).toString() });
      return;
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={(e) => e.preventDefault()}>
        <Stepper active={step}>
          <Stepper.Step>
            <div className="md:w-[580px]  w-[360px]">
              <div className="bg-primary-dark flex px-3 py-4 items-center justify-between">
                <h1 className="text-white font-bold">
                  CREATE COPERATE CUSTOMER
                </h1>
                <i
                  className="ri-close-large-line text-white text-xl cursor-pointer"
                  onClick={onClose}
                ></i>
              </div>
              <div className="bg-white px-6 py-2 -mt-2">
                <h3 className="font-bold text-lg mt-2">Customer Details</h3>
                <div className="mt-6 flex  gap-4 pb-10">
                  <div className="flex flex-col gap-4">
                    <div className="hidden flex w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[50%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Title
                        </Label>
                      </div>
                      <Select>
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue placeholder="Select your title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mr">Mr</SelectItem>
                          <SelectItem value="ms">Mrs</SelectItem>
                          <SelectItem value="dr">Dr</SelectItem>
                          <SelectItem value="prof">Prof</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Mobile Phone
                        </Label>
                      </div>
                      <Input
                        type="text"
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Business Name
                        </Label>
                      </div>
                      <Input
                        type="text"
                        //   {...register("middle Name")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Registration year
                        </Label>
                      </div>
                      <Input
                        type="date"
                        //   {...register("dob")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Business Type
                        </Label>
                      </div>
                      <Input
                        type="text"
                        //   {...register("middle Name")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          No of Employees
                        </Label>
                      </div>
                      <Input
                        type="number"
                        //   {...register("bvn")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[80%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[80%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Note
                        </Label>
                      </div>
                      <Input
                        type="text"
                        //   {...register("lastName")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <Button
                      onClick={nextStep}
                      className="mt-8 md:w-[530px] text-[1.2rem] w-[300px] bg-[#1A88E1]"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Stepper.Step>

          <Stepper.Step>
            <div className="md:w-[580px] w-[360px]">
              <div className="bg-primary-dark flex px-3 py-4 items-center justify-between">
                <h1 className="text-white font-bold">
                  CREATE COPERATE CUSTOMER
                </h1>
                <i
                  className="ri-close-large-line text-white text-xl cursor-pointer"
                  onClick={onClose}
                ></i>
              </div>
              <div className="bg-white px-6 py-2 -mt-2">
                <h3 className="font-bold text-lg mt-2">Address Details</h3>
                <div className="mt-6 flex  gap-4 pb-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex w-[120%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Address 1
                        </Label>
                      </div>
                      <Input
                        type="text"
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[120%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%]  border-r border-gray-300">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold">
                          Residential Status
                        </Label>
                      </div>
                      <Select
                      // onValueChange={(value) => setValue("title", value)}
                      >
                        <SelectTrigger
                          style={{ outline: "none", boxShadow: "none" }}
                          className="w-full border-none bg-transparent focus:outline-none px-2 py-2"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Provided_by_Employer">
                            Provided_by_Employer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex w-[120%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          State
                        </Label>
                      </div>
                      <Input
                        type="text"
                        // {...register("State")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[120%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          City
                        </Label>
                      </div>
                      <Input
                        type="text"
                        // {...register("State")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[120%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          L.G.A
                        </Label>
                      </div>
                      <Input
                        type="text"
                        // {...register("lga")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[120%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Country
                        </Label>
                      </div>
                      <Input
                        type="text"
                        // {...register("Country")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <div className="flex w-[120%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Office Phone
                        </Label>
                      </div>
                      <Input
                        type="number"
                        // {...register("HomePhone")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>
                    {/* <div className="w-full">
                      <label
                        className="font-semibold mb-2"
                        style={{
                          color: "#1C1A1A",
                          borderRight: "none",
                        }}
                      >
                        Home Phone
                      </label>
                      <Input
                        id="HomePhone"
                        type="number"
                        {...register("HomePhone")}
                        className="mt-[6px]"
                        placeholder="Enter Home Phone"
                      />
                    </div> */}

                    <div className="flex w-[120%] items-center pl-2  border border-gray-300 rounded-md overflow-hidden">
                      <div className="w-[70%] border-r border-gray-300 ">
                        <Label className="px-2 text-[#575757] text-[1rem] w-32 font-semibold ">
                          Email
                        </Label>
                      </div>
                      <Input
                        type="email"
                        // {...register("email")}
                        style={{ outline: "none", boxShadow: "none" }}
                        className="w-full border-none text-[1rem] outline:none ring-0 focus:ring-0 bg-transparent focus:outline-none px-2 py-2 no-outline "
                      />
                    </div>

                    <h4 className=" mt-2  font-semibold">Directors</h4>

                    <div className="p-2 ">
                      <div
                        className=" w-[120%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
                        // className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
                      >
                        <div
                          onClick={toggleModal}
                          className="flex justify-start p-4"
                        >
                          <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                            <span className="mr-2">+</span> Add
                          </button>
                        </div>

                        {/* Directors Table */}
                        <table className="min-w-full leading-normal">
                          <thead>
                            <tr>
                              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Name
                              </th>
                              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Address
                              </th>
                              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Phone
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                colSpan={3}
                              >
                                <p className="text-gray-600 text-center">
                                  No records found
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                          <div className="bg-white rounded-lg shadow-lg w-[70rem] max-w-md">
                            <div className="p-4 border-b flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-800">
                                Add Directors
                              </h3>
                              <button
                                onClick={toggleModal}
                                className="text-gray-600 hover:text-gray-800 "
                              >
                                X
                              </button>
                            </div>
                            <div className="p-4">
                              <input
                                type="text"
                                className="w-full p-2 border rounded-md mb-4"
                                placeholder="Search by First name, Last name, Phone number"
                              />

                              <table className="min-w-full leading-normal">
                                <thead>
                                  <tr>
                                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                      <input type="checkbox" />
                                    </th>
                                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                      Name
                                    </th>
                                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                      Address
                                    </th>
                                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                      Phone
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td
                                      className="px-3 py-2 border-b border-gray-200 bg-white text-sm"
                                      colSpan={4}
                                    >
                                      <p className="text-gray-600 text-center">
                                        No records found
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Modal */}
                      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-80 max-w-md">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Add Directors</h3>
              <button onClick={toggleModal} className="text-gray-600 hover:text-gray-800 float-right">
                X
              </button>
            </div>
            <div className="p-4">
              <input
                type="text"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Search by First name, Last name, Phone number"
              />

              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      <input type="checkbox" />
                    </th>
                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm" colSpan="4">
                      <p className="text-gray-600 text-center">No records found</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )} */}
                    </div>

                    {/* <BaseButton
                        type="button"
                        className="mt-2 w-40 bg-primary-dark"
                      >
                        <p className="text-white">Upload</p>
                      </BaseButton> */}
                  </div>

                  {/* <BaseButton
                      onClick={nextStep}
                      className="mt-2 md:w-[560px] w-[300px] bg-[#1A88E1]"
                    >
                      <p className="md:w-[560px] w-[300px]">Next</p>
                    </BaseButton> */}
                </div>

                <div>
                  <Button
                    //   onClick={nextStep}
                    className="mt-8 md:w-[530px] text-[1.2rem] w-[300px] bg-[#1A88E1]"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </Stepper.Step>
        </Stepper>
      </form>
    </div>
  );
};

export default CreateCoperaterAccount;
