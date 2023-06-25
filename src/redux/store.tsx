import { configureStore } from "@reduxjs/toolkit";
import { Company } from "../pages/models/company";
import { companySlice } from "./states/company.state";

export interface AppStore {
    company: Company[];
}

export default configureStore<AppStore>({
    reducer: {
        company: companySlice.reducer
    }
})