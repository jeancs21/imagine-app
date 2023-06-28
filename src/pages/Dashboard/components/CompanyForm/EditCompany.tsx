import { Fragment, FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Company } from "../../../../models/company";
import { Dialog, Transition } from "@headlessui/react";
import { AppStore } from "../../../../redux/store";
import { useSelector, useDispatch } from 'react-redux';
import { CompanyEmptyState, updateCompany } from "../../../../redux/states/company.state";

type Props = {
    isOpen: boolean,
    closeModal: () => void,
    selectedItem: Company
}


const EditCompanyForm: FunctionComponent<Props> = (props) => {

  const companies = useSelector((store: AppStore) => store.company)

  const filteredCompany = companies.filter(company => company.nit === props.selectedItem.nit);


  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
    setValue
  } = useForm({
    defaultValues: { ...CompanyEmptyState, ...filteredCompany[0] },
    mode: 'all'
  })

  const submit = async (data: Company) => {
    try {
          const updatedCompany = {...data, nit: props.selectedItem.nit};
          dispatch(updateCompany(updatedCompany))
          reset(CompanyEmptyState)
          setTimeout(() => {
            props.closeModal()
          }, 1000)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setValue('name', filteredCompany[0]?.name || '');
    setValue('address', filteredCompany[0]?.address || '');
    setValue('nit', filteredCompany[0]?.nit || '');
    setValue('phone', filteredCompany[0]?.phone || '');
  })

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Editar empresa
                  </Dialog.Title>
                  <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit(submit)}>
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
                      <label htmlFor='address-input'>Dirección</label>
                      <input
                        id='address-input'
                        className='rounded-md p-2 border border-black'
                        placeholder='Dirección'
                        type='text'
                        {...register("address", { required: true })}
                      />
                      {errors.name && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='nit-input'>NIT</label>
                      <input
                        id='nit-input'
                        className='rounded-md p-2 border border-black'
                        placeholder='NIT'
                        type='text'
                        {...register("nit", { required: true })}
                      />
                      {errors.name && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='phone-input'>Teléfono</label>
                      <input
                        id='phone-input'
                        className='rounded-md p-2 border border-black'
                        placeholder='Teléfono'
                        type='text'
                        {...register("phone", { required: true })}
                      />
                      {errors.name && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
                    </div>
                    <button
                      className='w-36 self-center bg-blue-500 rounded-md p-2 items-center text-white'
                      type='submit'
                      >
                        Enviar
                      </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default EditCompanyForm