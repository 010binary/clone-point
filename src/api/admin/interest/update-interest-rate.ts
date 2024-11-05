import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { NewInterestCreation } from "../../../types/dto";
import axiosInstance from "../../config/axios.config";

const updateInterestRate = async (
  id: string | number, // Accept the ID as a parameter
  Payload: NewInterestCreation
): Promise<AxiosResponse> => {
  try {
    const request = await axiosInstance.put<NewInterestCreation, AxiosResponse>(
      `/api/v1/loan_type/update/${id}`, // Use the id in the URL
      Payload
    );
    return request;
  } catch (error: unknown | any) {
    return {
      data: {
        message: error.message,
        success: false,
      },
    } as any;
  }
};

export const useUpdateInterestRate = (
  id: string | number // Accept the ID as a parameter
) => {
  const mutation = useMutation({
    mutationFn: (Payload: NewInterestCreation) =>
      updateInterestRate(id, Payload),
  });
  return mutation;
};

export default useUpdateInterestRate;
