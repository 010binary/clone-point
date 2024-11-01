import axiosInstance from "../config/axios.config";
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { CustomerPayload, ApiResponse } from "../types";

const createCustomer = async (
  Payload: CustomerPayload
): Promise<AxiosResponse<ApiResponse>["data"]> => {
  try {
    const request = await axiosInstance.post<
      CustomerPayload,
      AxiosResponse<ApiResponse>
    >("/api/v1/customers", Payload);
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

export const useCreateCustomer = () => {
  const mutation = useMutation({ mutationFn: createCustomer });
  return mutation;
};

export default useCreateCustomer;
