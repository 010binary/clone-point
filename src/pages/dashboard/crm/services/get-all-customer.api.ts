import { AxiosResponse } from "axios";

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../../api/config/axios.config";
import { ErrorCodes } from "../../../../types/constants";
import { IApiResponse } from "../../../../types/types";

export interface CustomerDetail {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string; // Optional if middleName may be absent
  businessName: string;
  mobilePhone: string;
  accountType: "Savings" | "Current" | "Checking" | string; // Can limit to specific values if known
  gender: "Male" | "Female" | string; // Can specify specific gender values if known
  email: string;
  citizenship: string;
  levelOfEducation: string;
  dateOfBirth: string; // Date in string format; consider using Date if working directly with dates
  bvn: string;
  created_at: string; // Consider Date if directly handling date values
  updated_at: string; // Consider Date if directly handling date values
}

export interface AllRolesData {
  id: number;
  customerType: string; // Could narrow to specific types if known, e.g., "IC" | "OtherType"
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
