import { AxiosResponse } from "axios";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../../api/config/axios.config";

import { IApiResponse } from "../../../../types/types";

export interface CustomerDetail {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  businessName: string;
  mobilePhone: string;
  accountType: "Savings" | "Current" | "Checking" | string;
  gender: "Male" | "Female" | string;
  email: string;
  citizenship: string;
  levelOfEducation: string;
  dateOfBirth: string;
  bvn: string;
  created_at: string;
  updated_at: string;
}

export interface AllRolesData {
  id: number;
  customerType: string;
  orgKey: string;
  customerDetail: CustomerDetail;
}

export interface IGetLocationsResponse extends IApiResponse {
  data: AllRolesData[];
}

const useGetAllCustomerQuery = () => {
  const getLocations = async (): Promise<AxiosResponse<AllRolesData[]>> => {
    try {
      const request = await axiosInstance.get<
        void,
        AxiosResponse<AllRolesData[]>
      >(`/api/v1/customers?credentials=%7B%7D&details=%7B%7D&principal=%7B%7D`);
      const response = request;
      return response;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: unknown | any) {
      return error;
    }
  };

  const query = useQuery({
    queryFn: getLocations,
    queryKey: ["GET_ALL_CUSTOMER"],
  });

  return query;
};

export default useGetAllCustomerQuery;
