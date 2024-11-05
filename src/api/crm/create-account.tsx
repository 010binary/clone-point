import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { AccountSchema } from "../../types/dto";
import { ApiResponse } from "../types";
import axiosInstance from "../config/axios.config";

const createNewAccount = async (
  Payload: AccountSchema
): Promise<AxiosResponse<ApiResponse>["data"]> => {
  try {
    const request = await axiosInstance.post<
      AccountSchema,
      AxiosResponse<ApiResponse>
    >(
      "api/v1/account?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D",
      Payload
    );
    const response = request;
    return response?.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: unknown | any) {
    const otherErrors = {
      data: {
        message: error.message,
        success: false,
      },
    };
    return error?.response?.data ?? otherErrors.data;
  }
};

export const useCreateNewAccount = () => {
  const mutation = useMutation({ mutationFn: createNewAccount });
  return mutation;
};

export default useCreateNewAccount;
