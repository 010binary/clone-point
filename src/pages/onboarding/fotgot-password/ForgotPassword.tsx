import OnboardingLayout from "../layout";
import TextInput from "../../../components/ui/text-input/TextInput";
import BaseButton from "../../../components/ui/base-button/BaseButton";
import { Link } from "react-router-dom";
import useForgotPasswordForm from "./useForgotPasswordForm";

const ForgotPassword = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useForgotPasswordForm();

  return (
    <OnboardingLayout>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl font-bold font-[Montserat-Bold] mt-12 mb-3">
          Forgot Password
        </h1>
        <p className="md:w-[450px] text-[#6E6E6E] font-[Montserat-Medium] text-center font-medium">
          Please, enter your email address. You will receive an OTP to reset
          your password
        </p>

        <form onSubmit={handleSubmit} className="mt-12">
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

          <BaseButton type="submit" className="mt-6 bg-primary w-96">
          <p>{isLoading ? "Submitting..." : "Send"}</p>
          </BaseButton>
        </form>

        <div className="flex mt-4 gap-2">
          <p>Do you remember your password?</p>
          <Link to="/" className="text-primary underline font-bold">
            Try signing in
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default ForgotPassword;
