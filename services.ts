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

