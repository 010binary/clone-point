import { relationship, residentialType } from "../../../lib/Onboarding";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";

import { title } from "../../../lib/Onboarding/signup";

const AddressDetail = ({ callBack, setFormStep }: any) => {
  const handleSubmit = () => {
    setFormStep(4);
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
        <h3 className="font-bold text-lg mt-2">Address Details</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <TextInput
              id="startDate"
              type="text"
              name="address"
              label="Address 1"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Residential Status"
              options={residentialType}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="state"
              label="State"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="city"
              label="City"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="lga"
              label="L.G.A"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="country"
              label="Country"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="number"
              name="homephone"
              label="Home Phone"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="email"
              name="email"
              label="Email"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />
            <h4 className="text-[#404B7C] font-semibold">
              Upload Proof of Address (Utility bill)
            </h4>
            <div className="flex items-end gap-3">
              <div className="">
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
              <BaseButton type="button" className="mt-2 w-40 bg-primary-dark">
                <p className="text-white">Upload</p>
              </BaseButton>
            </div>

            <h4 className="text-[#404B7C] text-lg font-semibold">
              Next of Kin
            </h4>

            <SelectInput
              label="Residential Status"
              options={title}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="firstName"
              label="First Name"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="Last Name"
              label="Last Name"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="st"
              label="Address"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="number"
              name="phone"
              label="Phone"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="email"
              name="email"
              label="Email"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Relationship"
              options={relationship}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />
            <BaseButton
              type="submit"
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

export default AddressDetail;
