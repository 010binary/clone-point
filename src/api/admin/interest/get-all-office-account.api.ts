import { AxiosResponse } from "axios";

import { useQuery } from "@tanstack/react-query";
import { IApiResponse } from "../../../types/types";
import axiosInstance from "../../config/axios.config";
import { AccountData } from "./ApiResponse/get-all-office-response";

export interface IGetLocationsResponse extends IApiResponse {
  content: AccountData[];
}

const useGetAllOfficeAccount = () => {
  const getAllOfficeAccount = async (): Promise<
    AxiosResponse<AccountData[]>["data"]
  > => {
    try {
      const request = await axiosInstance.get<
        void,
        AxiosResponse<AccountData[]>
      >(
        `/api/v1/accounts/all-office-accounts?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D`
      );
      const response = request.data;

      return response;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: unknown | any) {
      return error;
    }
  };

  const query = useQuery({
    queryFn: getAllOfficeAccount,
    queryKey: ["GET_ALL_OFFICE_ACCOUNT"],
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useGetAllOfficeAccount;
