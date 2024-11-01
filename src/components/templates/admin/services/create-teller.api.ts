import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { TellerCreation } from "../types/dto";
import { ApiResponse } from "../../../../api/types";
import axiosInstance from "../../../../api/config/axios.config";

const createNewTeller = async (
  Payload: TellerCreation,
): Promise<AxiosResponse<ApiResponse>["data"]> => {
  try {
    const request = await axiosInstance.post<
      TellerCreation,
      AxiosResponse<ApiResponse>
    >(
      "/api/v1/admin/create/interest?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D",
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

export const useCreateNewTeller = () => {
  const mutation = useMutation({ mutationFn: createNewTeller });
  return mutation;
};

export default useCreateNewTeller;
