import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppStore } from '../../../redux/store'
import { AdminAccount } from '../../models/accounts'

type Props = {
    id: number,
    name: string,
    quantity: number,
    price: string,
    description: string,
}

const Card:FunctionComponent<Props> = (props) => {
  
  const userLogged = useSelector((store: AppStore) => store.loggedUser)
  
  return (
    <div className=' flex flex-col w-64 bg-slate-100 rounded-lg justify-center p-3 m-4 flex-wrap hover:scale-[1.1] duration-300'>
        <div className='text-center'>
            <p className='text-2xl font-medium mb-4'>{props.name}</p>
            <p>{`Cantidad: ${props.quantity}`}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
        {userLogged.email === AdminAccount.email &&
          <div className='flex justify-around mt-6'>
            <Link to={`/edit-product/${props.id}`} className='h-6 w-6'>
              <PencilSquareIcon />
            </Link>
            <div className='h-6 w-6'>
              <TrashIcon />
            </div>
          </div>
        }
    </div>
  )
}

export default Card