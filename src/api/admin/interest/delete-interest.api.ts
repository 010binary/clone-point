import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import axiosInstance from "../../config/axios.config";

const deleteInterestRate = async (
  id: string | number
): Promise<AxiosResponse> => {
  try {
    const request = await axiosInstance.delete<AxiosResponse>(
      `/api/v1/loan_type/${id}`
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

export const useDeleteInterestRate = (id: string | number) => {
  const mutation = useMutation({
    mutationFn: () => deleteInterestRate(id),
  });
  return mutation;
};

export default useDeleteInterestRate;
