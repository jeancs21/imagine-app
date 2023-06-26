import { createSlice } from "@reduxjs/toolkit";
import { Company } from "../../pages/models/company";
import { companiesData } from "../../mock/companies";

export const CompanyEmptyState: Company = {
    name: "",
    address: "",
    nit: "",
    phone: ""
}

export const CompanyState: Company[] = []

export const companySlice = createSlice({
    name: 'company',
    initialState: CompanyState,
    reducers: {
        createCompany: (state, action) => {
            state.push(action.payload)
        },
        updateCompany: (state, action) => {
            const updatedCompany = action.payload;
            const index = state.findIndex(company => company.nit === updatedCompany.nit);
            if (index !== -1) {
                state[index] = updatedCompany
            }
        }
    }
})

export const { createCompany, updateCompany } = companySlice.actions;

export default companySlice.reducer;