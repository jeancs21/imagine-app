import { createSlice } from "@reduxjs/toolkit";
import { LoggedUser } from "../../models/loggedUser.model";

export const LoggedUserEmptyState: LoggedUser = {
    username: "",
    email: "",
    password: "",
}

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState: LoggedUserEmptyState,
    reducers: {
        login: (_, action) => {
            return action.payload;
        },
        logout: () => {
            return LoggedUserEmptyState
        },
    },
});

export const { login, logout } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;