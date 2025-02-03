/* eslint-disable */
import { signOut } from "@/utils/actions";
import { API_URL } from "@/utils/varaibles";
import { AxiosError, AxiosStatic, InternalAxiosRequestConfig } from "axios";

export default function setupAxios(axios: AxiosStatic, store: any) {
	const ezoneFinmansAPI = API_URL || "";
	axios.defaults.headers.common["Accept"] = "application/json";
	axios.interceptors.request.use(
		(config: any) => {
			const { auth } = store.getState(); // Destructure auth from state
			if (auth && auth.token) {
				// Check if auth and auth.token are defined
				if (config.headers && config.url.includes(ezoneFinmansAPI)) {
					config.headers.Authorization = `Bearer ${auth.token}`;
				}
			}
			return config;
		},
		(err: any) => Promise.reject(err),
	);

	axios.interceptors.response.use(
		(response) => response,
		async (error: AxiosError) => {
			const originalRequest = error.config as InternalAxiosRequestConfig & {
				_retry?: boolean;
			};
			const { auth } = store.getState();

			if (
				auth?.token &&
				(error.response?.status === 401 || error.response?.status === 403) &&
				!originalRequest._retry
			) {
				signOut();
			}

			return Promise.reject(error);
		},
	);
}
