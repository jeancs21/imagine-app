import React from 'react'
import EditProductForm from './Form/EditProductForm'

const EditProduct = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='flex flex-col mt-10'>
            <div className='font-medium text-2xl mb-8'>Editar Producto</div>
            <EditProductForm />
        </div>
    </div>
  )
}

export default EditProduct