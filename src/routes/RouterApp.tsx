import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import CompanyInventory from '../pages/Inventory/CompanyInventory'
import AddProduct from '../pages/AddProduct/AddProduct'
import EditProduct from '../pages/EditProduct/EditProduct'
import LogIn from '../pages/Login/LogIn'
import { useLayoutContext } from '../context/LayoutContext'
import Drawer from '../components/Drawer'
import { PrivateRoutes, PublicRoutes } from '../pages/models/routes'
import AuthGuard from '../guards/auth.guard'
import NotFound from '../pages/NotFound/NotFound'
const RouterApp = () => {

  const { isDrawerOpened, setIsDrawerOpened } = useLayoutContext();

  return (
    <>
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path='*' element={<NotFound />} />
            <Route path={PublicRoutes.LOGIN} element={<LogIn />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={PrivateRoutes.INVENTORY} element={<CompanyInventory />} />
              <Route path={PrivateRoutes.ADDPRODUCT} element={<AddProduct />} />
              <Route path={PrivateRoutes.EDITPRODUCT} element={<EditProduct />} />
            </Route>
        </Routes>
        <Drawer
          close={() => setIsDrawerOpened(false)}
          isOpen={isDrawerOpened}
        />
    </>
  )
}

export default RouterApp