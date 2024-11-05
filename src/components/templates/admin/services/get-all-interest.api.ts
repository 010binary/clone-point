import { AxiosResponse } from "axios";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../../api/config/axios.config";

import { IApiResponse } from "../../../../types/types";
import { MainEntity } from "../../../../api/admin/interest/ApiResponse/get-all-loan-type-response";

export interface IGetLocationsResponse extends IApiResponse {
  content: MainEntity[];
}

const useGetAllInterest = () => {
  const getLocations = async (): Promise<
    AxiosResponse<MainEntity[]>["data"]
  > => {
    try {
      const request = await axiosInstance.get<
        void,
        AxiosResponse<MainEntity[]>
      >(
        `/api/v1/loan_type/all_by_orgId?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D`
      );
      const response = request.data;

      return response;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: unknown | any) {
      return error;
    }
  };

  const query = useQuery({
    queryFn: getLocations,
    queryKey: ["GET_ALL_INTEREST"],
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useGetAllInterest;
