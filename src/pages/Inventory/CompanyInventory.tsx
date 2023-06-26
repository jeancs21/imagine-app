import React from 'react'
import ProductFetcher from './components/ProductFetcher'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import CompanyDetails from './components/CompanyDetails';

const CompanyInventory = () => {

  const { nit } = useParams();
  const companies = useSelector((store: AppStore) => store.company)
  const filteredCompany = companies.filter(company => company.nit === nit);
  const company = filteredCompany[0]


  return (
    <div className='flex flex-col w-full'>
      <Link to={"/dashboard"}>Volver a inicio</Link>
      <div className='font-medium text-2xl my-8'>Inventario</div>
      <CompanyDetails company={company} />
      <div className='flex mt-10'>
        <ProductFetcher company={company} />
      </div>
    </div>
  )
}

export default CompanyInventory