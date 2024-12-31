import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './Shared/NavBar'
import { Footer } from './Shared/Footer'


export const MainLayout = () => {

  const location = useLocation()

  const noHeaderFooter = location.pathname.includes("login") ||  location.pathname.includes("signUp") || location.pathname.includes("/payment")
  return (
    <div className=''>
      {noHeaderFooter ||  <NavBar /> }
       
        <div className=' min-h-[120vh]'>
          <Outlet />
        </div>
        {noHeaderFooter ||  <Footer /> }
        
    </div>
  )
}