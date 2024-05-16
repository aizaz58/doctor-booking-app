import Link from 'next/link'
import React from 'react'

function LinkCards({className}:{className?:string}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>

   <Link href="#" className={`flex gap-4 bg-slate-800 text-slate-50 rounedd-md py-3 px-6 ${className}`}>
    <h2>Anxiety</h2>
    <span className='' aria-hidden='true'>&rarr;</span>
   </Link>
    </div>

  )
}

export default LinkCards