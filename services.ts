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


export const getAllCustomers=async()=>axios.get(`${API_URL}${ApiRoutes.CUSTOMER}`)
export const getPaginatedCustomers=async(
    pageNumber=0,
    pageSize=10,
    customerType='IC'
)=>axios.get(`${API_URL}${ApiRoutes.PAGINATED_CUSTOMER}?pageNumber=${pageNumber}&pageSize=${pageSize}&customerType=${customerType}`)
export const getPaginatedAccounts=async(
    pageNumber=0,
    pageSize=10,
    customerType='IC'
)=>axios.get(`${API_URL}${ApiRoutes.PAGINATED_ACCOUNTS}?pageNumber=${pageNumber}&pageSize=${pageSize}&customerType=${customerType}`)

