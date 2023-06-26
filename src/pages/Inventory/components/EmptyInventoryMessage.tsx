import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppStore } from '../../../redux/store'
import { AdminAccount } from '../../models/accounts'

const EmptyInventoryMessage = () => {
  const userLogged = useSelector((store: AppStore) => store.loggedUser)
  return (
    <>
      <div className='flex w-full bg-slate-200 p-8 justify-center gap-2'>
        {userLogged.email === AdminAccount.email ?
          <div className='flex flex-col'>
              <p>Actualmente no hay productos registrados</p>
              <p>Puedes registrar uno ahora!</p>
              <Link to={"/add-product"} className='mt-4 self-center bg-blue-500 rounded-full p-2 items-center text-white shadow-md hover:shadow-lg shadow-blue-400 hover:shadow-blue-400 duration-300`'>Nuevo producto</Link>
          </div>
          :
          <p>Actualmente no hay productos registrados. Vuelva más tarde</p>
        }
      </div>
    </>
  )
}

export default EmptyInventoryMessage