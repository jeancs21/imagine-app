import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppStore } from '../../../redux/store';
import { useForm } from 'react-hook-form';
import { ProductEmptyState, updateProduct } from '../../../redux/states/product.state';
import { Product } from '../../../models/product';

const EditProductForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const productList = useSelector((store: AppStore) => store.product)
    const filteredProducts = productList.filter(product => product.id === parseInt(id ?? ""))
    const product = filteredProducts[0]

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
      } = useForm({
        defaultValues: { ...ProductEmptyState, ...product },
        mode: 'all'
      })
  
      const submit = async (data: Product) => {
        console.log(data)
        try {
              const updatedProduct = {...data, id: parseInt(id ?? "")}
              dispatch(updateProduct(updatedProduct))
              reset(ProductEmptyState)
              setTimeout(() => {
                navigate("/dashboard")
              }, 1000)
        }
        catch (error) {
          console.log(error)
        }
      }
  
  return (
    <>
        <form className='flex flex-col gap-4 justify-center w-96' onSubmit={handleSubmit(submit)}>
            <div className='flex flex-col gap-2'>
                <label htmlFor='name-input'>Nombre</label>
                <input
                    id='name-input'
                    className='rounded-md p-2 border border-black'
                    placeholder='Nombre'
                    type='text'
                    {...register("name", { required: true })}
                />
                {errors.name && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='quantity-input'>Cantidad</label>
                <input
                    id='quantity-input'
                    className='rounded-md p-2 border border-black'
                    placeholder='Cantidad'
                    type='number'
                    {...register("quantity", { required: true })}
                />
                {errors.quantity && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='price-input'>Precio</label>
                <input
                    id='price-input'
                    className='rounded-md p-2 border border-black'
                    placeholder='Precio'
                    type='text'
                    {...register("price", { required: true })}
                />
                {errors.price && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='description-input'>Descripción</label>
                <input
                    id='description-input'
                    className='rounded-md p-2 border border-black'
                    placeholder='Descripción'
                    type='text'
                    {...register("description", { required: true })}
                />
                {errors.description && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
            </div>
            <button
                className='w-36 self-center bg-blue-500 rounded-md p-2 items-center text-white'
                type='submit'
            >
                Guardar cambios
            </button>
        </form>
      </>
  )
}

export default EditProductForm
