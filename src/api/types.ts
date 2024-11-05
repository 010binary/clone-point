/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ApiResponse {
  success: boolean;
  message: string;
  statusCode: string;
  data?: any; // Adjust this based on actual data structure
}
