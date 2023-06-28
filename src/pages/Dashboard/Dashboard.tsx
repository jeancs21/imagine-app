import CompanyListFetcher from './components/CompanyListFetcher/CompanyListFetcher'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='font-medium text-yellow-700 text-2xl sm:text-3xl ml-4 mt-8 sm:mt-0'>Imagine App!</div>
        <CompanyListFetcher />
    </div>
  )
}

export default Dashboard