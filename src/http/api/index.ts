import HttpClient from "../http.service";

const apiUrl = import.meta.env.VITE_APP_BASE_URL;

export const SetupHttpClient = new HttpClient({
    baseURL: apiUrl
})