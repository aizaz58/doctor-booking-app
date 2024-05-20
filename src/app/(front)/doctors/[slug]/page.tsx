import { DoctorDetailTab } from '@/components/frontend/DoctorDetailTab'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
export default function Page() {
  return (
    <div className='bg-slate-50 py-20 min-h-screen'>
        <div className="max-w-4xl border border-gray-200 mx-auto bg-white shadow-md rounded-md">
        <div className="py-6 px-8">
           <div className="flex justify-between">
            <div className="">
            <div className="flex flex-col">
                <h2 className="uppercase  font-bold text-2xl tracking-widest">
                    Vijay Patel
                </h2>
                <p className='text-gray-500 uppercase text-xs'>Adult Health</p>
            </div>
            <div className="flex flex-col mt-2">
                <p className='font-'>In-person doctor visit</p>
                <p className='text-gray-500 text-sm'>
                57 St. Marks Place, New York, NY 10003
                </p>
            </div>
            </div>
            <Image src="/doctor.jpg" width={612} height={506} alt='doctor' className='w-36  h-36 rounded-full   object-cover '/>

           </div>
           <div className="z-0">
           <DoctorDetailTab/>

           </div>
        </div>
        </div>
        <div className="  mx-auto  bg-white justify-between z-50 fixed bottom-0 w-full shadow-2xl rounded-md py-8 px-6">
          
          <div className="flex justify-between mx-auto max-w-4xl">
             <div className="w-full">

            <p className='text-xl font-bold'>$58</p>
           <p className='font-semibold text-sm'>Tue, may 16 2024</p> 
           </div>
           <Button className=' inline-flex w-1/2 '><Plus className='w-4 h-4 mr-2'/> Book</Button>
            </div>
        </div>
       </div>
  )
}
