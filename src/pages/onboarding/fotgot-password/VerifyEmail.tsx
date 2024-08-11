import OnboardingLayout from "../layout";
import BaseButton from "../../../components/ui/base-button/BaseButton";
import { Link } from "react-router-dom";
import OtpInput from "../../../components/ui/text-input/OtpInput";
import useVerifyEmailForm from "./useVerifyEmail";

const VerifyEmailAccount = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useVerifyEmailForm();

  return (
    <OnboardingLayout>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl font-bold font-[Montserat-Bold] mt-12 mb-3">
          Forgot Password
        </h1>
        <p className="md:w-[450px] text-[#6E6E6E] font-[Montserat-Medium] text-center font-medium">
          A verification code has been sent to your email address
        </p>

        <form onSubmit={handleSubmit} className="mt-12">
          <OtpInput
            name="otp"
            value={formData.otp}
            valueLength={5}
            onChange={handleChange}
            validation={validationSchema?.fields.otp}
            validationTrigger={validationError}
          />

          <BaseButton type="submit" className="mt-6 w-96">
            <p>Send</p>
          </BaseButton>
        </form>

        <div className="flex mt-4 gap-2">
          <p>Do you remember your password?</p>
          <Link to="/sign-in" className="text-primary underline font-bold">
            Try signing in
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default VerifyEmailAccount;
