import { ChangeEvent, DragEvent, useState } from "react";
import { identification } from "../../../lib/Onboarding";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";
import useAddTellerForm from "../admin/useAddTellerForm";

const Identification = ({ callBack, setFormStep }: any) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const { formData, handleChange, handleSubmit, isLoading } =
    useAddTellerForm();

  const handleNext = () => {
    setFormStep(3);
  };
console.log(files)
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
        <form onSubmit={handleSubmit} className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <SelectInput
              label="Identification"
              options={identification}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              label="Other (Specify)"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              label="Identification Number"
              placeholder="Enter your identification number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              label="Issue Date"
              placeholder="Enter issued date"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="number"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              label="Expiration Date"
              placeholder="Enter Expiration Date"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />
            <h4 className="text-[#404B7C] font-semibold">
              Upload Front and Back Copy of The ID card
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
                    onChange={handleFileChange}
                  />
                  <div
                    id="drop-area"
                    className={`border-2 border-primary md:w-64 bg-[#F9F9F9] border-dashed rounded-lg gap-6  flex flex-col items-center justify-center p-5 ${
                      isDragging ? "bg-gray-200" : ""
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
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
              <BaseButton
                type="button"
                onClick={handleNext}
                className="mt-2 w-40 bg-primary-dark"
              >
                <p className="text-white">
                  {isLoading ? "Validating..." : "Upload"}
                </p>
              </BaseButton>
            </div>

            <BaseButton
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary"
            >
              <p className="md:w-[560px] w-[300px]">
                {isLoading ? "Submitting..." : "Next"}
              </p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Identification;
