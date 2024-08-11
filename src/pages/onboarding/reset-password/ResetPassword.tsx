import OnboardingLayout from "../layout";
import TextInput from "../../../components/ui/text-input/TextInput";
import BaseButton from "../../../components/ui/base-button/BaseButton";
import useResetPasswordForm from "./useResetPasswordForm";

const ResetPassword = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useResetPasswordForm();

  return (
    <OnboardingLayout>
      <div className="flex flex-col w-full items-center pb-40">
        <h1 className="text-4xl font-bold font-[Montserat-Bold] mt-12 mb-3">
          Reset Password
        </h1>
        <p className="md:w-[450px] text-[#6E6E6E] font-[Montserat-Medium] text-center font-medium">
          Your password should include at least 8 characters and should include
          a combination of Upper-case, Lowercase and special characters (@$#%)
        </p>

        <form onSubmit={handleSubmit} className="mt-12">
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
            width="w-96 mb-4"
          />

          <TextInput
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            validation={validationSchema?.fields.confirmPassword}
            validationTrigger={validationError}
            label="Confirm password"
            placeholder="Confirm password"
            width="w-96"
          />

          <BaseButton type="submit" className="mt-6 w-96">
            <p>{isLoading ? "Submitting..." : "Done"}</p>
          </BaseButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default ResetPassword;
