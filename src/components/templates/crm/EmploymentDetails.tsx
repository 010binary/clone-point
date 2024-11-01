import { employmentStatus, workSector } from "../../../lib/Onboarding";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";

const EmploymentDetails = ({ callBack, setFormStep }: any) => {
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
        <h3 className="font-bold text-lg mt-2">Employment Details</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <SelectInput
              label="Employment Status"
              options={employmentStatus}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="number"
              name="net monthly income "
              label="Net Monthly Income"
              placeholder="Enter Net monthly Income (NGN)"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="Current Employer"
              label="Current Employer"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Sector"
              options={workSector}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="email"
              name="startDate"
              label="Office Email"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="number"
              name="Tax Number"
              label="Tax Number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="number"
              name="startDate"
              label="Pension Number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="Office Address"
              label="Office Address"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <h4 className="text-[#404B7C] font-semibold">
              Upload CAC Document (For business owner)
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

            <h4 className="text-[#404B7C] text-lg font-semibold">Images</h4>

            <h4 className="text-[#404B7C] font-semibold">
              Upload Passport Photograph and Signature
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
            <BaseButton
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary"
            >
              <p className="md:w-[560px] w-[300px]">Save</p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmploymentDetails;
