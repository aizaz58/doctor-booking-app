import { MegaMenu } from '@/components/frontend/MegaMenu'
import NavBar from '@/components/frontend/NavBar'
import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className=''>
      <div className='fixed top-0 w-full z-50'>
        <NavBar/>

      </div>
        <div className=" z-50 border-t container border-gray-400/30 left-0 right-0 bg-white  w-full  mx-auto py-4 fixed top-[65px]">
      <MegaMenu/>
     </div>
     <div className='pt-40 z-0'>
        {children}

     </div>
    </div>
  )
}

export default Layout