/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stepper } from "../../../components/ui/stepper/stepper";
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
      <form>
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
                    <div className="hidden  w-[80%] items-center pl-2 border border-gray-300 rounded-md overflow-hidden">
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
                  CREATE INDIVIDUAL CUSTOMER
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
