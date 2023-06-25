import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import CompanyInventory from '../pages/Inventory/CompanyInventory'
import AddProduct from '../pages/AddProduct/AddProduct'
import EditProduct from '../pages/EditProduct/EditProduct'
const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/inventory/:nit' element={<CompanyInventory />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/edit-product/:id' element={<EditProduct />} />
        </Routes>
    </>
  )
}

export default RouterApp