import BaseButton from "../../ui/base-button/BaseButton";
import TextInput from "../../ui/text-input/TextInput";
import useAddTellerForm from "./useAddTellerForm";

const EditManagerRole = ({ callBack }: any) => {
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
        <h1 className="text-white font-bold">Edit manager roles</h1>
        <i
          className="ri-close-large-line text-white text-xl cursor-pointer"
          onClick={callBack}
        ></i>
      </div>
      <div className="bg-white px-3 -mt-2">
        <h3 className="font-bold text-lg mt-2">Details</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex  gap-4 pb-10">
          <div className="flex flex-col gap-4">
            <TextInput
              id="name"
              type="text"
              name="name"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Name"
              placeholder="Enter Name"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Phone Number"
              placeholder="Enter Phone Number"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Email Address"
              placeholder="Enter email"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="gender"
              type="text"
              name="gender"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Gender"
              placeholder="Enter gender"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="role"
              type="text"
              name="role"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Role"
              placeholder="Enter role"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="roleDescription"
              type="text"
              name="roleDescription"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Role Description"
              placeholder="Enter Role Description"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <TextInput
              id="dateOnboarded"
              type="date"
              name="dateOnboarded"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Date Onboarded"
              placeholder="Enter payment date"
              width="md:w-[560px] w-[300px]"
              height="h-10"
            />

            <BaseButton type="submit" className="mt-2 md:w-[560px] w-[300px] bg-primary">
              <p className="md:w-[560px] w-[300px]">
                {isLoading ? "Submitting..." : "Save"}
              </p>
            </BaseButton>

            <BaseButton
              type="submit"
              className="mt-2 md:w-[560px] w-[300px] bg-primary-light"
            >
              <p className="md:w-[560px] w-[300px] text-primary-dark">
                {isLoading ? "Submitting..." : "Cancel"}
              </p>
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditManagerRole;
