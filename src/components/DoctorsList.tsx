import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import { Map } from 'lucide-react'
import DoctorsListCarousel from './DoctorsListCarousel'

export default function DoctorsList({title,isInPerson,className}:{title:string,isInPerson:boolean,className:string}) {
  const doctors=[
    {
    title:"john"
  },
    {
    title:"john"
  },
    {
    title:"john"
  },
    {
    title:"john"
  },
    {
    title:"john"
  },
    {
    title:"john"
  },
]
  return (
    <div className={className}>
        <div className="max-w-6xl mx-auto">

        <SectionHeading title={title}/>
        <div className="py-4 flex items-center justify-between">
          {isInPerson?(<Link href="#" className='text-sm flex items-center transition-all duration-200 text-blue-500 font-semibold hover:text-blue-700'>
            <Map className='mr-2 h-4 w-4 '/>
            <span>Map View</span> </Link>):(
              <ToggleButton title=" within 2 hours"/>

            )}
<Link className='px-6 py-3 border border-blue-600 bg-white hover:bg-slate-200 duration-100' href="# ">See All</Link>
        </div>
        <div className="py-6">
 <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson}/>
</div>

        </div>
    </div>
  )
}
