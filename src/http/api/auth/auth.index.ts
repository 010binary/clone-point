import { SetupHttpClient } from "..";
import { UserAPI } from "./auth.types";

export function SignInExistingUser (dto: UserAPI.SignInExistingUserDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/users/login',
    body: dto
  })
}

export function ResetPassword (dto: UserAPI.ResetPasswordDTO) {
  console.log(dto)
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/users/reset-password',
    body: dto
  })
}

export function ForgotPassword (dto: UserAPI.ForgotPasswordDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/',
    body: dto
  })
}

export function VerifyEmail (dto: UserAPI.VerifyEmailDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/',
    body: dto
  })
}


export function SignUpUser (dto: UserAPI.SignUpUserDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: 'users/create-account',
    body: dto
  })
}