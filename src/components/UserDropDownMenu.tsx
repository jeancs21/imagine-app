import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { Fragment } from "react"
import Logout from "./Logout"

const UserDropDownMenu = () => {

    const userLogged = useSelector((store: AppStore) => store.loggedUser)
  
    return (
      <Menu as="div" className="relative w-32">
        <div className=''>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="flex justify-center ml-2 items-center ">
              <h4 className="text-base text-center">{userLogged.email}</h4>
              <ChevronDownIcon
                  className="ml-2 h-4 w-4  hover:text-gray-500"
                  aria-hidden="true"
              />
            </div>
          </Menu.Button>
        </div>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-32 divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                  <Logout />
              </Menu.Item>
            </Menu.Items>
        </Transition>
      </Menu>
    )
  }
  
  export default UserDropDownMenu