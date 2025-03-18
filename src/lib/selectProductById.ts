import { RootState } from "@/store/store";

export const selectProductById = (state: RootState, productId: string) => {
  return state.productReducer.products.find(
    (product) => product.id === productId
  );
};
