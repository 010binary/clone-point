/* eslint-disable */
import { loadingBarRef } from "@/app/redux-provider";
import { TOASTDURATION } from "@/constants/globalContants";
import { toast } from "sonner";

type voidFn = () => void;
let resetState: voidFn = () => {};

export const APICall = async (
	fn: (...args: any) => Promise<any>,
	args?: any,
	showSuccessToast?: boolean ,
	showLoadingBar: boolean = true,
) => {
	try {
		showLoadingBar && loadingBarRef.current?.continuousStart();
		const response =
			args &&
			typeof args[Symbol.iterator] === "function" &&
			!(typeof args == "string")
				? await fn(...args)
				: await fn(args);
		if (showSuccessToast){
			toast.success(response.data.message, {
				duration: TOASTDURATION,
				className: "bg-green-500 !text-white !border-0",
				descriptionClassName: "text-white",
			  });
		}
		showLoadingBar && loadingBarRef.current?.complete();
		return response;
	} catch (error: any) {
		if (error.response) {
			toast.error(error.response.data.message || 'Something went wrong', { duration: TOASTDURATION,className:'bg-red-500 !text-white !border-0', descriptionClassName:'text-white'});

			if (error.response.status == 401) {
				resetState();
			}
		}
		showLoadingBar && loadingBarRef.current?.complete();
		throw error;
	}
};