import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import CompanyInventory from '../pages/Inventory/CompanyInventory'
const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/inventory' element={<CompanyInventory />} />
        </Routes>
    </>
  )
}

export default RouterApp