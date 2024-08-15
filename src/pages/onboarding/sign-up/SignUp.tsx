import OnboardingLayout from "../layout";
import TextInput from "../../../components/ui/text-input/TextInput";
import BaseButton from "../../../components/ui/base-button/BaseButton";
import useSignInForm from "./useSignUpForm";
import SelectInput from "../../../components/ui/select-input/SelectInput";
import { gender, title } from "../../../lib/Onboarding/signup";

const SignUp = ({setActivePage}: any) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useSignInForm();

  return (
    <OnboardingLayout>
      <div className="flex flex-col w-full px-5 md:px-24 pb-24">
        <h1 className="text-4xl font-bold font-[Montserat-Bold] mt-12 mb-3">
          Sign up to Finman
        </h1>
        <p className="md:w-[450px] text-[#6E6E6E] font-[Montserat-Medium] font-medium">
          Welcome, great to be here!
        </p>
        <div className="flex w-64 pt-5 pb-1 mb-6">
          <div className="">
            <h1
              className="font-bold text-lg cursor-pointer pl-14 pb-2"
              onClick={() => setActivePage("sign-up")}
            >
              Sign up
            </h1>
            <div className="border-b-[3px] max-w-1/2 rounded-full border-primary-dark"></div>
          </div>
          <div>
            <h1
              className="font-bold text-lg cursor-pointer pl-14 pb-2"
              onClick={() => setActivePage("log-in")}
            >
              Log in
            </h1>
            <div className="border-b-[3px] max-w-1/2 rounded-full border-gray-300"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <SelectInput label="Title" options={title} width="w-[600px]" />

          <TextInput
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            validation={validationSchema?.fields.firstName}
            validationTrigger={validationError}
            label="First Name"
            placeholder="Enter first name"
            width="w-[600px]"
          />

          <TextInput
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            validation={validationSchema?.fields.lastName}
            validationTrigger={validationError}
            label="Last Name"
            placeholder="Enter lastname"
            width="w-[600px]"
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
            placeholder="Enter email address"
            width="w-[600px]"
          />

          <SelectInput label="Gender" options={gender} width="w-[600px]" />

          <TextInput
            id="userName"
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            validation={validationSchema?.fields.userName}
            validationTrigger={validationError}
            label="User Name"
            placeholder="Enter user name"
            width="w-[600px]"
          />

          <TextInput
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            validation={validationSchema?.fields.address}
            validationTrigger={validationError}
            label="Address"
            placeholder="Enter address"
            width="w-[600px]"
          />

          <SelectInput label="City" options={gender} width="w-[600px]" />

          <SelectInput label="Country" options={gender} width="w-[600px]" />

          <TextInput
            id="zipCode"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            validation={validationSchema?.fields.zipCode}
            validationTrigger={validationError}
            label="Zip code"
            placeholder="Enter zip code"
            width="w-[600px]"
          />

          <SelectInput label="Bank Branch" options={gender} width="w-[600px]" />

          <TextInput
            id="staffId"
            type="text"
            name="staffId"
            value={formData.staffID}
            onChange={handleChange}
            validation={validationSchema?.fields.staffID}
            validationTrigger={validationError}
            label="Staff ID"
            placeholder="Enter staff ID"
            width="w-[600px]"
          />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            validation={validationSchema?.fields.password}
            validationTrigger={validationError}
            label="Password"
            placeholder="Enter password"
            width="w-[600px]"
          />

          <TextInput
            id="confirmPassword"
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            validation={validationSchema?.fields.confirmPassword}
            validationTrigger={validationError}
            label="Confirm Password"
            placeholder="Re-enter your password"
            width="w-[600px]"
          />

          <BaseButton fit={true} type="submit" className="mt-2 w-[600px] bg-primary">
            <p className="w-[600px]">
              {isLoading ? "Submitting..." : "Sign Up"}
            </p>
          </BaseButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default SignUp;
