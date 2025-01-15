import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pickForm: 1,
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPickForm: (state, action: PayloadAction<number>) => {
      state.pickForm = action.payload;
    },
  },
});

export const { setLoading, setPickForm } = customerSlice.actions;

export default customerSlice.reducer;
