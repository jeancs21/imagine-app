import React from 'react'
import CompanyListFetcher from './components/CompanyListFetcher/CompanyListFetcher'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <div>
        <div>Dashboard</div>
        <Header />
        <CompanyListFetcher />
    </div>
  )
}

export default Dashboard