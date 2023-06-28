import BackToHomeButton from '../../components/BackToHomeButton'
import AddProductForm from './Form/AddProductForm'

const AddProduct = () => {
  return (
    <div className='flex flex-col w-full'>
        <div className='ml-4 mt-6'>
          <BackToHomeButton />
        </div>
        <div className='flex items-center flex-col mt-10'>
            <div className='font-medium text-2xl mb-8'>Agregar Producto</div>
            <AddProductForm />
        </div>
    </div>
  )
}

export default AddProduct