import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const dummydata = [
  {
    id: "123456",
    productName: "Fresh Apple",
    description: "Juicy red apples straight from the farm.",
    price: 2.5,
    stock: 100,
    images: ["/images/veg.png"],
    categoryId: "Fruits",
    isDeleted: false,
    createdAt: new Date("2025-03-01T10:00:00Z"),
    updatedAt: new Date("2025-03-01T10:00:00Z"),
  },
  {
    id: "234567",
    productName: "Organic Carrot",
    description: "Crunchy carrots, perfect for salads and snacks.",
    price: 1.8,
    stock: 150,
    images: ["/images/veg2.png"],
    categoryId: "Vegetables",
    isDeleted: false,
    createdAt: new Date("2025-03-05T10:00:00Z"),
    updatedAt: new Date("2025-03-05T10:00:00Z"),
  },
  {
    id: "345678",
    productName: "Salad Mix",
    description: "A fresh mix of organic greens for your perfect salad.",
    price: 4.0,
    stock: 50,
    images: ["/images/veg3.png"],
    categoryId: "Salad",
    isDeleted: false,
    createdAt: new Date("2025-03-10T10:00:00Z"),
    updatedAt: new Date("2025-03-10T10:00:00Z"),
  },
  {
    id: "456789",
    productName: "Tomato",
    description: "Ripe tomatoes perfect for cooking and salads.",
    price: 2.0,
    stock: 120,
    images: ["/images/veg.png"],
    categoryId: "Vegetables",
    isDeleted: false,
    createdAt: new Date("2025-03-12T10:00:00Z"),
    updatedAt: new Date("2025-03-12T10:00:00Z"),
  },
  {
    id: "567890",
    productName: "Banana",
    description: "Sweet bananas for a healthy snack.",
    price: 1.2,
    stock: 200,
    images: ["/images/veg2.png"],
    categoryId: "Fruits",
    isDeleted: false,
    createdAt: new Date("2025-03-15T10:00:00Z"),
    updatedAt: new Date("2025-03-15T10:00:00Z"),
  },
  {
    id: "123456",
    productName: "Fresh Apple",
    description: "Juicy red apples straight from the farm.",
    price: 2.5,
    stock: 100,
    images: ["/images/veg.png"],
    categoryId: "Fruits",
    isDeleted: false,
    createdAt: new Date("2025-03-01T10:00:00Z"),
    updatedAt: new Date("2025-03-01T10:00:00Z"),
  },
  {
    id: "234567",
    productName: "Organic Carrot",
    description: "Crunchy carrots, perfect for salads and snacks.",
    price: 1.8,
    stock: 150,
    images: ["/images/veg2.png"],
    categoryId: "Vegetables",
    isDeleted: false,
    createdAt: new Date("2025-03-05T10:00:00Z"),
    updatedAt: new Date("2025-03-05T10:00:00Z"),
  },
  {
    id: "345678",
    productName: "Salad Mix",
    description: "A fresh mix of organic greens for your perfect salad.",
    price: 4.0,
    stock: 50,
    images: ["/images/veg3.png"],
    categoryId: "Salad",
    isDeleted: false,
    createdAt: new Date("2025-03-10T10:00:00Z"),
    updatedAt: new Date("2025-03-10T10:00:00Z"),
  },
];

export interface ProductsInterface {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
interface ProductState {
  products: ProductsInterface[];
}

const initialState: ProductState = {
  products: dummydata,
};
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductsInterface[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductsInterface>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<ProductsInterface>) => {
      const index = state.products.findIndex(
        (products) => products.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products[index].isDeleted = true;
      }
    },
  },
});

export const { setProduct, addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
