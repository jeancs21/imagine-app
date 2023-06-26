import React, { useState } from 'react'
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage'
import CompanyListContainer from '../CompanyListContainer/CompanyListContainer'
import AddCompanyForm from '../CompanyForm/AddCompanyForm'
import { AppStore } from '../../../../redux/store'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { AdminAccount, UserAccount } from '../../../models/accounts'

const CompanyListFetcher = () => {

    const companies = useSelector((store: AppStore) => store.company)

    const userLogged = useSelector((store: AppStore) => store.loggedUser)

    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
      setIsOpen(false)
    }

    const openModal = () => {
      setIsOpen(true)
    }
  return (
    <div className='flex justify-center w-full my-16'>
      <div className='flex flex-col'>
          <div className='flex flex-col sm:flex-row justify-between items-center mb-8 gap-6'>
            <h3 className=' font-medium text-2xl'>Listado de empresas</h3>
            <button
              className={`${userLogged.email === AdminAccount.email ? 'flex' : 'hidden'}  justify-center w-36 bg-blue-500 rounded-full p-2 items-center text-white shadow-md hover:shadow-lg shadow-blue-400 hover:shadow-blue-400 duration-300`}
              onClick={openModal}
            >
              Nueva empresa
            </button>
            <Link
              to={"/add-product"}
              className={`${userLogged.email === AdminAccount.email ? 'flex' : 'hidden'} justify-center w-36 bg-green-600 rounded-full p-2 items-center text-white shadow-md hover:shadow-lg shadow-green-400 hover:shadow-green-400 duration-300`}
            >
              Nuevo Producto
            </Link>
          </div>
          {companies.length > 0 ?
            <CompanyListContainer companies={companies} />
            :
            <EmptyListMessage />
          }
      </div>
      <AddCompanyForm isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default CompanyListFetcher