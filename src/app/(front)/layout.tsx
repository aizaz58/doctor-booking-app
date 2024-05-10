import { MegaMenu } from '@/components/frontend/MegaMenu'
import NavBar from '@/components/frontend/NavBar'
import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-blue-950'>
        <NavBar/>
        <div className="max-w-5xl mx-auto py-6">
      <MegaMenu/>
     </div>
        {children}
    </div>
  )
}

export default Layout