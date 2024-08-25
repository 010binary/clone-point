import { accountType, education, maritalStatus } from "../../../lib/Onboarding";
import { gender, title } from "../../../lib/Onboarding/signup";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";
import useAddTellerForm from "../admin/useAddTellerForm";

const CreateIndividualCustomer = ({ callBack, setFormStep }: any) => {
  const { formData, handleChange, validationError, isLoading } =
    useAddTellerForm();

  const handleSubmit = () => {
    setFormStep(2);
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
        <h3 className="font-bold text-lg mt-2">Customer Details</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <SelectInput
              label="Title"
              options={title}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              label="First Name"
              placeholder="Enter first name"
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
              label="Middle Name"
              placeholder="Enter middle name"
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
              label="Last Name"
              placeholder="Enter last name"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="phone"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              validation={() => {}}
              validationTrigger={validationError}
              label="Phone"
              placeholder="Enter phone number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="endDate"
              type="date"
              name="endDate"
              value={formData.password}
              onChange={handleChange}
              validation={() => {}}
              validationTrigger={validationError}
              label="Date of birth"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="number"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              validation={() => {}}
              validationTrigger={validationError}
              label="BVN"
              placeholder="Enter your BVN"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <BaseButton
              type="submit"
              className="mt-2 w-40 bg-primary-dark"
            >
              <p className="text-white">
                {isLoading ? "Validating..." : "Validate BVN"}
              </p>
            </BaseButton>

            <SelectInput
              label="Acount Type"
              options={accountType}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Gender"
              options={gender}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Marital Status"
              options={maritalStatus}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Citizenship"
              options={[]}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              label="Level of Education"
              options={education}
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />
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

export default CreateIndividualCustomer;
