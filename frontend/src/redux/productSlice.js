import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  productList: [],
  singleProduct: {},
  cartList: [],
  totalAmount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = { ...action.payload[0] };
    },
    setItemInCart: (state, action) => {
      state.cartList = JSON.parse(JSON.stringify(state.cartList));
      const existingProductIndex = state.cartList.findIndex((product) =>
        Object.values(product).includes(action.payload.name)
      );

      if (existingProductIndex !== -1) {
        toast.success("Product Already added in cart");
      } else {
        state.totalAmount =
          Number(state.totalAmount) + Number(action.payload.price); //Adding price when a new item is pushed into the cart
        state.cartList = [...state.cartList, { ...action.payload }];
      }
    },
    changeItemQuantity: (state, action) => {
      const { id, quant, type } = action.payload;
      state.cartList = JSON.parse(JSON.stringify(state.cartList));
      const existingProductIndex = state.cartList.findIndex((product) =>
        Object.values(product).includes(id)
      );
      const updatedCartList = [...state.cartList];
      updatedCartList[existingProductIndex].quantity = quant;

      // Check the type of quantity change and change the totalAmount resp.
      if (type === "increase") {
        state.totalAmount =
          Number(state.totalAmount) +
          Number(updatedCartList[existingProductIndex].price);
      } else {
        state.totalAmount =
          Number(state.totalAmount) -
          Number(updatedCartList[existingProductIndex].price);
      } //Update total price whenever the quantity is changed

      state.cartList = updatedCartList;
    },
    removeCartProduct: (state, action) => {
      state.cartList = JSON.parse(JSON.stringify(state.cartList));
      const existingProductIndex = state.cartList.findIndex((product) =>
        Object.values(product).includes(action.payload.id)
      );
      state.totalAmount =
        Number(state.totalAmount) -
        Number(
          state.cartList[existingProductIndex].price *
            state.cartList[existingProductIndex].quantity
        );

      state.cartList.splice(existingProductIndex, 1);
      toast.success("Item Removed from Cart");
    },
  },
});

export const {
  setDataProduct,
  setSingleProduct,
  setItemInCart,
  changeItemQuantity,
  removeCartProduct,
} = productSlice.actions;

export default productSlice.reducer;
