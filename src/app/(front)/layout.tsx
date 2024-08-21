import { Footer } from '@/components/frontend/Footer'
import { MegaMenu } from '@/components/frontend/MegaMenu'
import NavBar from '@/components/frontend/NavBar'
import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className=''>
      <div className='fixed top-0 w-full z-50'>
        <NavBar/>

      </div>
        {/* <div className=" z-50 border-t container border-gray-400/30 left-0 right-0 bg-white  w-full  mx-auto py-4 fixed top-[65px]">
      <MegaMenu/>
     </div> */}
     <div className='z-0 pt-[3.5rem]'>
        {children}

     </div>
     <Footer/>
    </div>
  )
}

export default Layout