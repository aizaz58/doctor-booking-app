import { Stethoscope, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DoctorCard({isInPerson}:{isInPerson?:boolean}) {
    const timeStamp=[
        {time:"8:30",
            period:"am"
        },
        {time:"9:30",
            period:"am"
        },
        {time:"10:30",
            period:"am"
        },
        {time:"11:30",
            period:"am"
        },
        {time:"5:30",
            period:"pm"
        }
    ]
  return (
    <div  className='border border-gray-200 rounded-md bg-white inline-flex flex-col py-8 px-6 hover:shadow-md duration-300 transition-all hover:border-gray-600'>
       <Link href="/doctors/doctor">

        <h2 className='uppercase  font-bold text-2xl tracking-widest'>VIjar Patel</h2>
        {!isInPerson &&
        <p className=' text-sm text-gray-600 py-3'>3250 Lincoln Highway, Kendall Park</p>
        }
        <div className="flex itmes-center gap-4 py-4">
            <div className="relative">
            <Image src="/doctor.jpg" width={612} height={506} alt='doctor' className='w-24  h-24 rounded-full   object-cover '/>
            {isInPerson &&
            <p className="bg-blue-200 absolute bottom-0 right-0 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center"><Video className='w-6 h-6'/></p>
        }
            </div>
            
        
            <div className="flex flex-col gap-2">
                <p className='flex items-center '><Stethoscope className='w-4 h-4 mr-2 flex-shrink-0'/>
                <span>Family Medicine</span>
                </p>
                <p className='bg-green-200 py-3 px-6 uppercase'>Available Today</p>
            </div>
        </div>
       </Link>
        <div className="pt-6 border-t border-gray-400">
<h3 className=' flex gap-4 text-sm justify-between items-center'><span className='text-gray-700'>Tue, Mar 12</span><span className='font-bold'>$120</span></h3>
<div className="py-3 grid grid-cols-3 gap-1">
    {timeStamp.slice(0,5).map((item,i)=>{
        return(
            <Link href="#" key={i} className='flex  bg-blue-600  text-white items-center justify-center text-sm py-2 border border-gray-200 rounded-md hover:bg-blue-800'>{item.time}{item.period}</Link>
        )
    })}
    <Link href="#"className='flex items-center justify-center  text-white bg-blue-700 text-sm py-2 border border-gray-200 rounded-md hover:bg-blue-800'>More Time...</Link>
</div>

        </div>
    </div>

  )
}

export default DoctorCard