import React from 'react'
import CompanyListFetcher from './components/CompanyListFetcher/CompanyListFetcher'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='font-medium text-yellow-700 text-3xl ml-4'>Imagine App!</div>
        <CompanyListFetcher />
    </div>
  )
}

export default Dashboard