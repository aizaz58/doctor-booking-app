import NavBar from '@/components/frontend/NavBar'
import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default Layout