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
    firstName: string;
    lastName: string;
    title: string;
    confirmPassword: string;
    staffID: string;
    bankBranch: string;
    zipCode: string;
    country: string;
    city: string;
    address: string;
    userName: string;
    gender: string;
    email: string;
    password: string;
  };
}
