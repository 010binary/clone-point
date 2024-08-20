import BaseButton from "../../ui/base-button/BaseButton";
import TextInput from "../../ui/text-input/TextInput";
import useAddAccountType from "./useAddAccountTypeForm";

const CreateTitle = ({ callBack }: any) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useAddAccountType();
  return (
    <div className="md:w-[580px] w-[360px]">
      <div className="bg-primary-dark flex px-3 py-2 items-center justify-between">
        <h1 className="text-white font-bold">CREATE NEW TITLE</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <form onSubmit={handleSubmit} className="flex pt-5  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <TextInput
              id="txId"
              type="text"
              name="txId"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Title"
              placeholder="Enter Title"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="startDate"
              type="text"
              name="startDate"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Description"
              placeholder="Enter description"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />
          
            <BaseButton
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary"
            >
              <p className="md:w-[560px] w-[300px]">
                {isLoading ? "Submitting..." : "Save"}
              </p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTitle;
