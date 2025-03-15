import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
export const Store = configureStore({
  reducer: { productReducer },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
