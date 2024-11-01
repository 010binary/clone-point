/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, useFormContext } from "react-hook-form";
import { identification } from "../../../lib/Onboarding";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";

const Identification = ({ callBack, nextStep }: any) => {
  const { register, setValue } = useForm();

  const onSubmit = () => {
    nextStep(); // Move to the next form step
  };

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
        <h3 className="font-bold text-lg mt-2">Identification</h3>
        <form className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <SelectInput
              label="Identification"
              options={identification}
              width="md:w-[560px] w-[300px]"
              height="h-10"
              onChange={(value) => setValue("indentification", value)}
            />

            <TextInput
              id="startDate"
              type="text"
              label="Other (Specify)"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("other")}
            />

            <TextInput
              id="startDate"
              type="number"
              label="Identification Number"
              placeholder="Enter your identification number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("identificationNumber", {
                required: "Identification number is required",
              })}
            />

            <TextInput
              id="startDate"
              type="date"
              label="Issue Date"
              placeholder="Enter issued date"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("issueDate", { required: "Issue date is required" })}
            />

            <TextInput
              id="startDate"
              type="date"
              label="Expiration Date"
              placeholder="Enter Expiration Date"
              width="md:w-[560px] w-[300px]"
              height="h-10"
              {...register("expirationDate", {
                required: "Expiration date is required",
              })}
            />
            <h4 className="text-[#404B7C] font-semibold">
              Upload Front and Back Copy of The ID card
            </h4>
            <div className="flex items-end gap-3">
              <div className="hidden">
                <label htmlFor="doc-upload" className="cursor-pointer">
                  <input
                    type="file"
                    name="file"
                    id="doc-upload"
                    hidden
                    multiple
                  />
                  <div
                    id="drop-area"
                    className={`border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6  flex flex-col items-center justify-center p-5 ${"bg-gray-200"}`}
                  >
                    <div className="flex flex-col gap-3 items-center justify-center">
                      <h1 className="text-primary text-center">
                        Drag or click to upload file
                      </h1>
                      <h1 className="text-[#938373] text-center text-sm">
                        Supported formats: JPEG, JPG or PNG
                      </h1>
                    </div>
                  </div>
                </label>
              </div>
              <BaseButton className="mt-2 w-40 bg-primary-dark">
                <p className="text-white">Upload</p>
              </BaseButton>
            </div>

            <BaseButton
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

export default Identification;
