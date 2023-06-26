import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import CompanyInventory from '../pages/Inventory/CompanyInventory'
import AddProduct from '../pages/AddProduct/AddProduct'
import EditProduct from '../pages/EditProduct/EditProduct'
import LogIn from '../pages/Login/LogIn'
import { useLayoutContext } from '../context/LayoutContext'
import Drawer from '../components/Drawer'
const RouterApp = () => {

  const { isDrawerOpened, setIsDrawerOpened } = useLayoutContext();

  return (
    <>
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/inventory/:nit' element={<CompanyInventory />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/edit-product/:id' element={<EditProduct />} />
        </Routes>
        <Drawer
          close={() => setIsDrawerOpened(false)}
          isOpen={isDrawerOpened}
        />
    </>
  )
}

export default RouterApp