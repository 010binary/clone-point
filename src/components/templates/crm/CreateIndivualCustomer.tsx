/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  accountType,
  education,
  maritalStatus,
  citizenShip,
} from "../../../lib/Onboarding";
import { gender, title } from "../../../lib/Onboarding/signup";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";
import { useFormContext } from "react-hook-form";
const CreateIndividualCustomer = ({ callBack, nextStep }: any) => {
  const { register, watch, getValues } = useFormContext();
  const onSubmit = (data: any) => {
    console.log("Step 1 Data:", data); // Log data for Step 1
    nextStep(); // Move to the next form step
  };
  const values = getValues();
  console.log(values, "value");
  return (
    <div className="md:w-[580px] w-[360px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">CREATE INDIVIDUAL CUSTOMER</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <h3 className="font-bold text-lg mt-2">Customer Details</h3>
        <form className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <SelectInput
              label="Title"
              options={title}
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("title")} // Register the input
            />

            <TextInput
              id="startDate"
              type="text"
              // value={formData.password}
              label="First Name"
              placeholder="Enter first name"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              // {...register("firstName", { required: "First name is required" })}
              onChange={watch("firstName")}
            />

            <TextInput
              id="startDate"
              type="text"
              label="Middle Name"
              placeholder="Enter middle name"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("LastName", { required: "Last name is required" })}
            />

            <TextInput
              id="startDate"
              type="text"
              label="Last Name"
              placeholder="Enter last name"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("LastName", { required: "Last name is required" })}
            />

            <TextInput
              id="startDate"
              type="phone"
              label="Phone"
              placeholder="Enter phone number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />

            <TextInput
              id="endDate"
              type="date"
              label="Date of birth"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("dob", { required: "Date of birth is required" })}
            />

            <TextInput
              id="startDate"
              type="number"
              label="BVN"
              placeholder="Enter your BVN"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("bvn", { required: "bvn is required" })}
            />

            <BaseButton className="mt-2 w-40 bg-primary-dark">
              <p className="text-white">Validate BVN</p>
            </BaseButton>

            <SelectInput
              label="Acount Type"
              options={accountType}
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("accountType")}
            />

            <SelectInput
              label="Gender"
              options={gender}
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("gender")}
            />

            <SelectInput
              label="Marital Status"
              options={maritalStatus}
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("MaritalStatus")}
            />

            <SelectInput
              label="Citizenship"
              options={citizenShip}
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("Citizenship")}
            />

            <SelectInput
              label="Level of Education"
              options={education}
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("LevelOfEducation")}
            />
            <BaseButton
              // type="submit"
              onClick={onSubmit}
              className="mt-2 md:w-[560px] w-[300px] bg-primary"
            >
              <p className="md:w-[560px] w-[300px]">Next</p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIndividualCustomer;
