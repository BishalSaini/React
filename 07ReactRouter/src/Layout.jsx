import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer' 
import { Outlet } from 'react-router-dom' //Outlet will use this layout as a base and whatever things is there at top and bottom(Header and Footer) it will keep it same and in centre the things will chnage 


function Layout() {
  return (
    <> 
    <Header/>  
     <Outlet/>   {/* Here You can change the thing(Jaha pe bhi outlet de diya waha se chize chanage kr skte) */}
    <Footer/>
    </>
  )
} //Header will be same Footer will be same and in centre means inside that things will get change

export default Layout