import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { NewInterestCreation } from "../../../types/dto";
// import { ApiResponse } from "../../types";
import axiosInstance from "../../config/axios.config";

const createNewInterestRate = async (
  Payload: NewInterestCreation
): Promise<AxiosResponse> => {
  try {
    const request = await axiosInstance.post<
      NewInterestCreation,
      AxiosResponse
    >(
      "/api/v1/loan_type/create?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D",
      Payload
    );
    const response = request;
    return response;

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

export const useCreateNewInterestRate = () => {
  const mutation = useMutation({ mutationFn: createNewInterestRate });
  return mutation;
};

export default useCreateNewInterestRate;
