import { accountType } from "../../../lib/Onboarding";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";
import useAddTellerForm from "../admin/useAddTellerForm";

const EditAccount = ({ callBack, setFormStep }: any) => {
  const { formData, handleChange, validationError, isLoading } =
    useAddTellerForm();

  const handleSubmit = () => {
    setFormStep(2);
  };
  return (
    <div className="md:w-[580px] w-[360px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">CREATE NEW ACCOUNT</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <h3 className="font-bold text-lg mt-2">Account Details</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              label="Account Number"
              placeholder="Enter account number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Account Owner"
              options={[]}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Account Type"
              options={accountType}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Customer"
              options={[]}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Acount Status"
              options={[{ label: "Active", value: "Active" }]}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="PND Status"
              options={[{ label: "Yes", value: "Yes" }]}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Bank Branch"
              options={[]}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Account Manager"
              options={[]}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              label="Notes"
              placeholder=""
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              validation={() => {}}
              validationTrigger={validationError}
              label="Monthly Net Income"
              placeholder=""
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <div className="flex gap-10">
              <h1 className="text-lg font-bold text-primary underline">Signatories</h1>
              <h1 className="text-lg font-bold">Mandate</h1>
            </div>
            <div className="flex items-center gap-3">
              <TextInput
                id="startDate"
                type="checkbox"
                name="startDate"
                value={formData.password}
                onChange={handleChange}
                validation={() => {}}
                validationTrigger={validationError}
                label=""
                placeholder=""
                width="w-5"
                height="h-5"
              />
              <p className="mt-2 font-bold">Uche Madguagwu olochi</p>
            </div>

            <div className="flex items-center gap-3">
              <TextInput
                id="startDate"
                type="checkbox"
                name="startDate"
                value={formData.password}
                onChange={handleChange}
                validation={() => {}}
                validationTrigger={validationError}
                label=""
                placeholder=""
                width="w-5"
                height="h-5"
              />
              <p className="mt-2 font-bold">Blessed Okonette Okon</p>
            </div>
            <div className="flex  gap-28 justify-between">
              <BaseButton type="submit" className="mt-2 w-26 bg-primary-dark">
                <p className="text-white">
                  {isLoading ? "Validating..." : "Save"}
                </p>
              </BaseButton>

              <BaseButton type="submit" className="mt-2 w-26 bg-primary-light">
                <p className="w-26 text-primary-dark">
                  {isLoading ? "Submitting..." : "Delete"}
                </p>
              </BaseButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAccount;
