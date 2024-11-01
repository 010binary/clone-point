import BaseButton from "../../ui/base-button/BaseButton";
import SelectInput from "../../ui/select-input/SelectInput";
import TextInput from "../../ui/text-input/TextInput";
import useAddAccountType from "./useAddAccountTypeForm";

const CreateUser = ({ callBack }: any) => {
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
        <h1 className="text-white font-bold">ADD USER</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2 w-full">
        <form onSubmit={handleSubmit} className="flex pt-5 w-full gap-4 pb-10">
          <div className="flex flex-wrap w-full gap-4">
            <TextInput
              id="txId"
              type="text"
              name="txId"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="First name"
              placeholder="Enter name"
              width="md:w-[250px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="txId"
              type="text"
              name="txId"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Last name"
              placeholder="Enter last name"
              width="md:w-[250px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="txId"
              type="email"
              name="txId"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Email"
              placeholder="example@ex.com"
              width="md:w-[250px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              options={[{ value: "All", label: "All" }]}
              label="Control"
              width="md:w-[250px] w-[300px]"
              height="h-10"
            />

            <SelectInput
              options={[{ value: "All", label: "All" }]}
              label="Branch"
              width="md:w-[250px] w-[300px]"
              height="h-10"
            />
            <TextInput
              id="txId"
              type="password"
              name="txId"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Create password"
              placeholder="**********"
              width="md:w-[250px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="txId"
              type="password"
              name="txId"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Re-enter password"
              placeholder="**********"
              width="md:w-[250px] w-[300px]"
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

export default CreateUser;
