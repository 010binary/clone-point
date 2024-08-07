import OnboardingLayout from "./layout";
import TextInput from "../../components/ui/text-input/TextInput";
import BaseButton from "../../components/ui/base-button/BaseButton";

const ForgotPassword = () => {
  return (
    <OnboardingLayout>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl font-bold font-[Montserat-Bold] mt-12 mb-3">
          Forgot Password
        </h1>
        <p className="md:w-[450px] text-lg text-black font-[Montserat-Medium] text-center font-medium">
          Please, enter your email address. You will receive an OTP to reset
          your password
        </p>

        <form action="" className="mt-12">
          <TextInput
            id="email"
            type="email"
            name="email"
            value=""
            onChange={() => {}}
            validationTrigger=""
            validation=""
            label="Email Address"
          />

        <BaseButton type="submit" className="mt-6 w-96">
        <p>Send</p>
        </BaseButton>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default ForgotPassword;
