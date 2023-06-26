import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id?: string,
  path?: string
}

const InventoryButton:FunctionComponent<Props> = (props) => {
  return (
    <>
        <Link to={`${props.path}${props.id}`}
          className='flex justify-center sm:w-36 text-sm sm:text-base bg-yellow-500 rounded-full p-2 items-center text-black font-medium shadow-md hover:shadow-lg shadow-yellow-400 hover:shadow-yellow-400 duration-300'>
            Inventario
        </Link>
    </>
  )
}

export default InventoryButton