import NavBar from '@/components/dashboard/NavBAr'
import Sidebar from '@/components/dashboard/SideBar'
import { MegaMenu } from '@/components/frontend/MegaMenu'

import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className=''>
      <div className='fixed top-0 w-full z-50'>
        <NavBar/>
      </div>
      
     <div className=' flex min-h-screen  pt-16  z-0'>
      <aside className="fixed min-h-screen">
<Sidebar/>

      </aside>
<div className="px-8 pl-64 min-h-screen">
        {children}

</div>

     </div>
    </div>
  )
}

export default Layout