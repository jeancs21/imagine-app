import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid";
import { useLayoutContext } from "../context/LayoutContext";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";

const Header = () => {

    const { setIsDrawerOpened } = useLayoutContext();
    const userLogged = useSelector((store: AppStore) => store.loggedUser)

  return (
    <>
        <header className='w-full'>
          <div className='flex justify-end items-center w-full gap-6'>
            <div className="flex gap-4">
              <UserIcon className="w-6 h-6" />
              <p className="font-medium">{userLogged.username}</p>
            </div>
            <button type="button" className="mr-4" onClick={() => setIsDrawerOpened(true)}>
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </header>
    </>
  )
}

export default Header