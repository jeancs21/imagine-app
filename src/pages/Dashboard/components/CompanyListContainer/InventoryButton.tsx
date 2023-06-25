import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id?: number,
  path?: string
}

const InventoryButton:FunctionComponent<Props> = (props) => {
  return (
    <>
        <Link to={`${props.path}${props.id}`}
          className='flex justify-center w-36 bg-blue-500 rounded-full p-2 items-center text-white shadow-md hover:shadow-lg shadow-blue-400 hover:shadow-blue-400 duration-300 '>
            Inventario
        </Link>
    </>
  )
}

export default InventoryButton