"use client";
import store from "@/components/set-up/redux/store";
import { Provider } from "react-redux";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import * as _redux from "../components/set-up";
import axios from "axios";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

_redux.setupAxios(axios, store);
export const loadingBarRef = React.createRef<LoadingBarRef | null>();

const queryClient = new QueryClient();
export default function ReduxProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<LoadingBar
				color='#031C4F'
				ref={loadingBarRef as React.RefObject<LoadingBarRef>}
				height={5}
			/>
			<QueryClientProvider client={queryClient}>
				<Toaster />
				<Provider store={store}>
					{children}
				</Provider>
			</QueryClientProvider>
		</>
	);
}
