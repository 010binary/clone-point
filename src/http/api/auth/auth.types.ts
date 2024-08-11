export namespace UserAPI {
  export type SignInExistingUserDTO = {
    email: string;
    password: string;
  };

  export type ForgotPasswordDTO = {
    email: string;
  };

  export type ResetPasswordDTO = {
    password: string;
    confirmPassword: string;
  };

  export type VerifyEmailDTO = {
    otp: string;
  };

  export type SignUpUserDTO = {
    fullName: string;
    email: string;
    password: string;
  };
}
