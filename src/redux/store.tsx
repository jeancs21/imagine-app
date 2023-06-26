import { configureStore } from "@reduxjs/toolkit";
import { Company } from "../pages/models/company";
import { companySlice } from "./states/company.state";
import { Product } from "../pages/models/product";
import { productSlice } from "./states/product.state";
import { LoggedUser } from "../pages/models/loggedUser.model";
import { loggedUserSlice } from "./states/loggedUser.state";
import { loadDbLoggedUserState } from "../services/persist-loggedUser-info.service";

export interface AppStore {
    company: Company[];
    product: Product[];
    loggedUser: LoggedUser;
}

const initialState = {
    loggedUser: loadDbLoggedUserState(),
}

export default configureStore<AppStore>({
    reducer: {
        company: companySlice.reducer,
        product: productSlice.reducer,
        loggedUser: loggedUserSlice.reducer
    },
    preloadedState: initialState
})