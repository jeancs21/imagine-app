import React from 'react'
import AddProductForm from './Form/AddProductForm'

const AddProduct = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='flex flex-col mt-10'>
            <div className='font-medium text-2xl mb-8'>Agregar Producto</div>
            <AddProductForm />
        </div>
    </div>
  )
}

export default AddProduct