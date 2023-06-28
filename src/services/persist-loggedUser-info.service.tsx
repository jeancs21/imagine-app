import { LoggedUser } from "../models/loggedUser.model";

export const persistDbLoggedUserState = (loggedUserInfo: LoggedUser) => {
    localStorage.setItem('loggedUser_info', JSON.stringify({...loggedUserInfo}));
};

export const clearDbLoggedUser = () => {
    localStorage.setItem('loggedUser_info', '');
};

export const manageLoggedUserState = (loggedUser: LoggedUser) => {
    persistDbLoggedUserState(loggedUser);
}

export const loadDbLoggedUserState = () => {
    const loggedUserInfo = localStorage.getItem('loggedUser_info');
    if (loggedUserInfo) {
        return JSON.parse(loggedUserInfo);
    }
}