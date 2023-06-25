import { configureStore } from "@reduxjs/toolkit";
import { Company } from "../pages/models/company";
import { companySlice } from "./states/company.state";
import { Product } from "../pages/models/product";
import { productSlice } from "./states/product.state";

export interface AppStore {
    company: Company[];
    product: Product[];
}

export default configureStore<AppStore>({
    reducer: {
        company: companySlice.reducer,
        product: productSlice.reducer
    }
})