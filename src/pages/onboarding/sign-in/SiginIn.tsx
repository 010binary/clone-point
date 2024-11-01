import OnboardingLayout from "../layout";
import TextInput from "../../../components/ui/text-input/TextInput";
import BaseButton from "../../../components/ui/base-button/BaseButton";
import { Link } from "react-router-dom";
import useSignInForm from "./useSignInForm";

const SignIn = ({ setActivePage }: any) => {
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
          Sign in to Finman
        </h1>
        <p className="md:w-[450px] text-[#6E6E6E] font-[Montserat-Medium] font-medium">
          Welcome, great to have you back!
        </p>
        
        <div className="flex w-64 pt-5 pb-1 mb-6">
          <div className="">
            <h1
              className="font-bold text-lg cursor-pointer pl-14 pb-2"
              onClick={() => setActivePage("sign-up")}
            >
              Sign up
            </h1>
            <div className="border-b-[3px] max-w-1/2 rounded-full border-gray-300"></div>
          </div>
          <div>
            <h1
              className="font-bold text-lg cursor-pointer pl-14 pb-2"
              onClick={() => setActivePage("log-in")}
            >
              Login
            </h1>
            <div className="border-b-[3px] max-w-1/2 rounded-full border-primary-dark"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            width="w-96"
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
            width="w-96"
          />
          <div className="flex justify-between w-96">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4 text-primary-dark form-checkbox" />
              <p className="font-medium">Remember me</p>
            </div>
          <Link
              to="/forgot-password"
              className="text-primary underline text-sm font-bold"
            >
              Forgot Password?
            </Link>
          </div>
          <BaseButton type="submit" className="mt-2 max-w-96 bg-primary">
            <p className="w-96">{isLoading ? "Submitting..." : "Login"}</p>
          </BaseButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default SignIn;
