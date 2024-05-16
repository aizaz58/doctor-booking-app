import React from 'react'
import ServiceCard from './ServiceCard'
export type servicesProps={title:string,image:string,slug:string}
export default function ServiceList({services}:{services:servicesProps[]}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
      {services.map((service,i)=>{
        return(
          <ServiceCard key={i} service={service}/>
        )
      })}
       
    </div>
  )
}
