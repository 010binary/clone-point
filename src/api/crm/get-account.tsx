import { AxiosResponse } from "axios";

import { useQuery } from "@tanstack/react-query";

import axiosInstance from "../config/axios.config";
import { IApiResponse } from "../../types/types";

export interface AllAccountData {
  id: number;
  netMonthlyIncome: number;
  Status: string;
  orgKey: string;
  accountNumber: string;
  customer: object;
  accountOwner: string;
  accountType: string;
  pndStatus: string;
  notes: string;
  signatories: [];
  accountBalance: number;
  mandate: string;
}

export interface IGetLocationsResponse extends IApiResponse {
  content: AllAccountData[];
}

const useGetAllAccount = () => {
  const getAccount = async (): Promise<
    AxiosResponse<IGetLocationsResponse>["data"]
  > => {
    try {
      const request = await axiosInstance.get<
        void,
        AxiosResponse<IGetLocationsResponse>
      >(`api/v1/accounts?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D`);
      const response = request.data;

      return response;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: unknown | any) {
      return error;
    }
  };

  const query = useQuery({
    queryFn: getAccount,
    queryKey: ["GET_ALL_ACCOUNT"],
  });

  return query;
};

export default useGetAllAccount;
