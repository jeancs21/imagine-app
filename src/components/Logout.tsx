import { useNavigate } from "react-router-dom";
import { useLayoutContext } from "../context/LayoutContext";
import { useDispatch } from "react-redux";
import { logout } from "../redux/states/loggedUser.state";
import { clearDbLoggedUser } from "../services/persist-loggedUser-info.service";
import { PowerIcon } from "@heroicons/react/24/solid";

const Logout = () => {
    const { setIsDrawerOpened } = useLayoutContext();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        clearDbLoggedUser();
        setIsDrawerOpened(false);
        navigate("/");
    }
    return (
        <div className='flex items-center px-2'>
            <PowerIcon
                className="text-red-500 h-5 w-5"
            />
            <button
                onClick={handleLogout}
                className=" flex text-red-500 justify-center items-center h-8 w-32 duration-300 hover:text-red-400"   >
                    Cerrar sesión
            </button>
        </div>
    )
}

export default Logout