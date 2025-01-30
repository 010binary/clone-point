import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type modals ='EDITBRANCHMODAL' | 'CREATEBRANCHMODAL' | string

interface ModalState {
  modalType: modals | null;
  // eslint-disable-next-line
  modalData: any;
}

const initialState: ModalState = {
  modalType: null,
  modalData: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      // eslint-disable-next-line
      action: PayloadAction<{ modalType: string; modalData: any }>
    ) => {
      state.modalType = action.payload.modalType;
      state.modalData = action.payload.modalData;
    },
    closeModal: (state) => {
      state.modalType = null;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
