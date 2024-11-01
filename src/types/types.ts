import { ErrorCodes } from "./constants";

export type ErrorCodeTypes =
  | "ERR_400"
  | "ERR_4001"
  | "ERR_4002"
  | "ERR_408"
  | "ERR_500";
export interface IApiResponse {
  message: string;
  errorCode: ErrorCodes;
  success: boolean;
}
