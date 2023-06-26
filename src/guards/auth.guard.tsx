import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../pages/models/routes"

const AuthGuard = () => {
    const userLogged = useSelector((store: AppStore) => store.loggedUser)

    return userLogged.email ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard