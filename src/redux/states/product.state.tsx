import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../pages/models/product";

export const ProductEmptyState: Product = {
    id: 0,
    name: "",
    quantity: 0,
    price: "",
    description: "",
    company: "",
}

export const ProductState: Product[] = []

export const productSlice = createSlice({
    name: 'product',
    initialState: ProductState,
    reducers: {
        createProduct: (state, action) => {
            state.push(action.payload)
        },
        updateProduct: (state, action) => {
            const updatedProduct = action.payload;
            const index = state.findIndex(product => product.id === updatedProduct.id);
            if (index !== -1) {
                state[index] = updatedProduct
            }
        }
    }
})

export const { createProduct, updateProduct } = productSlice.actions

export default productSlice.reducer;