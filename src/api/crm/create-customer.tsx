import axiosInstance from "../config/axios.config";
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { ApiResponse } from "../types";
import { payloadSchema } from "./create-payload";
import { z } from "zod";
type FormData = z.infer<typeof payloadSchema>;

const createCustomer = async (
  Payload: FormData
): Promise<AxiosResponse<ApiResponse>["data"]> => {
  try {
    const request = await axiosInstance.post<
      FormData,
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
