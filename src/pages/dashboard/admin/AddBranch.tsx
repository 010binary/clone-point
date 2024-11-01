import TextInput from "../../../components/ui/text-input/TextInput";
import DashboardLayout from "../layout";
import useSignInForm from "./useAddBranchForm";
import BaseButton from "../../../components/ui/base-button/BaseButton";

const AddBranch = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useSignInForm();
  return (
    <DashboardLayout>
      <div className="md:pl-[270px] md:pr-10 px-5">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Add Branch</h6>
        </div>
        <div className="mt-10 w-full">
          <div
            className="px-4 py-2"
            style={{
              background:
                "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
            }}
          >
            <p className="text-white font-semibold">Branch</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:mt-12 flex flex-col md:flex-row gap-4 py-10">
          <div className="flex flex-col gap-4">
            <TextInput
              id="branchName"
              type="text"
              name="branchName"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Branch Name"
              placeholder="Enter branch name"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="branchAddress"
              type="text"
              name="branchAddress"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Branch address"
              placeholder="Enter branch address"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="city"
              type="text"
              name="city"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="City"
              placeholder="Enter branch city"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="state"
              type="text"
              name="state"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="State"
              placeholder="Enter branch state"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="country"
              type="text"
              name="country"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Country"
              placeholder="Enter country"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="businessManger"
              type="text"
              name="businessManger"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Business Manager"
              placeholder="Enter business manager"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="customerServiceManager"
              type="text"
              name="customerServiceManager"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Customer Service Manager"
              placeholder="Enter customer service manager"
              width="w-96"
              height="h-10"
            />
          </div>

          <div className="flex flex-col gap-4">
            <TextInput
              id="operationManager"
              type="text"
              name="operationManager"
              value={formData.email}
              onChange={handleChange}
              validation={validationSchema?.fields.email}
              validationTrigger={validationError}
              label="Operation Manager"
              placeholder="Enter Operation Manager"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="internaiControlManager"
              type="text"
              name="internaiControlManager"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Internal Control manager"
              placeholder="Enter internal control manager"
              width="w-96"
              height="h-10"
            />

            <TextInput
              id="authorisers"
              type="text"
              name="authorisers"
              value={formData.password}
              onChange={handleChange}
              validation={validationSchema?.fields.password}
              validationTrigger={validationError}
              label="Authorisers"
              placeholder="Enter authorisers"
              width="w-96"
              height="h-10"
            />

            <BaseButton type="submit" className="mt-2 max-w-96 bg-primary">
              <p className="w-96">{isLoading ? "Submitting..." : "Save"}</p>
            </BaseButton>

            <BaseButton
              type="submit"
              className="mt-2 max-w-96 bg-primary-light"
            >
              <p className="w-96 text-primary-dark">
                {isLoading ? "Submitting..." : "Cancel"}
              </p>
            </BaseButton>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddBranch;
