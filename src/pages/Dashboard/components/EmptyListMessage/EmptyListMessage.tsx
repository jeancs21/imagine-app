import { useSelector } from 'react-redux'
import { AppStore } from '../../../../redux/store'
import { AdminAccount } from '../../../../models/accounts'

const EmptyListMessage = () => {
  const userLogged = useSelector((store: AppStore) => store.loggedUser)
  return (
    <>
      <div className='flex w-full bg-slate-200 p-8 justify-center gap-2'>
        {userLogged.email === AdminAccount.email ?
          <div className='flex flex-col'>
              <p>Actualmente no hay empresas registrados</p>
              <p>Puedes registrar una ahora!</p>
          </div>
          :
          <p>Actualmente no hay empresas registradas. Vuelva más tarde</p>
        }
      </div>
    </>
  )
}

export default EmptyListMessage