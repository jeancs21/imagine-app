import React, { useState } from 'react'
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage'
import CompanyListContainer from '../CompanyListContainer/CompanyListContainer'
import AddCompanyForm from '../CompanyForm/AddCompanyForm'
import { AppStore } from '../../../../redux/store'
import { useSelector } from "react-redux"

const CompanyListFetcher = () => {

    const companies = useSelector((store: AppStore) => store.company)

    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
      setIsOpen(false)
    }

    const openModal = () => {
      setIsOpen(true)
    }
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col'>
          <div className='flex justify-between items-center mb-8'>
            <h3 className=' font-medium text-2xl'>Listado de empresas</h3>
            <button
              className='flex justify-center w-36 bg-blue-500 rounded-full p-2 items-center text-white shadow-md hover:shadow-lg shadow-blue-400 hover:shadow-blue-400 duration-300'
              onClick={openModal}
            >
              Nueva empresa
            </button>
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