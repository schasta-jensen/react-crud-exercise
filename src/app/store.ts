import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import organizationSlice from "./slices/organizationtSlice";

export const store = configureStore({
  reducer: {
    organization: organizationSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
