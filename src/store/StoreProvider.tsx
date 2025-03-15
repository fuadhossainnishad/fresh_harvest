"use client";
import { Provider } from "react-redux";
import { Store } from "./store";
function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}

export default StoreProvider;
