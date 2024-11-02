import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TellerCreation } from "../types/dto";
import { ApiResponse } from "../../../../api/types";
import axiosInstance from "../../../../api/config/axios.config";

const updateInterest = async (
  Payload: TellerCreation,
): Promise<AxiosResponse<ApiResponse>["data"]> => {
  try {
    const request = await axiosInstance.put<
      TellerCreation,
      AxiosResponse<ApiResponse>
    >(
      "/api/v1/admin/interest?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D",
      Payload,
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

export const useUpdateInterest = () => {
  const mutation = useMutation({ mutationFn: updateInterest });
  return mutation;
};

export default useUpdateInterest;
