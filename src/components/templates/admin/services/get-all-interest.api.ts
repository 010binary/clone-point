import { AxiosResponse } from "axios";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../../api/config/axios.config";

import { IApiResponse } from "../../../../types/types";

export interface AllRolesData {
  id: number;
  transactionId: string;
  startDate: string; // in "dd/MM/yyyy" format
  endDate: string; // in "dd/MM/yyyy" format
  accountNumber: string;
  amount: number;
  type: string;
  rate: number;
  created_at: string; // consider `Date` if handling dates directly
  updated_at: string; // consider `Date` if handling dates directly
}

export interface IGetLocationsResponse extends IApiResponse {
  content: AllRolesData[];
}

const useGetAllInterest = () => {
  const getLocations = async (): Promise<
    AxiosResponse<IGetLocationsResponse>["data"]
  > => {
    try {
      const request = await axiosInstance.get<
        void,
        AxiosResponse<IGetLocationsResponse>
      >(
        `/api/v1/admin/interests?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D`,
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
  });

  return query;
};

export default useGetAllInterest;
