import { accountType } from "../../../lib/Onboarding";
import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";
import useAddTellerForm from "./useAddTellerForm";

const CreateLoan = ({ callBack }: any) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useAddTellerForm();
  return (
    <div className="md:w-[580px] w-[360px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">Loans</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <h3 className="font-bold text-lg mt-2">Edit Active Loans</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <TextInput
              id="txId"
              type="text"
              name="txId"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Principal Amount"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="date"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Loan Type"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              options={accountType}
              label="Account"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              options={[]}
              label="Customer"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />
            <SelectInput
              options={[]}
              label="Tenure In Months"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="amount"
              type="date"
              name="amount"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Start Date"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="type"
              type="text"
              name="type"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Repay Amount"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="type"
              type="text"
              name="type"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Monthly Amount Paid"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="type"
              type="text"
              name="type"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Last Updated"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />
            <SelectInput
              options={[
                { label: "Due", value: "Due" },
                { label: "Completed", value: "Completed" },
              ]}
              label="Status"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <BaseButton
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary"
            >
              <p className="md:w-[560px] w-[300px]">
                {isLoading ? "Submitting..." : "Create Loan"}
              </p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLoan;
