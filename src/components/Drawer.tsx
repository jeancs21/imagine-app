import { FunctionComponent } from "react";
import { GiftIcon, HomeIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import UserDropDownMenu from "./UserDropDownMenu";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { AdminAccount } from "../models/accounts";

type Props = {
	isOpen: boolean;
	close: () => void;
};

const Drawer: FunctionComponent<Props> = (props) => {
	
	const userLogged = useSelector((store: AppStore) => store.loggedUser)

	return (
		<div
			className={` transition-all duration-300 fixed top-0 w-80 h-full overflow-y-auto bg-white shadow-lg block  ${props.isOpen ? "right-0" : "right-[-320px]"}`}
		>
			<button className="right-4 absolute mt-2 ml-4" onClick={() => props.close()}>
				<XMarkIcon className="w-6 h-6" />
			</button>
			<div className="flex flex-col w-full h-52 pl-4 bg-slate-50 justify-center items-center ">
				<div className="cont-profile flex flex-col w-full pt-2 gap-2 items-center">
					<div className="flex h-16 w-16 bg-blue-400 rounded-full justify-center items-center">
						<UserIcon className="h-8 w-8" color="white" />
					</div>
					<div className="w-full flex justify-center">
						<UserDropDownMenu />
					</div>
				</div>

			</div>
			<div className=" flex flex-col  ">
				<ul className="flex flex-col w-full" >
					<li className="border-b-2  border-slate-50 duration-300 hover:border-blue-400 justify-center items-center" >
						<Link to={"/dashboard"} className='flex p-4 items-center duration-300 hover:bg-blue-100' onClick={() => props.close()}>
							<HomeIcon className="w-6 h-6 fill-blue-500" />
							<p className=" text-sm pl-4">Inicio</p>
						</Link>
					</li>

					{userLogged.email === AdminAccount.email &&
						<li className="border-b-2  border-slate-50 justify-center items-center duration-300 hover:border-blue-400" >
							<Link to={"/add-product"} className="flex p-4 h-full items-center  duration-300 hover:bg-blue-100" onClick={() => props.close()}>
								<GiftIcon className="w-6 h-6 fill-blue-500" />
								<p className="text-sm pl-4 ">Nuevo producto</p>
							</Link>
						</li>
					}
				</ul>
			</div>
		</div>
	);
};

export default Drawer;