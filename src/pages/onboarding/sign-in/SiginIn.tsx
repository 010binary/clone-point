import OnboardingLayout from "../layout";
import TextInput from "../../../components/ui/text-input/TextInput";
import BaseButton from "../../../components/ui/base-button/BaseButton";
import { Link } from "react-router-dom";
import useSignInForm from "./useSignInForm";

const SignIn = () => {
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
          Welcome, great to be have you back!
        </p>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
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
          <div className="flex justify-end w-96">
            <Link
              to="/forgot-password"
              className="text-primary underline text-sm font-bold"
            >
              Forogot Password?
            </Link>
          </div>
          <BaseButton type="submit" className="mt-2 w-fit">
            <p className="w-96">{isLoading ? "Submitting..." : "Login"}</p>
          </BaseButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default SignIn;
