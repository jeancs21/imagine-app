import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ProductEmptyState, createProduct } from "../../../redux/states/product.state";
import { Product } from "../../../models/product";
import { useNavigate } from "react-router-dom";
import { AppStore } from "../../../redux/store";


const AddProductForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const companies = useSelector((store: AppStore) => store.company)

    const {
      register,
      handleSubmit,
      reset,
      formState: {errors}
    } = useForm({
      defaultValues: ProductEmptyState,
      mode: 'all'
    })

    const submit = async (data: Product) => {
      console.log(data)
      try {

            dispatch(createProduct(data))
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
            <div className="flex flex-col gap-2">
              <label htmlFor="company-input">Empresa</label>
              <select
                id="company"
                className="rounded-md p-2 border border-black"
                {...register("company")}
              >
                <option value="" disabled>Selecciona una empresa</option>
                {companies.map((company) => (
                  <option key={company.nit} value={company.nit}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>
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
                Enviar
            </button>
        </form>
      </>
    )
  }
  
  export default AddProductForm