import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pickForm: 1,
  corporateForm: 1,
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
    setCorporateForm: (state, action: PayloadAction<number>) => {
      state.corporateForm = action.payload;
    },
  },
});

export const { setLoading, setPickForm, setCorporateForm } =
  customerSlice.actions;

export default customerSlice.reducer;
