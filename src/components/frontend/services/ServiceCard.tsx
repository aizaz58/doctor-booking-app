import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { servicesProps } from './ServiceList'

export default function ServiceCard({service}:{service:servicesProps}) {
  return (
<Link href="#" className='rounded-md  bg-slate-100 hover:bg-slate-200 gap-4 duration-300 flex overflow-hidden'>
<Image  src={service.image} alt="title" width={1170} height={848} className='w-1/3 object-cover aspect-video'/>
<div className="flex flex-col w-2/3 py-4">
    <h2>{service.title}</h2>
    <p className='text-[0.6rem]'>936 doctors available</p>
</div>
</Link>  
)}