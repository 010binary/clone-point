"use client";
import { combineReducers } from "redux";
import authReducer from "../../Redux/auth";
import modalReducer from "../../Redux/modal";

export const rootReducer = combineReducers({
	auth: authReducer,
	modalSlice: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
