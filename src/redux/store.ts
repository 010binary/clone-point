import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customerSlice";
import modalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    customerSlice: customerReducer,
    modalSlice: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
