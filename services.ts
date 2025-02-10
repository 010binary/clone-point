/**
 * .....................
 * .....................
 * This Contains all the andpoints fuctions/Initialization
 * .....................
 * .....................
 */

import { API_URL } from "@/utils/varaibles"
import axios from "axios"
import { ApiRoutes } from "./routes"
import { ICInitialValuesType } from "@/app/customer-management/individual/_components/data"


export const getAllCustomers=async()=>axios.get(`${API_URL}${ApiRoutes.CUSTOMER}`)
export const getPaginatedCustomers=async(
    pageNumber=0,
    pageSize=10,
    customerType='IC'
)=>axios.get(`${API_URL}${ApiRoutes.PAGINATED_CUSTOMER}?pageNumber=${pageNumber}&pageSize=${pageSize}&customerType=${customerType}`)

export const getPaginatedAccounts = async (
    pageNumber = 0,
    pageSize = 10,
    customerType = 'IC'
) => {
    const params = new URLSearchParams({
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
        customerType
    });
    return axios.get(`${API_URL}${ApiRoutes.PAGINATED_ACCOUNTS}?${params.toString()}`);
}

export const createICAccounts = async (body:ICInitialValuesType) => {
    return axios.post(`${API_URL}${ApiRoutes.CUSTOMER}`,body);
}

