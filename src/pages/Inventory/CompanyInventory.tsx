import ProductFetcher from './components/ProductFetcher'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import CompanyDetails from './components/CompanyDetails';
import BackToHomeButton from '../../components/BackToHomeButton';

const CompanyInventory = () => {

  const { nit } = useParams();
  const companies = useSelector((store: AppStore) => store.company)
  const filteredCompany = companies.filter(company => company.nit === nit);
  const company = filteredCompany[0]


  return (
    <div className='flex flex-col w-full'>
      <div className='ml-4 mt-4'>
        <BackToHomeButton />
        <div className='font-medium text-2xl my-8 text-yellow-600'>Inventario</div>
        <CompanyDetails company={company} />
      </div>
      <div className='flex mt-10 self-center'>
        <ProductFetcher company={company} />
      </div>
    </div>
  )
}

export default CompanyInventory