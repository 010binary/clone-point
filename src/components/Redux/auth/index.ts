import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	token: string;
	// user: UserModel | null;
	// profile: ProfileModel | null;
}

const initialState: AuthState = {
	token: "",
	// user: null,
	// profile: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		resetAuth: () => {
			return initialState;
		},
		authLogin: (
			state,
			action: PayloadAction<{ token: string; 
				// user: UserModel
			 }>,
		) => {
			state.token = action.payload.token;
			// state.user = action.payload.user;
		},
	
		authLogout: () => {
			return initialState;
		},
	},
});

export const { resetAuth, authLogin, authLogout } =
	authSlice.actions;
export default authSlice.reducer;
