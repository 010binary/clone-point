import BaseButton from "../../ui/base-button/BaseButton";
import TextInput from "../../ui/text-input/TextInput";
import useAddTellerForm from "./useAddTellerForm";

const AddInterest = ({ callBack }: any) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useAddTellerForm();
  return (
    <div className="w-[580px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">Create Interest</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <h3 className="font-bold text-lg mt-2">Create a new interest</h3>
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
              label="Transaction ID"
              placeholder="Enter Transaction ID"
              width="w-[560px]"
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
              label="Start Date"
              placeholder="Enter payment date"
              width="w-[560px]"
              height="h-10"
            />

            <TextInput
              id="endDate"
              type="date"
              name="endDate"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="End Date"
              placeholder="Enter payment date"
              width="w-[560px]"
              height="h-10"
            />

            <TextInput
              id="accountNumber"
              type="text"
              name="accountNumber"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Account Number"
              placeholder="Enter Account Number"
              width="w-[560px]"
              height="h-10"
            />

          
            <TextInput
              id="amount"
              type="text"
              name="amount"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Amount"
              placeholder="Enter amount"
              width="w-[560px]"
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
              label="Type"
              placeholder="Enter Type"
              width="w-[560px]"
              height="h-10"
            />

            <BaseButton type="submit" className="mt-2 max-w-[560px] bg-primary">
              <p className="w-[560px]">
                {isLoading ? "Submitting..." : "Save"}
              </p>
            </BaseButton>

            <BaseButton
              type="submit"
              className="mt-2 max-w-[560px] bg-primary-light"
            >
              <p className="w-[560px] text-primary-dark">
                {isLoading ? "Submitting..." : "Cancel"}
              </p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInterest;
