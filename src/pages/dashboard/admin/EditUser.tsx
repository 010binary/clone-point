import BaseButton from "../../../components/ui/base-button/BaseButton";
import TextInput from "../../../components/ui/text-input/TextInput";
import DashboardLayout from "../layout";

const EditUser = () => {
  return (
    <DashboardLayout>
      <div className="md:pl-[300px] px-5 md:pr-10">
        <div
          className="w-full bg-white flex justify-between py-5 mt-5"
          style={{ boxShadow: "0px 4px 30px 0px #1A88E14A inset" }}
        >
          <h6 className="font-bold text-black px-6">Edit User</h6>
        </div>

        <div className="mt-10 md:w-[600px]">
          <div
            className="px-4 py-2"
            style={{
              background:
                "linear-gradient(263.54deg, #1A88E1 20.74%, rgba(26, 136, 225, 0.7) 68.46%)",
            }}
          >
            <p className="text-white font-semibold">DETAILS</p>
          </div>
        </div>
      </div>

      <div className="md:max-w-4xl max-w-2xl mx-auto pl-10 pt-10 bg-white rounded-lg">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Placeholder for Profile Image */}
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A7.966 7.966 0 0112 15c2.209 0 4.209.895 5.879 2.337M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <form className=" gap-20">
          <div className="md:grid grid-cols-2">
            <div className="md:pb-20">
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Title"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="First Name"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Last name"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Email"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Gender"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Enabled"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Address"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="City"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Country"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="md:mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Middle Name"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Mobile"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="User Name"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Designation"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Staff Id"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="State"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
              <div className="mb-4 flex gap-10 items-center">
                <TextInput
                  id="txId"
                  type="text"
                  name="txId"
                  value=""
                  onChange={() => {}}
                  validation={() => {}}
                  validationTrigger=""
                  label="Zip Code"
                  placeholder=""
                  width="w-96"
                  height="h-10"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <BaseButton type="submit" className="mt-2 md:w-64 w-full bg-primary">
              <p className="w-96">Save</p>
            </BaseButton>

            <BaseButton
              type="submit"
              className="mt-2 md:w-64 w-full bg-primary-light"
            >
              <p className="w-96 text-primary-dark">Cancel</p>
            </BaseButton>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditUser;
